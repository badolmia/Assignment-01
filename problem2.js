// In this assignment, you will create a JavaScript program that filters even numbers
// from a given array and displays the filtered numbers on the webpage.

// Output is:-

// Original Array: [12, 34, 45, 23, 6, 78, 54, 90]

// Filtered Even Numbers: [12, 34, 6, 78, 54, 90]

function arrayFilter(...arr) {
  var newArr = [];
  if (arr.length != 0) {
    newArr = arr.filter((arr) => arr % 2 == 0);
  }

  console.log("\nOriginal Array:", "[" + arr.join(", ") + "]");
  console.log("\nFiltered Even Numbers:", "[" + newArr.join(", ") + "]\n");
}

arrayFilter(12, 34, 45, 23, 6, 78, 54, 90);
