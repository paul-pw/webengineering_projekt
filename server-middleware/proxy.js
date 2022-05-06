const express = require('express') // critical module for building a Web Server App
// Here are some basic packages we need together with express
const bodyParser = require('body-parser') // helper routines to parse data as JSON in request body
const fetch = require('node-fetch') // http Server requests similar to the Client Version

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

function checkStatus (response) {
  if (response.ok) { // res.status >= 200 && res.status < 300
    return response
  } else {
    throw new Error(response.statusText)
  }
}

app.all('/', function (req, res) {
  const decompose = req.originalUrl.split('?')
  let fullurl = decompose[1] + '?' + decompose[2]
  fullurl = fullurl.replace('url=', '')
  fetch(fullurl, {
    method: req.method,
    headers: { 'Content-Type': 'application/json' }
  })
    .then(checkStatus) // do some basic status checking first.. throw an exception in case of trouble
    .then(response => response.json())
    .then(json => res.send({ error: null, status: json.status, response: json }))
    .catch(err => res.send({ error: err, status: err, response: '' }))
  // do some basic exception handling (as desribed in the package but could be more in reality)
})

app.all('/weather', async function (req, res) {
  const decompose = req.originalUrl.split('?')
  const city = decompose[1]
  const apiKey = 'ee6d9c3939d7eda6bb96fdfb6cf75219' // TODO move to env
  const locationQuery = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
  const response = await fetch(locationQuery, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(checkStatus)
    .then(response => response.json())
    .catch(err => res.send({ error: err, response: null }))

  if (response.length === 0) {
    res.send({ error: 'location not found', response: null })
    return
  }
  const lat = response[0].lat
  const lon = response[0].lon

  const weatherQuery = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${apiKey}`
  fetch(weatherQuery, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(checkStatus)
    .then(response => response.json())
    .then(json => res.send({ error: null, response: json }))
    .catch(err => res.send({ error: err, response: null }))
})

export default app
