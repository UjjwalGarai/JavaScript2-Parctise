function reverseArray(arr){
  const newArr = []
  for(let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i])
  }
  return newArr
}


// console.log(reverseArray([1,8,9]))

function reverseArrayInPlace(arr){
  for(let i = 0; i < arr.length/2; i++){
    [arr[i], arr[arr.length -(1 + i)]] = [arr[arr.length -(1 + i)],arr[i]]
  }
  return arr
}

console.log(reverseArrayInPlace([1,8,9, 4, 7, 9, 46]))
