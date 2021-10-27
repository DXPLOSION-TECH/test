/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  var missing = new Array();
  var sorted = numbers.sort(function(a, b) {
    return a - b;
  });
  //check
  for (var i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(i) != sorted[i]) {
      missing.push(i);
    }
  }
  return missing;
}

console.log(result(numbers));
