import margarita from './margarita.js';

const displayItems = async (url, board) => {
  const allItems = await margarita(url);
  allItems.forEach(() => {
    board.innerHTML += `<div class="item">
    <img src="" alt="item">
    <div class="title">
        <h2>title</h2>
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