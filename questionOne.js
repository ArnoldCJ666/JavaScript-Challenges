
function fizzBuzz(stringOne, stringTwo) {
    //finding length of each string
    const lengthOfStringOne = stringOne.length;
    const lengthOfStringTwo = stringTwo.length;
  
    //find the of the two combined strings
    const combinedLength = lengthOfStringOne + lengthOfStringTwo;
  
    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
      return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
      //find is lenth is divible by 3
      return "Fizz";
    } else if (combinedLength % 5 === 0) {
      //if divisible by 5
      return "Buzz";
    }
  }
  console.log(fizzBuzz("cowsxxxxxx", "eaten"));
  