// Implement a JavaScript function to calculate the multiplication table using a for loop.
// Display the generated multiplication table on the console.
// Examples:
// Generate Multiplication Table for: 5
// 1 x 5 = 5
// 2 x 5 = 10
// 3 x 5 = 15
// 4 x 5 = 20
// 5 x 5 = 25
// 6 x 5 = 30
// 7 x 5 = 35
// 8 x 5 = 40
// 9 x 5 = 45
// 10 x 5 = 50

function multiTable(num) {
  console.log("\nGenerate Multiplication Table for:", num, "\n\n\n");
  for (var i = 0; i <= 10; i++) {
    console.log(i, "x", num, "=", num * i, "\n");
  }
}
multiTable(5);
