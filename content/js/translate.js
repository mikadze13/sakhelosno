let translations = {};

function changeLanguage(checkbox) {
    const lang = checkbox.checked ? 'en' : 'ge';
    console.log('change');
    console.log("Changing language to:", lang);
    localStorage.setItem('preferredLanguage', lang);
    loadLanguage(lang);
}

function loadLanguage(lang) {
    const navLinks = document.querySelectorAll('.navbar_inner ul li a');
    fetch(`/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            translations = data;
            updateTexts();
        })
        .catch(error => console.error('Error loading language:', error));

    navLinks.forEach(function (link) {
        if (lang == 'en') {
            link.style.padding = "6px 12px 6px 12px";
        } else {
            link.style.padding = "7px 12px 7px 12px";
        }
    });
}

function updateTexts() {
    document.querySelectorAll('[data-translate]').forEach(elem => {
        const key = elem.getAttribute('data-translate');
        elem.textContent = translations[key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'ge';
    const checkbox = document.getElementById('languageSwitcher' || 'Mobile_languageSwitcher');
    checkbox.checked = preferredLanguage === 'en';
    loadLanguage(preferredLanguage);
});