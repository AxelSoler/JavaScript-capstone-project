import './style.css';
import logoImg from './img/logo.png';
import displayItems from './modules/display.js';
import { closePopup, popup } from './modules/details';

const logo = document.querySelector('#logoImg');
logo.src = logoImg;

// const commentBtn = document.querySelector('.commentBtn');
// commentBtn.forEach((element) => {
//   console.log(element);
//   element.addEventListener('click', () => {
//     console.log('hello world');
//   });
// });
popup();
closePopup();

window.onload = () => {
  displayItems();
};