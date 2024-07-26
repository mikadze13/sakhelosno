let translations = {};

function changeLanguage(lang) {
    console.log('change')
    console.log("Changing language to:", lang); 
    localStorage.setItem('preferredLanguage', lang);
    loadLanguage(lang);
}

function loadLanguage(lang) {
    console.log("Loading language file:", lang); 
    fetch(`${lang}.json`)
        .then(response => response.json())
        .then(data => {
            translations = data;
            updateTexts();
        })
        .catch(error => console.error('Error loading language:', error));
}

function updateTexts() {
    document.querySelectorAll('[data-translate]').forEach(elem => {
        const key = elem.getAttribute('data-translate');
        elem.textContent = translations[key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'ge';
    document.getElementById('languageSwitcher').value = preferredLanguage;
    console.log(document.getElementById('languageSwitcher').value)
    loadLanguage(preferredLanguage);
});
