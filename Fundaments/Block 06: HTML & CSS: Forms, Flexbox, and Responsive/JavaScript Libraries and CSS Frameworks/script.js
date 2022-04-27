function naoEnvia(event) {
  event.preventDefault();
  const validation = formValidation();
  if (validation === false) {
    window.alert('Dados inválidos');
  } else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
}
window.onload = function () {
  const subButton = document.querySelector('#submit-button')
  subButton.addEventListener('click', naoEnvia)
  const cleanButton = document.querySelector('#clear-button')
  cleanButton.addEventListener('click', cleanAll);
  const agreement = document.querySelector('#agreement')
  agreement.addEventListener('change', enableSubmitButton)
}

const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');

function cleanAll() {

  for (let i = 0; i < inputs.length; i += 1) {
    const userInfos = inputs[i]
    userInfos.value = '';
    userInfos.checked = false;
  }
  textArea.value = '';
}

function enableSubmitButton() {
  const subButton = document.querySelector('#submit-button')
  const agreement = document.querySelector('#agreement')
  subButton.disabled = !agreement.checked
}

function formValidation() {
  const email = document.querySelector('#email').value.length
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#fullName').value.length
  const invalidName = name < 10 || name > 40;

  const textArea = document.querySelector('#texto').value.length
  const invalidTextArea = textArea > 500;

  if (invalidEmail || invalidName || invalidTextArea) {
    return false;
  } else {
    return true;
  }
}