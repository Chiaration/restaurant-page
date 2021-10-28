const createContact = () => {
    // Grab the content div from HTML
    const content = document.querySelector('#content');

    // Create home div
    const contact_div = document.createElement('div');
    contact_div.classList.add('tabcontent');
    contact_div.setAttribute('id', 'Contact');
    content.appendChild(contact_div);

    // Paragraph content for page
    const address = document.createElement('p');
    const address_text = document.createTextNode('CONTACT PAGE');
    address.appendChild(address_text);
    contact_div.appendChild(address);

};

export default {createContact};