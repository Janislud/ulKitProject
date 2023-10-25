
// THEMA SWITCH
const themeSwitcherButton = document.querySelector('.mode-switcher')
const divFlex = document.querySelector('.flex')
const sectionCreateAccaunt = document.querySelector('.account-create')
const textCreateAccount = document.querySelector('h2')
const textP = document.querySelector('p')
const line = document.querySelector('.form-text-wrapper')
const h3Text = document.querySelector('.field')
const btnRegister = document.querySelector('.click-register')
const imgFacebook = document.querySelector('.img-facebook')
const imgTwitter = document.querySelector('.img-twitter')
const imgGoogle = document.querySelector('.img-google')
const divTerms = document.querySelector('.policy-terms')

let isDarkMode = localStorage.getItem('isDarkMode') === 'true'

// Функция для применения текущей темы
function applyTheme() {
  if (isDarkMode) {
    document.body.classList.add('dark-theme');
    divFlex.classList.add('dark-theme');
    sectionCreateAccaunt.classList.add('dark-theme');
    textCreateAccount.classList.add('dark-theme');
    textP.classList.add('dark-theme');
    line.classList.add('dark-theme');
    h3Text.classList.add('dark-theme');
    btnRegister.classList.add('dark-theme');
    imgFacebook.src = "./media/icon-for-registretion/facebook-icon-white.svg";
    imgTwitter.src = "./media/icon-for-registretion/twitter-icon-white.svg";
    imgGoogle.src = "./media/icon-for-registretion/google-icon-white.svg";
    divTerms.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    divFlex.classList.remove('dark-theme');
    sectionCreateAccaunt.classList.remove('dark-theme');
    textCreateAccount.classList.remove('dark-theme');
    textP.classList.remove('dark-theme');
    line.classList.remove('dark-theme');
    h3Text.classList.remove('dark-theme');
    btnRegister.classList.remove('dark-theme');
    imgFacebook.src = "./media/icon-for-registretion/facebook-icon-black.svg";
    imgTwitter.src = "./media/icon-for-registretion/twitter-icon-black.svg";
    imgGoogle.src = "./media/icon-for-registretion/google-icon-black.svg";
    divTerms.classList.remove('dark-theme');
  }
}

// Применить текущую тему при загрузке страницы
applyTheme();

themeSwitcherButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  // Сохранить состояние темы в localStorage
  localStorage.setItem('isDarkMode', isDarkMode);
  // Применить новую тему
  applyTheme();
});
// ??????????????????????????????????????????????????????????????????????????????????????????????

// LOCALSTORAGE date
const registerButton = document.querySelector('.click-register');

function saveDataToLocalStorage() {
  const fullNameInput = document.querySelector('#fullNameInput');
  const fullEmailInput = document.querySelector('#emailInput');
  const fullPasswordInput = document.querySelector('#passwordInput');
  const fullPasswordConfirmInput = document.querySelector('#confirmPasswordInput');

  // Получаем существующий массив данных из localStorage или создаем новый, если он не существует
  const existingDataString = localStorage.getItem('userData');
  let existingData = existingDataString ? JSON.parse(existingDataString) : [];

 
  const newData = {
    fullName: fullNameInput.value,
    fullEmail: fullEmailInput.value,
    fullPassword: fullPasswordInput.value,
    fullPasswordConfirm: fullPasswordConfirmInput.value,
  };


  existingData.push(newData);

  // Сохраняем обновленный массив данных в localStorage
  localStorage.setItem('userData', JSON.stringify(existingData));

  console.log(existingData);
}

registerButton.addEventListener('click', saveDataToLocalStorage);

