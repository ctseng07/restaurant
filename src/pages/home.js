import homeImage from "../img/paddyspub.png";

function createHome() {
    // const mainWrapper = document.createElement("#main-wrapper");
    // mainWrapper.innerHTML = "";

    const home = document.createElement('div');
    home.classList.add("home");

    const homeImg = document.createElement('img');
    homeImg.id = "home-img";
    homeImg.src = homeImage;

    home.appendChild(createParagraph("Welcome to Paddy's Pub"));
    home.appendChild(createParagraph("Home of the famous Milk Steak"));
    home.appendChild(homeImg);
    home.appendChild(createParagraph("Order online or visit us!"));

    // mainWrapper.appendChild(home);

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;