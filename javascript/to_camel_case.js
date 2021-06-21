function toCamelCase(str){
  if(str.length == 0) return '';
  let words = str.split(/[\_\-]+/)
  words = words.map((word, i) => {
    if(i == 0) return word
    return word.split('')[0].toUpperCase() + word.slice(1)
  })
  return words.join('')
}
