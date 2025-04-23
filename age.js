//Write a JavaScript program that prompts a user to enter their year of
//birth and in turn prints a string in the console stating whether the user
//is a minor, a youth, or an elder. Anyone below 18 years is a minor,
//anyone between 18 and 36 years is a youth and the rest are elders.


const ageGroup = () => {
  let x = prompt("Please enter your year of birth here");
 console.log(typeof(x))
  birthYear = Number(x);
  currentAge = new Date().getFullYear() - birthYear;
  if (currentAge < 0 && currentAge.toString().length !== 4) {
    console.log("Please enter correct birth year");
  } else if (currentAge >= 0 && currentAge <= 18) {
    console.log("minor");
  } else if (currentAge > 18 && currentAge <= 35) {
    console.log("Youth");
  } else {
    console.log("adult");
  }
};
ageGroup();
