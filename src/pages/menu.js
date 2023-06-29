// module for creating the menu page
function createMenu() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('menu-list');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = "1st Choice";
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "2nd Choice";
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "3rd Choice";
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    menu.appendChild(heading);
    menu.appendChild(menuList);
    content.appendChild(menu);

    return menu;
};

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;