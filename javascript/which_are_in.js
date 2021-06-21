function inArray(array1,array2){
  return array1.filter(el => {
    let output = false
    let pattern = new RegExp(el)
    array2.forEach(el2 => {
      if(pattern.test(el2)) output = true
    })
    return output
  }).sort()
}
