import getData from './data.js';
import like from '../img/like.svg';

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
};

export default displayItems;