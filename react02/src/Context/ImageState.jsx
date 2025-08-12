import React, { useEffect, useState } from "react";
import ImageContext from "./ImageContext";

const ImageState = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("pets");

  const Api_Key = "49604126-b604d931bdc6986fefd2d0c4a";

  const FetchImages = async (searchQuery = query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://pixabay.com/api/?key=${Api_Key}&q=${encodeURIComponent(searchQuery)}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await res.json();
      setImages(data.hits);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      FetchImages(query);
    }, 500); // debounce for typing
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const FetchedCategory = async (category) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://pixabay.com/api/?key=${Api_Key}&category=${encodeURIComponent(category)}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await res.json();
      setImages(data.hits);
    } catch (error) {
      console.error("Error fetching category images:", error);
    }
    setLoading(false);
  };

  return (
    <ImageContext.Provider
      value={{ images, FetchedCategory, FetchImages, loading, setQuery }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;
