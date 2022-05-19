// 🚀 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const studentAverage = (grades, students) => {
  const sumGrades = grades.map((grade) => {
    return grade.reduce((acc, curr, index) => {
      console.log(index);
      acc += curr;
      return acc;
    }, 0)
  });
  const arrStudent = students.map((student, index) => {
    return { name: student, average: sumGrades[index] / grades[index].length };
  }
  );
  return arrStudent;
}
console.log(studentAverage(grades, students));

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const notes = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
//   const nameAndAverage = students.map((student, index) => ({
//     name: student,
//     average: (notes[index].reduce((acc, curr) => acc + curr, 0) / notes[index].length),
//   }));
//   return nameAndAverage;
// }

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];