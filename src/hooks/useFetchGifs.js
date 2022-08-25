import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  //nuestro hook puede tener su estado independiente
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  //los hooks pueden tener a su vez llamadas a otros hooks
  useEffect(() => {
    getImages();
  }, []);

  //aqui retornamos los valores que necesitamos en nuestro componente
  return {
    images,
    isLoading
  }
}
