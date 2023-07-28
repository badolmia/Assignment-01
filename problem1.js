// Assignment 01

// If the total purchase amount is less than $50, no discount is applied.

// If the total purchase amount is between $50 and $100 (both inclusive), apply a 5% discount.

// If the total purchase amount is between $100 and $200 (both inclusive), apply a 10% discount.

// If the total purchase amount is $200 or more, apply a 15% discount.

function disCalc(cost) {
  var discount = 0;
  if (cost < 50) {
    discount = 0;
  } else if (cost >= 50 && cost < 100) {
    discount = cost * 0.05;
  } else if (cost >= 100 && cost < 200) {
    discount = cost * 0.1;
  } else if (cost >= 200) {
    discount = cost * 0.15;
  } else {
    discount = 0;
  }
  var total = cost - discount;
  console.log(
    "\nDiscounted amount: " + discount + "\n\nTotal: " + total + "\n"
  );
  return discount;
}

disCalc(1000);
