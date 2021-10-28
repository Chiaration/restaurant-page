import home from './pages/home.js';
import menu from './pages/menu.js'
import contact from './pages/contact.js'
import './style.css';

// Creating TabList function
const createTablist = (() => {
    // Grab the content div from HTML
    const content_div = document.querySelector('#content');

    // Heading for the website
    const restaurant_name = document.createElement('h1');
    const headingText = document.createTextNode("Mr Ping Restaurant");
    restaurant_name.appendChild(headingText);
    content.appendChild(restaurant_name);

    // Create the tab div
    const tab_div = document.createElement('div');
    tab_div.classList.add('tab_bar');

    // Creating the home button
    const home_button = document.createElement('Button');
    home_button.classList.add('tablinks');
    home_button.innerText = "Home"
    home_button.setAttribute('id', 'default');

    const menu_button = document.createElement('Button');
    menu_button.classList.add('tablinks');
    menu_button.innerText = "Menu";

    const contact_button = document.createElement('Button');
    contact_button.classList.add('tablinks');
    contact_button.innerText = "Contact";

    // Adding button to div
    tab_div.appendChild(home_button);
    tab_div.appendChild(menu_button);
    tab_div.appendChild(contact_button);

    // Adding tab div to homepage
    content_div.appendChild(tab_div);

    return {home_button, menu_button, contact_button}
})();

// Imported modules functions
home.createHomepage();
menu.createMenu();
contact.createContact();

// Button Functions
function button_function(e){
    console.log("BUTTON FUNCTION")

    // Variable Declaration
    let tabcontent, tablinks;

    tabcontent = document.querySelectorAll('.tabcontent');
    tabcontent.forEach(tab => {
        tab.style.display = "none";
    });

    tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(tab => {
        tab.className = tab.className.replace(' active', '');
    })
    
    console.log(document.getElementById(e.currentTarget.innerText))
    document.getElementById(e.currentTarget.innerText).style.display = 'block';
    e.currentTarget.classname += " active";
};

createTablist.home_button.addEventListener("click", () => {
    button_function(event)}
);
createTablist.menu_button.addEventListener("click", () => {
    button_function(event)}
);
createTablist.contact_button.addEventListener("click", () => {
    button_function(event)}
);

document.getElementById("default").click();