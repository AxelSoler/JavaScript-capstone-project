const displayDetails = async (id) => {
  const cocktail = await fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  return cocktail;
};

module.exports = {
  displayDetails,
};