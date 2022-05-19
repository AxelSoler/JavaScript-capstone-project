import './style.css';
import logoImg from './img/logo.png';
import displayItems from './modules/display.js';
import { popup, fetchCocktailById } from './modules/details.js';

const urlAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const urlInvAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xiWFQCtMNwoChVwdNjKe/';
const logo = document.querySelector('#logoImg');
logo.src = logoImg;

const itemSection = document.querySelector('#listItems');

itemSection.addEventListener('click', async (e) => {
  if (e.target.classList.contains('commentBtn')) {
    const { id } = e.target.parentElement.children[1];
    const details = await fetchCocktailById(id);
    await popup(details);
  }
});

window.onload = () => {
  displayItems(urlAPI, urlInvAPI);
};