import like from '../img/like.svg';
import { sendlike, getData } from './data.js';

const itemSection = document.querySelector('#listItems');

const displayItems = async (url, url2) => {
  const allItems = await getData(url);
  const allMargaritas = allItems.drinks;
  allMargaritas.forEach((element) => {
    itemSection.innerHTML += `<div class="item">
    <img class="margaritaImg" src="${element.strDrinkThumb}" alt="item">
    <div class="title" id ="${element.idDrink}">
      <h2>${element.strDrink}</h2>
      <div class="likes">
        <img class="likeImg" src="${like}" alt="like">
        <p class="likesNum"></p>
      </div>
      </div>
      <button class="commentBtn">Comments</button>
      <button class="reservationBtn">Reservations</button>
  </div>`;
  });
  const likesP = document.querySelectorAll('.likesNum');
  const allLikes = await getData(`${url2}likes/`);
  likesP.forEach((element, index) => {
    element.innerText = `${allLikes[index].likes} likes`;
  });
  const likesImg = document.querySelectorAll('.likeImg');
  sendlike(`${url2}likes/`, likesImg);
};

export default displayItems;