const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  return Array.isArray(members) ? members.reduce((accum, value) => {
    if (typeof(value) === 'string') {
      accum.push(value.trim()[0].toUpperCase());
    }
    return accum;
  }, [])
  .sort()
  .join("") : false
};
