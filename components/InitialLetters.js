import React from 'react-native';

const InitialLetters = text => {
  let arrayNames = text.split(' ');
  let firstLetterName = arrayNames[0].slice(0, 1);
  let secondLetterLastName = arrayNames[1].slice(0, 1);
  let initialLetters = `${firstLetterName}${secondLetterLastName} `;

  return initialLetters.toUpperCase();
};
export default InitialLetters;
