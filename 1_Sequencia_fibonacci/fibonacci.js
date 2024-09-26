const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacciSequence(number) {
  let fib = [0, 1];
  while (true) {
    let nextFib = fib[fib.length - 1] + fib[fib.length - 2];
    if (nextFib > number) break;
    fib.push(nextFib);
  }

  return fib;
}

function isInFibonacci(number) {
  let sequence = fibonacciSequence(number);
  if (sequence.includes(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
  }
}

function askForNumber() {
  rl.question('Informe um número: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
      console.log('Por favor, informe um número válido.');
      askForNumber();
    } else {
      isInFibonacci(number);
      rl.close();
    }
  });
}

askForNumber();
