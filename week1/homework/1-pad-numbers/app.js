const padLeft = require('./padLeft');
const numbers = ["12", "846", "2", "1236"];
let number = numbers.forEach(num => console.log(padLeft(num, 5, "-")));