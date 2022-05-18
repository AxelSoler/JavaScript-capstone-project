import tempImage from '../img/temp.jpg';

const fetchCocktailById = async (id) => {
  const cocktail = await fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  return cocktail;
};

const closePopup = () => {
  const closeButton = document.querySelector('.icon');
  closeButton.addEventListener('click', () => {
    const card = document.querySelector('.card');
    card.style.display = 'none';
  });
};

const popup = () => {
  const card = document.createElement('div');
  card.className = 'card';

  const imageDiv = document.createElement('div');
  imageDiv.className = 'imageDiv';

  const image = document.createElement('img');
  image.src = tempImage;
  image.className = 'detail-image';

  const icon = document.createElement('i');
  icon.className = 'fa fa-times icon';

  const title = document.createElement('h2');
  title.innerHTML = 'Margarita';
  title.className = 'text-title';

  imageDiv.append(image);
  card.append(icon, imageDiv, title);
  document.body.appendChild(card);
};

export {
  fetchCocktailById,
  popup,
  closePopup,
};