// 🚀 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => array.join('').split('').reduce((acc, crr) => {
  (crr === 'a' || crr === 'A') && (acc += 1);
  return acc;
}, 0)
console.log(containsA(names));
