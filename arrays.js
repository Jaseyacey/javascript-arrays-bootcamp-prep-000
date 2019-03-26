var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return(array)
}

function addElementToEndOfArray(array, element) {
  return[...array, element]
}

function destructivelyAddElementToEndOfArray(){
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift(array)
}

function removeElementFromEndOfArray(array) {
  array.shift(array)
}

function removeElementFromEndOfArray() {
  return array.slice(0, array.length - 1)
}
