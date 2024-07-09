const translation = {
    ge: {
        home: "მთავარი",
        services: "სერვისები",
        aboutUs: "ჩვენს შესახებ",
        contact: "კონტაქტი"
    },
    en: {
        home: "Home",
        services: "services",
        aboutUs: "About us",
        contact: "contact"
    },

}
const languageSwitch = document.getElementById("languageSwitch");
const Home = document.getElementById("Home")
const service = document.getElementById("service")
const aboutUs = document.getElementById("aboutUs")
const contact = document.getElementById("contact")
// languageSwitch.addEventListener("click",(event)=>{
//     setLanguage(event.target.value);  
// })
const setLanguage = (language) => {
    if (language === "ge") {
        Home.innerText = translation.ge.home
        service.innerText = translation.ge.services
        aboutUs.innerText = translation.ge.aboutUs
        contact.innerText = translation.ge.contact

    } else if (language === "en") {
        Home.innerText = translation.en.home
        service.innerText = translation.en.services
        aboutUs.innerText = translation.en.aboutUs
        contact.innerText = translation.en.contact
    }
}
languageSwitch.addEventListener("change", () => {
    if (languageSwitch.checked) {
        setLanguage("en");
    } else {
        setLanguage("ge");
    }
});