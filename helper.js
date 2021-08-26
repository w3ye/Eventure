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

const generateRandomString = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = "";
  for (let i = 15; i > 0; i--) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};


// const escape = function (str) {
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(str));
//   return div.innerHTML;
// };
module.exports = {
  splitName,
  generateRandomString
};