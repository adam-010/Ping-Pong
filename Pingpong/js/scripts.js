
function checkDivisibility(number, collection) {
  'use strict';
  if (number % 3 === 0) {
    if (number % 5 === 0) {
      collection.push("ping pong");
    } else {
      collection.push("ping");
    }
  } else if (number % 5 === 0) {
    collection.push("pong");
  } else {
    collection.push(number);
  }

  return collection;
}

function pingPong(number) {
  'use strict';
  var i, resultArray = [];

  if (number > 0) { // Positive numbers
    for (i = 1; i <= number; i++) {
      resultArray = checkDivisibility(i, resultArray);
    }
  } else if (number < 0) { // Negative numbers
    for (i = -1; i >= number; i--) {
      resultArray = checkDivisibility(i, resultArray);
    }
  } else {
    resultArray.push(0);
  }

  return resultArray;
}
