const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity ===undefined || 
    typeof sampleActivity !== 'string' ||
    !isNaN(+sampleActivity) ||
    isNaN(sampleActivity)
  ) return false
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = MODERN_ACTIVITY / sampleActivity / k;
  let log = Math.log2(t);
  return Math.ceil(log);
};
