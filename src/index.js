import home from './pages/home.js';
import menu from './pages/menu.js'
import contact from './pages/contact.js'
import button_function from './functions/tab_button_functions.js'
import './style.css';

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
    home_button.onclick = button_function.button_function(event, "Home");

    const menu_button = document.createElement('Button');
    menu_button.classList.add('tablinks');
    menu_button.innerText = "Menu"

    const contact_button = document.createElement('Button');
    contact_button.classList.add('tablinks');
    contact_button.innerText = "Contact"

    // Adding button to div
    tab_div.appendChild(home_button);
    tab_div.appendChild(menu_button);
    tab_div.appendChild(contact_button);

    // Adding tab div to homepage
    content_div.appendChild(tab_div);
})();

home.createHomepage();
menu.createMenu();
contact.createContact();
button_function.button_function();

