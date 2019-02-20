

const collections = [1, [2, [4, [5, [6]], 3]]]

function find(array, criteraFn){
  let current = array
  let next = []
  
  while (current){
    if (criteriaFn(current)){
      return current
    }
    if (Array.isArray(current)){
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}

find(collections, n => n > 5)