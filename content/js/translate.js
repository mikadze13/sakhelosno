 
let translations = {};

function changeLanguage(checkbox) {
  const lang = checkbox.checked ? "en" : "ge";
  const currentPath = window.location.pathname;
 

  // Detect and update the URL based on language
  if (lang === 'en') {
    if (!currentPath.startsWith('/en')) {
      const newPath = '/en' + currentPath; 
      window.history.pushState({}, '', newPath);
      document.documentElement.setAttribute('lang', 'en');
    }
  } else {
    if (currentPath.startsWith('/en')) {
      const newPath = currentPath.replace('/en', ''); 
      window.history.pushState({}, '', newPath);
      document.documentElement.setAttribute('lang', 'ka');
    }
  }

  // Load the selected language
  loadLanguage(lang);
}

function loadLanguage(lang) { 
  const navLinks = document.querySelectorAll(".navbar_inner ul li a");

  fetch(`/common/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      translations = data;
      updateTexts();
    })
    .catch(error => console.error("Error loading language:", error));

  navLinks.forEach(link => {
    link.style.padding = "6px 12px";
  });

  $(document).ready(function () {
    let BGL = $("#BG_Logo");
    let footerLogo = $('.footer_logo')
    let mobileNavLogo = $('.mobile__nav_inner').find('img:first')
    if (lang === "en") {
      BGL.attr("src", "/content/img/BG.svg");
      footerLogo.attr("src","/content/img/footer_logo1.svg")
      mobileNavLogo.attr("src","/content/img/footer_logo1.svg")
    } else {
      BGL.attr("src", "/content/img/BGGE.svg"); 
      footerLogo.attr("src","/content/img/footer_logo.svg")
      mobileNavLogo.attr("src","/content/img/footer_logo.svg")
    }
  });
}

function updateTexts() {
  document.querySelectorAll("[data-translate]").forEach(elem => {
    const key = elem.getAttribute("data-translate"); 
    elem.textContent = translations[key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Check if the URL starts with /en
  const isEnglish = window.location.pathname.startsWith("/en");
  const preferredLanguage = isEnglish ? "en" : (localStorage.getItem("preferredLanguage") || "ge");
  
  // Set checkbox based on preferred language
  const checkbox = document.getElementById("languageSwitcher") || document.getElementById("Mobile_languageSwitcher");
  if (checkbox) {
    checkbox.checked = preferredLanguage === "en";
    checkbox.addEventListener('change', () => changeLanguage(checkbox));
  }

  // Load the preferred language
  loadLanguage(preferredLanguage);
});
