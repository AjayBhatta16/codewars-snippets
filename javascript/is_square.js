var isSquare = function(n){
  let i = 0
  while (i <= n) {
    if (i * i == n) return true
    i++
  }
  return false
}
