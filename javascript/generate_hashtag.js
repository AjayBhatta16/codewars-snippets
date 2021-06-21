function generateHashtag (str) {
  if(str.trim().length == 0) return false
  let output = `#${
    str.split(' ')
       .map(word => word[0] ? word[0].toUpperCase()+word.substring(1) : word)
       .join('')
  }`
  return (output.length > 140) ? false : output 
}
