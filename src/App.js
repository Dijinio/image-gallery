import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    function getImages() {
      const imgUrls = [];
      for (let i = 1; i <= 15; i++) {
        imgUrls.push({
          id: i,
          url: `https://picsum.photos/id/${i}/900/600?`,
        });
      }
      setImages(imgUrls);
    }
    getImages();
  }, []);

  return (
    <>
      <Gallery images={images} />
    </>
  );
}

export default App;
