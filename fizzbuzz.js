//Write a function named fizzBuzz that takes in two(2) parameters which
//are expected to be strings. The function should return the string Fizz if
//the combined length of the parameters is divisible by 3, the string Buzz
//if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and
//3.



const fizzBuzz = (x, y) => {
    let totallength= x.toString().length + y.toString().length
    console.log(totallength)
  
    if (totallength % 5 === 0 && totallength % 3 === 0) {
      console.log("fizzBuzz");
      return "fizzBuzz";
    } else if ( totallength % 5 === 0) {
      console.log("Buzz");
      return "Buzz";
    } else if (
       totallength % 3 === 0
    ) {
      console.log("Fizz");
      return "Fizz";
    } else {
      return "The combined length of '+ x 'and y are not divisible by 3 or 5";
    }
  };
  
  fizzBuzz('ggggg', 'uuuuu')
  
fizzBuzz('gggggg', 'yuuuuu')