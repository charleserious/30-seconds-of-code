module.exports = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);