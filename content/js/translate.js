let translations = {};

function changeLanguage(checkbox) {
    const lang = checkbox.checked ? 'en' : 'ge';
    localStorage.setItem('preferredLanguage', lang); 
    loadLanguage(lang);
} 
function loadLanguage(lang) {
    const navLinks = document.querySelectorAll('.navbar_inner ul li a');
    fetch(`/common/${lang}.json`)
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
            link.style.padding = "6px 12px 6px 12px";
        }
    });
    $(document).ready(function () {
        let BGL = $("#BG_Logo")
        if (lang == 'en') {
            BGL.attr("src", "/content/img/BG.svg");
        } else {
            BGL.attr("src", "/content/img/BGGE.svg");
        }
    })
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