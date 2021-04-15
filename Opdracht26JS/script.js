/** @format */

const number_Lh = function (inputNumber) {
  if (inputNumber >= 100) {
    return true;
  } else {
    return false;
  }
};

console.log(number_Lh(0));

const bouncer = function (maxPeople, currentPeople, age) {
  if (currentPeople == maxPeople) {
    return "it's too busy now, come back later";
  } else if (currentPeople <= 1499 && age >= 18) {
    return "come in";
  } else if (age < 18) {
    return "This is a club for adults";
  }
};

console.log(bouncer(1500, 1200, 11));
console.log(bouncer(1500, 900, 19));
console.log(bouncer(1500, 1500, 14));
console.log(bouncer(1500, 1500, 20));

const numberAverage = function (one, two, three, four, five) {
  let sum = one + two + three + four + five;
  let average = sum / 5;
  return average;
};

console.log(Math.round(numberAverage(53, 42, 63, 84, 95)));
console.log(Math.round(numberAverage(4, 62, 2, 69, 12)));
console.log(Math.round(numberAverage(56, 22, 11, 67, 13)));
console.log(Math.round(numberAverage(61, 44, 75, 99, 16)));
