// Exercise 7.
document.querySelector('.to-factorial').addEventListener('input', e => {
  const giveMeFactorial = num => {
    let result;
    if (num < 0) {
      result = 'BŁĄD! Nie można podawać liczb ujemnych!'
    } else if (num === 0 || num === 1) {
      result = 1;
    } else {
      result = giveMeFactorial(num-1)*num; // tym razem postanowiłem użyć rekurencji
    }  

    return result;
  };

  document.querySelector('.log-factorial').textContent = giveMeFactorial(parseInt(e.target.value));
});

// Exercise 8.
document.querySelector('.printer').addEventListener('click', e => {
  const inkLevels = obj => Math.min(obj.cyan, obj.magenta, obj.yellow);
  const printer = {
    cyan: 32,
    magenta: 21,
    yellow: 11
  };
  
  document.querySelector('.log-levels').textContent = inkLevels(printer);
});

// Exercise 9.
document.querySelector('.pH').addEventListener('input', e => {
  const pHName = val => {
    let result;
    switch (true) {
      case (val >= 0 && val < 7):
        result = 'kwaśny';
        break;
      case (val === 7):
        result = 'obojętny';
        break;
      case (val > 7 && val <= 14):
        result = 'zasadowy';
        break;
      default:
        result = 'nieprawidłowy';
    }

    return result;
  };

  const giveMePHName = val => {
    let result;
    if (!val && val !== 0)
      result = null;
    else if (pHName(val) === 'nieprawidłowy')
      result = `BŁĄD! Podana wartość jest niepoprawna. Proszę wybrać wartość od 1 do 14.`;
    else
      result = `Odczyn ${pHName(val)}.`;

    return result;
  } 

  document.querySelector('.log-pH-text').textContent = giveMePHName(parseInt(e.target.value));
});