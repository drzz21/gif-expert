export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=U4P1GKXEB1Y38CeZLvTCRlNryZY9HC7I&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  // const gifs=data.map(img=>{
  //   return {

  //   }
  // })

  //se puede reducir a
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

   console.log(gifs);
  return gifs;
};
