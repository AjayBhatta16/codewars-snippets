function perimeter(n) {
  const PHI = (1 + Math.sqrt(5))/2
  let sum = 0
  for(let i = 1; i <= n + 1; i++) {
    sum += (PHI**i - (1-PHI)**i)/(PHI - (1-PHI))
  }
  return sum * 4
}
