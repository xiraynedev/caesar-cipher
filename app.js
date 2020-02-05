const inputWord = document.querySelector('#inputWord');
const inputNum = document.querySelector('#inputNum');
const inputBtn = document.querySelector('#shiftBtn');

inputBtn.addEventListener('click', function(e) {
  if (isNaN(inputWord.value)) {
    caesarCipher(inputWord.value, inputNum.value);
  } else {
    alert('please enter letters only');
  }

  inputWord.value = '';
  inputNum.value = '';
});

function caesarCipher(str, num) {
  num = num % 26;

  const lowerCaseString = str.toLowerCase();
  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
  let newString = '';

  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }

    let currentIndex = alphabet.indexOf(currentLetter);

    let newIndex = currentIndex + num;
    if (newIndex > 25) {
      newIndex -= 26;
    }
    if (newIndex < 0) {
      newIndex += 26;
    }
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }

  alert(newString);
}
