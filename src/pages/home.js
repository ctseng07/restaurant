import homeImage from "../img/theGang.png";

function createHome() {
    const home = document.createElement('div');
    home.classList.add("home");

    const homeImg = document.createElement('img');
    homeImg.id = "home-img";
    homeImg.src = homeImage;

    home.appendChild(homeImg);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;