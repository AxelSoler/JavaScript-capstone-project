const getData = async (url) => {
  let response = await fetch(url);
  response = await response.json();
  return response;
};

export default getData;