
function arrayToList(array){
    // base case 
    if (array.length == 0){
        return null
    }
    // recursive return 
    return {
      value: array[0],
      rest: arrayToList(array.slice(1))
    }
}

console.log(arrayToList([1, 2, 4, 6, 8]))

function listToArray(list){
  if(list === null){
    return []
  }
  return [list.value, ...listToArray(list.rest)]
}



const a  = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
} 

console.log(listToArray(a))

function prepend(element, list){
  return {
    value: element, 
    rest: list
  }
}

console.log(prepend(5, a))

function nth(list, n){
  // base case 
  if(list === null) return undefined
  if( n === 0) return list.value
  // rescursive return 
  return nth(list.rest, n - 1 )

}

console.log(nth(a, 9))

function nth(list, n){
  let current = list;
  let index = 0;

  while(current !== null ){
    if(index === n ) return current.value
    console.log(current)
    current = current.rest
    index++
  }
  return undefined
}

console.log(nth(a, 3))