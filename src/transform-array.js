const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let arr = [...array]
  for (let index =0; index < arr.length; index++){
      console.log(arr)
      console.log(index)
    //   console.log(arr[index])
      if (typeof arr[index]==='string'){
        if (arr[index]==='--discard-next'){
          if (index===arr.length-1){
            return arr.slice(0,index)
          }
          arr.splice(index,2)
          --index

        }else if(arr[index]==='--discard-prev'){
          if (index===0){
            return arr.slice(1,arr.length)
          }
            arr.splice(index-1,2)
        }
        else if(arr[index]==='--double-next'){
          if (index===arr.length-1){
            return arr.slice(0,index)
          }
            arr[index]=arr[index+1]
        }
        else if(arr[index]==='--double-prev'){
          if (index===0){
            return arr.slice(1,arr.length)
          }
            arr[index]=arr[index-1]
        }
      }
  }

  

  return arr
}


module.exports = {
  transform
};
