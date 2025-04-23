//Given a non-empty array of integers nums, every element appears
//twice except for one. Find that single one.

const leastMajority=(nums)=>{
    let listObject = {}
    leastElement = ''
    
    for (const num of nums){
    
        listObject[num]= ++listObject[num] || 1
    }
    
    for(key in listObject){
        if(listObject[key] === 1){
            leastElement = key
        }
    }
    if (leastElement !== ''){
        return leastElement
    
    }
    else{
        return 'No least element found'
    }
    
    }
    
    leastMajority([2,2,2,3,1,4,4])