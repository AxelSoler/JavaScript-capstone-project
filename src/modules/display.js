import margarita from './margarita.js';

const itemSection = document.querySelector('#listItems')

const displayItems = async () => {
  const allItems = await margarita();
  const allMargaritas = allItems.drinks;
  console.log(allMargaritas);
  allMargaritas.forEach((element) => {
    itemSection.innerHTML += `<div class="item">
    <img src="" alt="item">
    <div class="title" id ="${element.idDrink}">
        <h2>${element.strDrink}</h2>
        <div class="likes">
            <img src="" alt="like">
            <p>likes</p>
        </div>
        <button>Comments</button>
        <button>Reservations</button>
    </div>
</div>`;
  });
};

export default displayItems;