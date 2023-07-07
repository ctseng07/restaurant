// import contactImage from "../img/theGang.png";

//module for creating the contact page
// const contactTitle = () => {
//     const contactPage = document.createElement('div');
//     contactPage.classList.add('contact-page');

//     const contactTitle = document.createElement('h1');
//     contactTitle.id = "contact-title";
//     contactTitle.textContent = "Contact Us";

//     contactPage.appendChild(contactTitle);

//     return contactPage;
// };

const contactBody = () => {

    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');

    contactPage.innerHTML = ` 
        <div class="hero">
        <h1>Contact us</h1>
      </div> 
     <p><span>📞:</span>123-456-7890</p>
      <p><span>📧:</span> www.wolfcolacorp.com</p>
    <p><span>📍:</span> 123 Fake St, Philedelphia, PA 12345</p>
    `;

    // const contactImg = document.createElement('img');
    // contactImg.id = "contact-img";
    // contactImg.src = contactImage;

    // contactPage.appendChild(contactImg);

    return contactPage;

}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    // main.appendChild(contactTitle());
    main.appendChild(contactBody());
}

export default loadContact;