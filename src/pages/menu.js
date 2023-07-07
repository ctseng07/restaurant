import milkSteakPic from "../img/milkSteak.png";
import rumHamPic from "../img/rumham.png"
import grilledCharliePic from "../img/grilledcharlie.png"
import riotJuicePic from "../img/riotjuice.png"


// module for creating the menu page
function createMenu() {
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
  milkSteakText.style.width = "730px";
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
  rumHamText.style.width = "730px";
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

  const menuItem4 = document.createElement("div");
  menuItem4.id = "menu-item";

  const riotJuice = new Image();
  riotJuice.id = "menu-img";
  riotJuice.src = riotJuicePic;

  const riotJuiceText = document.createElement("div");
  riotJuiceText.innerHTML = `<h4>Riot Juice: <span>$7.99</span></h4>
  <ul>
    <ul>1 oz Everclear</ul>
    <ul>3/4 oz Blue Curacao</ul>
    <ul>1/2 oz Overproof White Rum</ul>
    <ul>3/4 oz Lemon Juice</ul>
    <ul>1/4 oz Simple Syrup</ul>
    <ul>1 peel Lemon</ul>
  </ul>
</div>
</div>`;

  riotJuiceText.style.width = "730px";
  menuItem4.appendChild(riotJuice);
  menuItem4.appendChild(riotJuiceText);

  menu.appendChild(menuItem1);
  menu.appendChild(menuItem2);
  menu.appendChild(menuItem3);
  menu.appendChild(menuItem4);

  return menu;
};

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;