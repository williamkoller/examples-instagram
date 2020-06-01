const multiply = (a,b) => a * b ;

const delay = 1000;

setTimeout(() => {
  multiply(2,4)
}, delay);

const current = setTimeout(multiply, delay, 2, 4);
