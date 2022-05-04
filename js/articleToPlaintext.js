// get Plaintext Array from article
function articleToPlaintextArr (article) {
  const body = article.body.children
  const getPlaintextArr = function (body) {
    return body.map(function (input) {
      if (input.type === 'text') {
        return input.value
      }
      if (input.tag === 'p') {
        return getPlaintextArr(input.children).join('')
      }
      return getPlaintextArr(input.children)
    }).flat()
  }
  return getPlaintextArr(body)
}

export default {
  articleToPlaintextArr
}

export {
  articleToPlaintextArr
}
