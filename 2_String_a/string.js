const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function contarLetraA(string) {
  const ocorrencias = string.match(/a/gi);

  const quantidade = ocorrencias ? ocorrencias.length : 0;

  if (quantidade > 0) {
    console.log(`A letra 'a' ou 'A' aparece ${quantidade} vez(es) na string.`);
  } else {
    console.log("A letra 'a' ou 'A' não aparece na string.");
  }
}

rl.question('Digite uma frase ou palavra: ', (inputString) => {
  contarLetraA(inputString);

  rl.close();
});
