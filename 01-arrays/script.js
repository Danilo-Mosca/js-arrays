const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = 'Patrick';
console.log(teachers[4]);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher);


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(teachers);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
if (teachers.includes('Fabio')) {
  console.log("Il nome è presente");
} else {
  console.log("Il nome non è presente");
}
// Oppure usando il metodo indexOf()
if (teachers.indexOf('Fabio') !== -1) {
  console.log("Il nome è presente");
} else {
  console.log("Il nome non è presente");
}
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes('Fabio');
console.log(isFabioPresent);

/* --------- SOLUZIONE CON CICLO --------- */
flag = false;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio") {
    flag = true;
    console.log("Il nome Fabio è presente");
  }
}
if (!flag) {
  console.log("Il nome Fabio non è presente");
}
/* ---------------------------------------- */


// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log(lewisIndex);


// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString);


// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length;
if (isTeachersEmpty) {
  console.log("L'array non è vuoto"); 
} else {
  console.log("L'array è vuoto");
}