const hamburgerMenu = document.querySelector('.hamburger-menu');
const linksList = document.querySelector('.links-list');

hamburgerMenu.addEventListener('click', () => {
    console.log("Button was Clicked");
    linksList.classList.toggle('active-list');
})