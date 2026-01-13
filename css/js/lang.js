let currentLang = 'de';


function setLang(lang) {
currentLang = lang;
document.documentElement.lang = lang;
document.querySelectorAll('[data-de]').forEach(el => {
el.textContent = el.getAttribute('data-' + lang);
});
}


window.addEventListener('DOMContentLoaded', () => setLang('de'));
