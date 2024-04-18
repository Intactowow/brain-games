const MAX_RANDOM = 100;
function random() {
  return Math.floor(Math.random() * MAX_RANDOM);
}

function isEven(num) {
  if (num % 2 === 0) {
    return 'yes';
  };

  return 'no';
}

export {
  random,
  isEven
}
