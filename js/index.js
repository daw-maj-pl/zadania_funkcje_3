// Exercise 7.
document.querySelector('.to-factorial').addEventListener('input', e => {
  const giveMeFactorial = num => {
    if (num < 0) {
      return 'BŁĄD! Nie można podawać liczb ujemnych!'
    }

    if (num === 0 || num === 1) {
      return 1;
    }

    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }

    return num;
  } 

  document.querySelector('.log-factorial').textContent = giveMeFactorial(parseInt(e.target.value));
});

// Exercise 8.
const inkLevels = obj => Math.min(obj.cyan, obj.magenta, obj.yellow);

document.querySelector('.printer-1').addEventListener('click', e => {
  const printer1 = {
    cyan: 32,
    magenta: 21,
    yellow: 11
  };

  document.querySelector('.log-levels').textContent = inkLevels(printer1);
});

document.querySelector('.printer-2').addEventListener('click', e => {
  const printer2 = {
    cyan: 234,
    magenta: 345,
    yellow: 753
  };

  document.querySelector('.log-levels').textContent = inkLevels(printer2);
});

document.querySelector('.printer-3').addEventListener('click', e => {
  const printer3 = {
    cyan: 0,
    magenta: 600,
    yellow: 600
  };

  document.querySelector('.log-levels').textContent = inkLevels(printer3);
});

// Exercise 9.
document.querySelector('.pH').addEventListener('input', e => {
  const pHName = val => {
    switch (true) {
      case (val >= 0 && val < 7):
        return 'kwaśny';
      case (val === 7):
        return 'obojętny';
      case (val > 7 && val <= 14):
        return 'zasadowy';
      default:
        return 'nieprawidłowy';
    }
  };

  const giveMePHName = val => {
    if (!val && val !== 0) {
      return null;
    }

    const phName = pHName(val);
    
    if (phName === 'nieprawidłowy') {      
      return `BŁĄD! Podana wartość jest niepoprawna. Proszę wybrać wartość od 1 do 14.`;
    }

    return `Odczyn ${phName}.`;
  } 

  document.querySelector('.log-pH-text').textContent = giveMePHName(parseInt(e.target.value));
});