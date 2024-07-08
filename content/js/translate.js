const translation = {
    en:{
        home:"Home",

    },
    ge:{
        home:"მთავარი"
    }
}
const languageSwitch = document.getElementById("languageSwitch");
const Home = document.getElementById("Home")
// languageSwitch.addEventListener("click",(event)=>{
//     setLanguage(event.target.value);  
// })
const setLanguage = (language)=>{
    if(language === "ge"){
        Home.innerText = translation.ge.home
    }else if(language === "en"){
        Home.innerText = translation.en.home
    }
}
languageSwitch.addEventListener("change", () => {
    if (languageSwitch.checked) {
        setLanguage("ge");
    } else {
        setLanguage("en");
    }
});