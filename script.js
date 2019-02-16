const hamburger = document.querySelector('[menu-button]');
const menuItens = document.querySelector('[menu-itens]');

const toggleMenu = () => {
    menuItens.classList.toggle('esconde');
}

hamburger.onclick = toggleMenu;