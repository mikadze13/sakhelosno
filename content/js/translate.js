const translation = {
    en:{
        home:"Home",

    },
    ge:{
        home:"მთავარი"
    }
}
const languageSelect = document.querySelector("select");
const Home = document.getElementById("Home")
languageSelect.addEventListener("change",(event)=>{
    setLanguage(event.target.value);
})
const setLanguage = (language)=>{
    if(language == "ge"){
        Home.innerText = translation.ge.home
    }else if(language == "en"){
        Home.innerText = translation.en.home
    }
}