// Assignment 01

// If the total purchase amount is less than $50, no discount is applied.

// If the total purchase amount is between $50 and $100 (both inclusive), apply a 5% discount.

// If the total purchase amount is between $100 and $200 (both inclusive), apply a 10% discount.

// If the total purchase amount is $200 or more, apply a 15% discount.

function disCalc(amount) {
  var discount = 0;
  if (amount < 50) {
    discount = 0;
  } else if (amount >= 50 && amount < 100) {
    discount = amount * 0.05;
  } else if (amount >= 100 && amount < 200) {
    discount = amount * 0.1;
  } else {
    discount = amount * 0.15;
  }
  var total = amount - discount;
  console.log(
    "\nDiscounted amount: " +
      discount +
      "\n\nTotal amount + discount amount:: " +
      total +
      "\n"
  );
  return discount;
}

disCalc(1000);
