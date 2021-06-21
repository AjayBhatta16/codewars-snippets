function rot13(message){
  return message.split('').map(ch => {
    if((ch.charCodeAt() >= 65 && ch.charCodeAt() <= 77) || (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 109)) {
      return String.fromCharCode(ch.charCodeAt() + 13)
    }
    if((ch.charCodeAt() >= 78 && ch.charCodeAt() <= 90) || (ch.charCodeAt() >= 110 && ch.charCodeAt() <= 122)) {
      return String.fromCharCode(ch.charCodeAt() - 13)
    }
    return ch
  }).join('')
}
