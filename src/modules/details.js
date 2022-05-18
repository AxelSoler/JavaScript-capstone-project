import tempImage from '../img/temp.jpg';

const fetchCocktailById = async (id) => {
  const cocktail = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const result = await cocktail.json();
  return result.drinks[0];
};

const popup = (details) => {
  console.log(details);
  const { strDrinkThumb, strDrink } = details;
  const card = document.createElement('div');
  card.className = 'card';

  const imageDiv = document.createElement('div');
  imageDiv.className = 'imageDiv';

  const image = document.createElement('img');
  image.src = strDrinkThumb;
  image.className = 'detail-image';

  const icon = document.createElement('i');
  icon.className = 'fa fa-times icon';

  const title = document.createElement('h2');
  title.innerHTML = strDrink;
  title.className = 'text-title';

  const infoDiv = document.createElement('div');
  infoDiv.className = 'detail-info';

  const info1 = document.createElement('p');
  info1.innerHTML = 'Ingredient: apple';

  const info2 = document.createElement('p');
  info2.innerHTML = 'Ingredient: apple';

  const info3 = document.createElement('p');
  info3.innerHTML = 'Ingredient: apple';

  const info4 = document.createElement('p');
  info4.innerHTML = 'Ingredient: apple';

  const commentDiv = document.createElement('div');
  commentDiv.className = 'comment-div';
  const commentTitle = document.createElement('h2');
  commentTitle.innerHTML = 'Comment (2)';
  commentTitle.className = 'comment-title';

  const ul = document.createElement('ul');
  ul.className = 'comment-list';
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = 'this is a comment displayed with for loop';
    ul.append(li);
  }

  icon.addEventListener('click', () => {
    card.style.display = 'none';
  });

  const newCommentDiv = document.createElement('div');
  newCommentDiv.className = 'newCommentDiv';
  const newCommentTitle = document.createElement('h2');
  newCommentTitle.innerHTML = 'Add a comment';
  newCommentTitle.className = 'add-comment-title';

  const input = document.createElement('input');
  input.className = 'input-comment';
  const textArea = document.createElement('textarea');

  newCommentDiv.append(newCommentTitle, input, textArea);
  commentDiv.append(commentTitle, ul);
  infoDiv.append(info1, info2, info3, info4);
  imageDiv.append(image);
  card.append(icon, imageDiv, title, infoDiv, commentDiv, newCommentDiv);
  document.body.appendChild(card);
};

export {
  fetchCocktailById,
  popup,
};