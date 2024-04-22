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

const randomProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5;
    const step = Math.floor(Math.random() * 10) + 1;
    const start = Math.floor(Math.random() * 10);
    const progression = [];
    let hiddenIndex = Math.floor(Math.random() * length);
    for (let i = 0; i < length; i++) {
      progression.push(start + step * i);
    }
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = "..";
    return { progression: progression.join(" "), answer: hiddenNumber };
}

const isPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export {
  random,
  randomExpression,
  isEven,
  randomGcd,
  gcd,
  randomProgression,
  isPrime
}
