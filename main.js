// module.exports = {
//   leapYear: function (year) {
//     return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
//   }
// };

module.exports = {
  calcTax: function (amount) {
    if (amount <= 10) {
      return amount * 0.1;

    } else if (amount <= 20 && amount > 10) {
      return ((amount - 10) * 0.07) + 1;

    } else if (amount <= 30 && amount > 20) {
      return ((amount - 20) * 0.05) + 1.7;

    } else (amount >= 31)
      return ((amount - 30) * 0.03) + 2.2;
  }
};
