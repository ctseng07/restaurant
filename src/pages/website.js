import paddysLogo from '../img/logo.png';
import loadHome from './home'
import createMenu from './menu';
import createContact from './contact';

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantLogo = document.createElement('img');
    restaurantLogo.src = paddysLogo;
    restaurantLogo.height = '120';
    header.appendChild(restaurantLogo);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const navBar = document.createElement('navBar');
    navBar.id = 'navBar';

    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'home-btn');
    homeBtn.classList.add('nav-btn');
    homeBtn.textContent = 'Home';
    navBar.appendChild(homeBtn);

    homeBtn.addEventListener('click', () => {
        loadHome();
        clearContent();
    });

    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menu-btn');
    menuBtn.classList.add('nav-btn');
    menuBtn.textContent = 'Menu';
    navBar.appendChild(menuBtn);

    menuBtn.addEventListener('click', () => {
        createMenu();
        clearContent();
    });

    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('id', 'contact-btn');
    contactBtn.classList.add('nav-btn');
    contactBtn.textContent = 'Contact';
    navBar.appendChild(contactBtn);

    contactBtn.addEventListener('click', () => {
        createContact();
        clearContent();
    });

    return navBar;
}

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    };

};

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}


function loadWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());

    loadHome();

}

// function loadWrapper() {
//     //clear current content

//     const mainWrapper = document.createElement("div");
//     mainWrapper.id = "main-wrapper";

//     return mainWrapper;
// }

export default loadWebsite;