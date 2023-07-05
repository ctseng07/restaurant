import homeImage from "../img/paddyspub.png";
import createMenu from "./menu";
import clearContent from "./website";

function createHome() {

    const home = document.createElement('div');
    home.classList.add("home");

    const homeImg = document.createElement('img');
    homeImg.id = "home-img";
    homeImg.src = homeImage;

    home.appendChild(createParagraph("Welcome to"));
    home.appendChild(homeImg);

    const orderBtn = document.createElement('button');
    orderBtn.setAttribute('id', 'order-btn');
    orderBtn.classList.add('orderBtn');
    orderBtn.textContent = 'Order Now';
    home.appendChild(orderBtn);

    orderBtn.addEventListener('click', () => {
        createMenu();
    });

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
