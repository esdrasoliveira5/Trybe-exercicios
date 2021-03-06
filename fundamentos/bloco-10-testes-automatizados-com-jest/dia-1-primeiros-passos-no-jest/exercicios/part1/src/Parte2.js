
function encode(string) {
  const a = string.split('').map((l) => {
    if (l === 'a') {
      return 1
    } else if (l === 'e') {
      return 2
    } else if (l === 'i') {
      return 3
    }else if (l === 'o') {
      return 4
    } else if (l === 'u') {
      return 5
    };
    return l;
  });

  return a.join('');
}

function decode(string) {
  const b = string.split('').reduce((total, l) => {
    if (l === '1') {
      return total + 'a'
    } else if (l === '2') {
      return total + 'e'
    } else if (l === '3') {
      return total + 'i'
    }else if (l === '4') {
      return total + 'o'
    } else if (l === '5') {
      return total + 'u'
    };

    return total + l;
  }, '');

  return b;
}

function techList(array, nome) {
  if(array.length === 0) {
    return 'Vazio!'
  }
  const c = array.sort().map((techs) => ({ tech: techs, name: nome}));
  return c;
}

function hydrate(string) {
  const number = string.split('').reduce((total, character) => {
    let parsedCharacter = parseInt(character);
    if (isNaN(parsedCharacter) === false) {
      return total + parsedCharacter;
    };
    return total;
  }, 0);

  if( number > 1) {
    return `${number} copos de água`;
  };
  return `${number} copo de água`;
}

module.exports = {
  encode,
  decode,
  techList,
  hydrate,
}
