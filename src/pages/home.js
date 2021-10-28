const createHomepage = () => {
    // Grab the content div from HTML
    const content = document.querySelector('#content');

    // Create home div
    const home_div = document.createElement('div');
    home_div.classList.add('tabcontent');
    home_div.setAttribute('id', 'Home');
    content.appendChild(home_div);

    // Paragraph content for page
    const address = document.createElement('p');
    const address_text = document.createTextNode('468 SOUTHCHURCH RD, SOUTHEND-ON-SEA SS1 2QA, UNITED KINGDOM');
    address.appendChild(address_text);
    home_div.appendChild(address);

};

export default {createHomepage};