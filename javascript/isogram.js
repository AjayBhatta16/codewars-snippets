function isIsogram(str){
  let chars = str.split('').map(ch => ch.toLowerCase())
  for (let i = 0; i < chars.length; i++) {
    if (chars.indexOf(chars[i]) !== i) return false
  }
  return true
}
