import './style.css';
import logoImg from './img/logo.png';
import displayItems from './modules/display.js';

const urlAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const urlInvAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xiWFQCtMNwoChVwdNjKe/likes/';
const logo = document.querySelector('#logoImg');

logo.src = logoImg;

window.onload = () => {
  displayItems(urlAPI, urlInvAPI);
};