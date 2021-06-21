function digital_root(n) {
  if(n < 10) return n
  return digital_root(eval(n.toString().split('').join('+')))
}
