/**
 * Calculate sum of all elements in the array.
 *
 * @param {array} arr Array of numbers
 * @returns {number} total Returns sum of all elements
 *
 */

module.exports = function (arr) {
  var total = 0;
  arr.forEach(function(item) {return total += item});
  return total;
};
