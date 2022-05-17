import margarita from './margarita.js';
import like from '../img/like.svg';

const itemSection = document.querySelector('#listItems');

const displayItems = async () => {
  const allItems = await margarita();
  const allMargaritas = allItems.drinks;
  allMargaritas.forEach((element) => {
    itemSection.innerHTML += `<div class="item">
    <img class="margaritaImg" src="${element.strDrinkThumb}" alt="item">
    <div class="title" id ="${element.idDrink}">
      <h2>${element.strDrink}</h2>
      <div class="likes">
        <img class="likeImg" src="${like}" alt="like">
        <p>likes</p>
      </div>
      </div>
      <button class="commentBtn">Comments</button>
      <button class="reservationBtn">Reservations</button>
  </div>`;
  });
};

export default displayItems;