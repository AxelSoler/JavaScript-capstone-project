import './style.css';
import logoImg from './img/logo.png';
import displayItems from './modules/display.js';

const urlAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const logo = document.querySelector('#logoImg');

logo.src = logoImg;

window.onload = () => {
  displayItems(urlAPI);
};