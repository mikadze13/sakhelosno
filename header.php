<style>
    .navbar {
        background-color: #24282D;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        height: 91px;
        position: fixed;
        z-index: 1222222;
        width: 100%;
    }

    .navbar_inner {
        display: flex;
        justify-content: space-between;
        max-width: 1345px;
        width: 100%;
        margin: 0 auto;
    }

    .navbar_item__container {
        margin-right: 120px !important;
    }

    .navbar_item__container li {
        margin-right: 5px;
    }

    .navbar ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
    }

    .navbar li a {
        font-size: 20px;
        padding: 7px 12px;
        height: 3.8ch;
        position: relative;
        border: 2px solid transparent;
    }

    .navbar a {
        text-decoration: none;
        color: white;
        display: block;
    }

    #Home {
        border: 2px solid rgba(166, 166, 166, 0.77);
        border-radius: 18px;
    }

    #service {
        border: 2px solid rgba(166, 166, 166, 0.77);
        border-radius: 18px;
    }

    .navbar li a:hover {
        border: 2px solid rgba(166, 166, 166, 0.77);
        border-radius: 18px;
        transition: border 0.3s ease-in-out;

    }

    /* Logo styling */
    .navbar .logo {
        color: white;
        font-size: 24px;
        font-weight: bold;
    }

    .logo_img {
        height: 51px;
        cursor: pointer;
    }

    /* Language switch button styling */
    .lang-switch {
        background-color: #575757;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
    }

    .lang-switch:hover {
        background-color: rgba(166, 166, 166, 0.77);
        transition: background-color 0.3s;
    }
</style>
<div class="navbar">
    <div class="navbar_inner">
        <div class="logo"><img src="./content/img/BG.svg" alt="BG_logo" class="logo_img"></div>
        <ul>
            <ul class="navbar_item__container">
                <li><a href="#home" class="page" id="Home">მთავარი</a></li>
                <li><a href="#container-service">სერვისები</a></li>
                <li><a href="#about" id="aboutUs">ჩვენს შესახებ</a></li>
                <li><a href="#contact_container" id="FAQ">FAQ</a></li>
                <li><a href="" id="contact">კონტაქტი</a></li>
            </ul>
            <div class="lang_container">
                <div class="daynight">
                    <label for="languageSwitch">
                        <input type="checkbox" id="languageSwitch">
                        <div class="toggle">
                            <div class="star1"></div>
                            <div class="star2"></div>
                        </div>
                    </label>
                </div>
            </div>
        </ul>
    </div>
</div>