const fetchCocktailById = async (id) => {
  const cocktail = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const result = await cocktail.json();
  return result.drinks[0];
};

const popup = (details) => {
  console.log(details);
  const {
    strDrinkThumb, strDrink, strInstructions,
    strIngredient1, strIngredient2, strIngredient3, strIngredient4,
  } = details;
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
  info1.innerHTML = `Ingredient1: ${strIngredient1}`;

  const info2 = document.createElement('p');
  info2.innerHTML = `Ingredient2: ${strIngredient2}`;

  const info3 = document.createElement('p');
  info3.innerHTML = `Ingredient3: ${strIngredient3}`;

  const info4 = document.createElement('p');
  info4.innerHTML = `Ingredient4: ${strIngredient4}`;

  const instructionTitle = document.createElement('h2');
  instructionTitle.innerHTML = 'Read Instructions';
  instructionTitle.className = 'instructions-title';
  const instruction = document.createElement('p');
  instruction.className = 'instructions';

  instruction.innerHTML = strInstructions;
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

  const addCommentDiv = document.createElement('form');
  addCommentDiv.className = 'new-comment-div';
  const newCommentTitle = document.createElement('h2');
  newCommentTitle.innerHTML = 'Add a comment';
  newCommentTitle.className = 'add-comment-title';

  const nameInput = document.createElement('input');
  nameInput.className = 'input-comment';
  nameInput.placeholder = 'Your name';

  const message = document.createElement('textarea');
  message.className = 'textarea-input';
  message.cols = 10;
  message.rows = 10;
  message.placeholder = 'Your insights....';

  const button = document.createElement('form');
  button.textContent = 'COMMENT';
  button.className = 'submit-button';

  commentDiv.append(commentTitle, ul);
  infoDiv.append(info1, info2, info3, info4);
  imageDiv.append(image);
  addCommentDiv.append(newCommentTitle, nameInput, message, button);
  card.append(icon, imageDiv, title, infoDiv,
    instructionTitle, instruction, commentDiv, addCommentDiv);
  document.body.appendChild(card);
};

export {
  fetchCocktailById,
  popup,
};