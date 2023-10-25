const themeSwitcherButton = document.querySelector('.dark-mode-switcher')
const dropDown = document.querySelector('.drop-down')
const imgFacebook = document.querySelector('.img-facebook')
const imgTwitter = document.querySelector('.img-twitter')
const imgGoogle = document.querySelector('.img-google')

let isDarkMode = localStorage.getItem('isDarkMode') === 'true'

function applyTheme() {
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
        dropDown.src = "./media/home-icon/drop-down-icon-black.svg"
        themeSwitcherButton.classList.add('dark-theme')
        imgFacebook.src = "./media/icon-for-registretion/facebook-icon-white.svg";
        imgTwitter.src = "./media/icon-for-registretion/twitter-icon-white.svg";
        imgGoogle.src = "./media/icon-for-registretion/google-icon-white.svg";
    } else {
        document.body.classList.remove('dark-theme');
        dropDown.src = "./media/home-icon/drop-down-icon.svg"
        themeSwitcherButton.classList.remove('dark-theme')
        imgFacebook.src = "./media/icon-for-registretion/facebook-icon-black.svg";
        imgTwitter.src = "./media/icon-for-registretion/twitter-icon-black.svg";
        imgGoogle.src = "./media/icon-for-registretion/google-icon-black.svg";
    }
}

applyTheme();

themeSwitcherButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    // Сохранить состояние темы в localStorage
    localStorage.setItem('isDarkMode', isDarkMode);
    // Применить новую тему
    applyTheme();
});