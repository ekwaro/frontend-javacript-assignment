
const palindrome=(words)=>{
    let pal = []
    words.forEach((word)=>{
        let reversed = word.split('').reverse().join('')
        if(word==reversed){
            pal.push(word)
           
        }
    })

    if(pal.length !==0){
        console.log(pal.at(0))
        return ` The first palindrome word from array [${words}] is${pal.at(0)}`
    }
    else{
        
        return `No palindrome in [${words}]`
    }

}    
    
  


palindrome(["racecare", 'adaa', 'kayake']);
