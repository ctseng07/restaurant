import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add("header");

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Paddy's Pub";

    header.appendChild(restaurantName);
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
        createHome();
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


function loadWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
}
export default loadWebsite;