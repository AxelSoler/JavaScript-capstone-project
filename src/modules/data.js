const getData = async (url) => {
  let response = await fetch(url);
  response = await response.json();
  return response;
};

const sendlike = async (url2, img) => {
  img.forEach((element, index) => {
    element.addEventListener('click', async () => {
      await fetch(url2, {
        method: 'POST',
        body: JSON.stringify({
          item_id: `item${index + 1}`,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const likesP = document.querySelectorAll('.likesNum');
      const allLikes = await getData(url2);
      likesP.forEach((element, index) => {
        element.innerText = `${allLikes[index].likes} likes`;
      });
    });
  });
};

const counterOfDrinks = (data, text) => {
  const numberOfDrinks = data.length;
  text.innerText += ` (${numberOfDrinks})`;
  return numberOfDrinks;
};

export { getData, sendlike, counterOfDrinks };