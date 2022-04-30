const express = require('express') // critical module for building a Web Server App
// Here are some basic packages we need together with express
const bodyParser = require('body-parser') // helper routines to parse data as JSON in request body
const fetch = require('node-fetch') // http Server requests similar to the Client Version

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
  function checkStatus (response) {
    if (response.ok) { // res.status >= 200 && res.status < 300
      return response
    } else {
      throw new Error(response.statusText)
    }
  }
})

export default app
