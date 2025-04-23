//Given an integer array nums, return true if any value appears at least
//twice in the array, and return false if every element is distinct.

const integerNum=(nums)=>{

    let listObject = {}
    let returnValue  = false

    for (let num of nums){
        listObject[num] = ++listObject[num] || 1
    }

    for(let key in listObject){
       if (listObject[key] > 1){
           returnValue = true
       }
    }
    console.log(listObject)

    return returnValue
}
integerNum([1,3,5,4,7,6])