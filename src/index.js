import './style.css';
import logoImg from './img/logo.png';
import displayItems from './modules/display.js';
import { popup, fetchCocktailById } from './modules/details.js';

const logo = document.querySelector('#logoImg');
logo.src = logoImg;

const itemSection = document.querySelector('#listItems');

itemSection.addEventListener('click', async (e) => {
  const { id } = e.target.parentElement.children[1];
  const details = await fetchCocktailById(id);
  popup(details);
});

window.onload = () => {
  displayItems();
};