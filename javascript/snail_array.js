snail = function(array) {
  if(array.length <= 1) return array[0]
  if(array.length == 2) return array[0].concat(array[1].reverse())
  let output = array.splice(0,1)[0]
  output = output.concat(array.map(arr => arr.pop()))
                 .concat(array.pop().reverse())
                 .concat(array.map(arr => arr.splice(0,1)[0]).reverse())
  return output.concat(snail(array))
}
