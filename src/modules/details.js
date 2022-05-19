const fetchCocktailById = async (id) => {
  const cocktail = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const result = await cocktail.json();
  return result.drinks[0];
};

const fetchComments = async (id) => {
  const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xiWFQCtMNwoChVwdNjKe/comments?item_id=${id}`);
  const result = await comments.json();
  return result;
};

const reloadComments = (allComments, ul) => {
  ul.className = 'comment-list';
  for (let i = 0; i < allComments.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'comment-list-div';
    const p1 = document.createElement('p');
    p1.innerHTML = `${allComments[i].username}:`;

    const p2 = document.createElement('p');
    p2.innerHTML = allComments[i].comment;

    li.append(p1, p2);
    ul.append(li);
  }
};

const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xiWFQCtMNwoChVwdNjKe/comments';
const postComments = async (id, username1, comment1) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: username1,
      comment: comment1,
    }),
  });
  return response;
};

const popup = async (details) => {
  const {
    strDrinkThumb, strDrink, strInstructions,
    strIngredient1, strIngredient2, strIngredient3, strIngredient4, idDrink,
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
  commentTitle.innerHTML = 'Comment';
  commentTitle.className = 'comment-title';

  const allComments = await fetchComments(idDrink);

  const ul = document.createElement('ul');
  reloadComments(allComments, ul);

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

  const button = document.createElement('button');
  button.textContent = 'COMMENT';
  button.className = 'submit-button';

  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = nameInput.value;
    const comment = message.value;

    if (username === '' || comment === '') {
      alert('fields cannot be empty');
      return;
    }

    const id = Number(idDrink);
    const res = await postComments(id, username, comment);

    if (res) {
      const ul = document.querySelector('.comment-list');
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      const allComments = await fetchComments(idDrink);
      reloadComments(allComments, ul);
    }

    nameInput.value = '';
    message.value = '';
  });

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
  fetchComments,
  postComments,
};