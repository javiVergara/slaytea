// Helper function to calculate the circumference of a circle
function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Helper function to check if a string is palindrome
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Helper function to generate a random boolean value
  function getRandomBoolean() {
    return Math.random() < 0.5;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    console.log("Circumference of a circle with radius 3:", calculateCircleCircumference(3)); // Output: Approximately 18.85
    console.log("'radar' is a palindrome?", isPalindrome('radar'));   // Output: true
    console.log("'hello' is a palindrome?", isPalindrome('hello'));   // Output: false
  
    // Generate and print 5 random boolean values
    console.log("Random boolean values:");
    for (let i = 0; i < 5; i++) {
      console.log(getRandomBoolean());
    }
  }
  
  // Call the main function
  main();  