const displayDetails = async (id) => {
  const cocktail = await fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  console.log(cocktail);
};

module.exports = {
  displayDetails,
};