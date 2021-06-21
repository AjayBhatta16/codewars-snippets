function persistence(num) {
  if (num <= 9) {
    return 0
  }
  return 1 + persistence(eval(num.toString().split('').join('*')))
}
