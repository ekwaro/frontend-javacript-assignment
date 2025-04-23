

//5. Given an integer num, write a function that repeatedly adds all its digits
//until the result has only one digit, and return it

const num=(digits)=>{
    let numbrs = digits.toString().split('')
    let sum = 0
    let totalsum =0
    let i = numbrs.length
    while(i>1){
        
        sum = numbrs.map(a=>Number(a)).reduce((c,b)=>c+b)
        console.log(sum.toString().split(''))   
        numbrs = sum.toString().split('')
        i = sum.toString().split('').length
        i ===1? totalsum = sum: totalsum ;
                
    }
    console.log(totalsum)
   return (totalsum)

}


num(186756979)