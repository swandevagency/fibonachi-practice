let userInput = parseInt(prompt('Enter a number', 1) - 1);
const fib = (num) => {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  else if (num > 1) return fib(num - 1) + fib(num - 2);
};

console.log(fib(userInput));
let fibArr = [];
for(let i = 0; i <= userInput; i++) {
  fibArr.push(fib(i));
}
console.log(fibArr);