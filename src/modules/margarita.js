const urlAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

const margarita = async () => {
  let response = await fetch(urlAPI);
  response = await response.json();
  return response;
};

export default margarita;