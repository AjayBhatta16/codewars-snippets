function descendingOrder(n){
  const arrDigits = n => {
    if (n == 0) return [0]
    let rem = n % 10, output = []
    while (n > 0) {
      output.push(rem)
      n -= rem
      n /= 10
      rem = n % 10
    }
    return output
  }
  return parseInt(arrDigits(n).sort().reverse().join(''))
}
