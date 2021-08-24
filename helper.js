/**
 * @param {string} name - event creator's name
 * @returns {[string]} - first name, last name
 */
const splitName = (name) => {
  const arr = name.split(' ').filter(name => name !== '');
  // If the user enters a name that contains multiple spaces
  // Keep the first name and set the rest as lastname
  if (arr.length > 2) {
    const newArr = [];
    newArr.push(arr[0]);
    arr.splice(0,1);
    newArr.push(arr.join(' '));
    return newArr;
  }
  return arr;
};

console.log(splitName('William Ye'));
console.log(splitName('William'));
console.log(splitName('William '));
console.log(splitName(' William'));
console.log(splitName(' William '));
console.log(splitName(' William Ye Ye Ye'));


module.exports = {
  splitName
};