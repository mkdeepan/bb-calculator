const operations = {
  ADDITION: (n1, n2) => n1 + n2,
  SUBRACTION: (n1, n2) => n1 - n2,
  MULTIPLICATION: (n1, n2) => n1 * n2,
  DIVISION: (n1, n2) => n1 / n2,
  PERCENTAGE: (n1, n2) => (n1 * n2) / 100,
};

const validateInputs = (n1, n2, func) => {
  if ((typeof n1 !== 'number') || (typeof n2 !== 'number'))
  {
    throw "Invalid Inputs!!";
  }
  return func(n1, n2);
};

const printAvailableOperations = function () {
  return Object.keys(operations);
};

const bbCalculator = {
  calc: {
    add: (n1, n2) => validateInputs(n1, n2, operations.ADDITION),
    sub: (n1, n2) => validateInputs(n1, n2, operations.SUBRACTION),
    divide: (n1, n2) => validateInputs(n1, n2, operations.DIVISION),
    multiply: (n1, n2) => validateInputs(n1, n2, operations.MULTIPLICATION),
    percent: (n1, n2) => validateInputs(n1, n2, operations.PERCENTAGE),
  },
  printAvailableOperations,
};

module.exports = bbCalculator;
