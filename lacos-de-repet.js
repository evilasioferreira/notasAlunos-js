let nDeAlunos = prompt("Total de alunos: ");
let somaNotas = 0;
let maiorNota = -Infinity;
let menorNota = Infinity;
let contador = 0;

while (contador < nDeAlunos) {
  let notas = parseFloat(prompt("Nota do aluno " + (contador + 1) + ":"));
  somaNotas += notas;

  if (notas > maiorNota) {
    maiorNota = notas;
  }

  if (notas < menorNota) {
    menorNota = notas;
  }
  contador++;
}

let mediaTurma = somaNotas / nDeAlunos;

alert("A média da turma é: " + mediaTurma);
alert("A maior nota obtida na turma é: " + maiorNota);
alert("A menor nota obtida na turma é: " + menorNota);