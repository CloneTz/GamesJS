/*
CONTADOR DE 1 A 10

let contador = 0;

while (contador < 10) {
  contador++;
  console.log(contador);
}

*/

/*
CONTADOR DE 10 A 0

let contador = 11;

while (contador > 0) {
  contador--;
  console.log(contador);
}

*/

/*
CONTAGEM REGRESSIVA

let pergunta = prompt(
  "A partir de que número você quer começar a contagem regressiva?"
);
let num;
num = pergunta;

while (num >= 0) {
  console.log(`${num}`);
  num--;
}

*/

// CONTAGEM PROGRESSIVA
let num = prompt(
  "A partir de que número você quer começar a contagem progressiva?"
);
contador = 0;

while (contador <= num) {
  console.log(`${contador}`);
  contador++;
}
