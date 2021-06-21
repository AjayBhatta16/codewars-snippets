function findOdd(A) {
  let dict = {}
  let output
  A.forEach(n => {
    dict[n.toString()] = dict[n.toString()] ? (dict[n.toString()] + 1) : 1
  })
  for(let i = 0; i < A.length; i++) {
    if(dict[A[i].toString()] % 2 == 1) {
      output = A[i]
      break
    }
  }
  return output
}
