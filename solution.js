// Sum of two numbers
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));
console.log(sum(-4, -8));
console.log(sum(-3, 5));

// Return the next number from the number passed
function nextNumber(num) {
  return num + 1;
}
console.log(nextNumber(1));
console.log(nextNumber(0));
console.log(nextNumber(-2));

// Find perimeter of a rectangle
function rectanglePerimeter(length, width) {
  return 2 * (length + width);
}
console.log(rectanglePerimeter(2, 5));
console.log(rectanglePerimeter(3, 5));
console.log(rectanglePerimeter(10, 20));

// Return something to me
function returnSomethingToMe(str) {
  return "something " + str;
}
console.log(returnSomethingToMe("is better than nothing"));
console.log(returnSomethingToMe("jack daniels"));
console.log(returnSomethingToMe("Ifedha"));

// Bob's BMI vs Jane's BMI
function greaterBMI(bob, jane) {
  if (bob > jane) {
    return "Bob";
  } else if (jane > bob) {
    return "Jane";
  } else {
    return "Equal";
  }
}
console.log(greaterBMI(30, 25));
console.log(greaterBMI(35, 40));
console.log(greaterBMI(35, 35));

// Basketball points
function basketBallPoints(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}
console.log(basketBallPoints(1, 1));
console.log(basketBallPoints(7, 5));
console.log(basketBallPoints(0, 5));

// Less than 100
function isSumLessThan100(num1, num2) {
  if (num1 + num2 > 100) {
    return true;
  } else {
    return false;
  }
}
console.log(isSumLessThan100(25, 55));
console.log(isSumLessThan100(72, 38));

// Convert minutes to second
function convertToSeconds(minutes) {
  if (minutes === 0) {
    return 0;
  }
  if (minutes === 1) {
    return 1 + " second";
  }
  if (minutes > 1) {
    return minutes * 60 + " seconds";
  }
}
console.log(convertToSeconds(5));
console.log(convertToSeconds(0));
console.log(convertToSeconds(1));

// Greater among the three
function greater(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  } else if (num1 == num2 && num1 == num3) {
    return num1;
  }
}
console.log(greater(2, 35, 67));
console.log(greater(23, 23, 23));

// Less among the three
function least(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num1 && num2 < num3) {
    return num2;
  } else if (num3 < num1 && num3 < num2) {
    return num3;
  } else if (num1 == num2 && num1 == num3) {
    return num1;
  }
}
console.log(least(2, 35, 9));
console.log(least(23, 23, 23));

// Football points
function footballPoints(wins, draws, losses) {
  if (wins > 0) {
    return wins * 3 + draws;
  } else if (draws > 0) {
    return draws;
  } else if (losses > 0) {
    return 0;
  }
}
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 2));
console.log(footballPoints(5, 2, 0));

// Even numbers
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else if (num % 2 != 0) {
    return false;
  }
}
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(101));
console.log(isEven(50));
