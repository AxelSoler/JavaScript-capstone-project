const sendlike = async (url2, img)=>{
  img.forEach((element, index) => {
    element.addEventListener('click', async () => {
      await fetch (url2,{
        method: 'POST',
        body: JSON.stringify({
          "item_id": `item${index+1}`
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    })
  })
};


export default sendlike;