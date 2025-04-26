//. Write a function named firstPalindrome which takes a parameter:
//words. Given an array of string words, return the first palindromic string
//in the array. If there is no such string, return an empty string "".
//A string is palindromic if it is backward and forward


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
