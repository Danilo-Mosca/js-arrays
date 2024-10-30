const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers.

// Uso toReversed() perchè a differenza di reverse()
// non sovrascrive anche l'array originale:
// reverse() avrebbe invertito l'ordine degli insegnanti anche per l'array teachers;
const reversedTeachers = teachers.toReversed();
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

// Assegno all'array longNames i valori contenuti nell'array teachers
const longNames = teachers.slice();

// Creo un ciclo per controllare tutti gli elementi dell'array uno ad uno
for (let i = 0; i < longNames.length; i++) {
  /* Se la lunghezza dell'elemento nella posizione i è minore di 5, allora elimino il valore corrispondente,
  altrimenti non faccio nulla */
  if (longNames[i].length < 5) {
    //Elimino solo il valore corrispondente a quell'indice
    longNames.splice(i, 1);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1, 1);
console.log(teachers);
