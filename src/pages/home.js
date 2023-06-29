import homeImage from "../img/paddyspub.png";
import loadMenu from "./menu";

function createHome() {
    // const mainWrapper = document.createElement("#main-wrapper");
    // mainWrapper.innerHTML = "";

    const home = document.createElement('div');
    home.classList.add("home");

    const homeImg = document.createElement('img');
    homeImg.id = "home-img";
    homeImg.src = homeImage;

    home.appendChild(createParagraph("Welcome to"));
    // home.appendChild(createParagraph("voted worst bar in america"));
    home.appendChild(homeImg);
    // home.appendChild(createParagraph("Order online or visit us!"));

    const orderBtn = document.createElement('button');
    orderBtn.setAttribute('id', 'order-btn');
    orderBtn.classList.add('orderBtn');
    orderBtn.textContent = 'Order Now';
    home.appendChild(orderBtn);

    orderBtn.addEventListener('click', () => {
        createMenu();
        clearContent();
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
