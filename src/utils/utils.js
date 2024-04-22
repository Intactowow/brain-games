const MAX_RANDOM = 100;
const OPERATION = ['+', '-', '*'];

export const print = (text) => {
  console.log(text);
}

const random = () => {
  return Math.floor(Math.random() * MAX_RANDOM);
}

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  };

  return 'no';
}

const randomExpression = () => {
  const randomIndexOperation = Math.floor(Math.random() * (OPERATION.length - 1));
  const resultOperation = OPERATION[randomIndexOperation];
  const firstRandomNum = random();
  const secondRandomNum = random();

  return `${firstRandomNum} ${resultOperation} ${secondRandomNum}`;
}

const randomGcd = () => {
  const firstRandomNum = random();
  const secondRandomNum = random();

  return `${firstRandomNum} ${secondRandomNum}`;
}

const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export {
  random,
  randomExpression,
  isEven,
  randomGcd,
  gcd
}
