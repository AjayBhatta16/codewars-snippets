const binaryArrayToNumber = arr => {
  arr.reverse()
  let output = 0
  for (let i = 0; i < arr.length; i++) {
    output += arr[i] == 1 ? 2**i : 0
  }
  return output
}
