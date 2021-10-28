const createMenu = () => {
    // Grab the content div from HTML
    const content = document.querySelector('#content');

    // Create home div
    const menu_div = document.createElement('div');
    menu_div.classList.add('tabcontent');
    menu_div.setAttribute('id', 'Menu');
    content.appendChild(menu_div);

    // Paragraph content for page
    const address = document.createElement('p');
    const address_text = document.createTextNode('MENU PAGE');
    address.appendChild(address_text);
    menu_div.appendChild(address);

};

export default {createMenu};