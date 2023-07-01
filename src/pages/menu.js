import milkSteakPic from "../img/milkSteak.png";
import rumHamPic from "../img/rumham.png"
import grilledCharliePic from "../img/grilledcharlie.png"


// module for creating the menu page
function createMenu() {
  const content = document.querySelector('#content');

  const menu = document.createElement('div');
  menu.classList.add('menu-container');

  const menuTitle = document.createElement('h1');
  menuTitle.id = "menu-title";
  menuTitle.textContent = 'Our Menu';
  menu.appendChild(menuTitle);

  const menuItem1 = document.createElement("div");
  menuItem1.id = "menu-item";

  const milkSteak = new Image();
  milkSteak.id = "menu-img";
  milkSteak.src = milkSteakPic;

  const milkSteakText = document.createElement("div");
  milkSteakText.innerHTML = `<h4>Milk Steak: <span>$19.99</span></h4>
    <p>
Milk steak boiled over hard, served with a side of our finest raw jelly beans
    </p>
  </div>
</div>`;

  menuItem1.appendChild(milkSteak);
  menuItem1.appendChild(milkSteakText);

  const menuItem2 = document.createElement("div");
  menuItem2.id = "menu-item";

  const rumHam = new Image();
  rumHam.id = "menu-img";
  rumHam.src = rumHamPic;

  const rumHamText = document.createElement("div");
  rumHamText.innerHTML = `<h4>Rum Ham: <span>$14.99</span></h4>
  <p>
    Ham soaked in Rum
  </p>
</div>
</div>`;

  menuItem2.appendChild(rumHam);
  menuItem2.appendChild(rumHamText);

  const menuItem3 = document.createElement("div");
  menuItem3.id = "menu-item";

  const grilledCharlie = new Image();
  grilledCharlie.id = "menu-img";
  grilledCharlie.src = grilledCharliePic;

  const grilledCharlieText = document.createElement("div");
  grilledCharlieText.innerHTML = `<h4>Grilled Charlie: <span>$9.99</span></h4>
  <p>
    Reverse grilled cheese with chocolate and butter inside, and cheese and peanut butter outside
  </p>
</div>
</div>`;

  menuItem3.appendChild(grilledCharlie);
  menuItem3.appendChild(grilledCharlieText);

  menu.appendChild(menuItem1);
  menu.appendChild(menuItem2);
  menu.appendChild(menuItem3);

  // const menuList = document.createElement('ul');
  // const menuItem = document.createElement('img');
  // menuItem.textContent = "Milk Steak";
  // menuItem.height = "200";
  // // menuItem.src = milkSteak;

  // const menuItemImg = document.createElement('img');
  // const menuItem2 = document.createElement('li');
  // menuItem2.textContent = "2nd Choice";
  // menuItemImg.src = milkSteak;

  // const menuItem3 = document.createElement('li');
  // menuItem3.textContent = "3rd Choice";
  // // menuList.appendChild(menuItem1);
  // menuList.appendChild(menuItem2);
  // menu.appendChild(menuItemImg);
  // menuList.appendChild(menuItem3);

  // menu.appendChild(menuList);
  // content.appendChild(menu);

  return menu;
};

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;