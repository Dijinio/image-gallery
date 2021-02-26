import React, { useState, useEffect } from "react";
import "./galleryStyle.css";
import ImageSlider from "./ImageSlider";

function Gallery({ images }) {
  const [imageId, setIamgeId] = useState(1);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const closeOnKeypress = (e) => {
      if (e.key === "Escape") closeSlider();
    };
    document.addEventListener("keydown", closeOnKeypress);
    return () => {
      document.removeEventListener("keydown", closeOnKeypress);
    };
  });

  useEffect(() => {
    if (showSlider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSlider]);

  const openSlider = (id) => {
    setIamgeId(id);
    setShowSlider(true);
  };

  const closeSlider = () => {
    setShowSlider(false);
  };

  return (
    <>
      <ImageSlider
        images={images}
        imageId={imageId}
        showSlider={showSlider}
        closeSlider={closeSlider}
      />
      <h1 className="header">Image Gallery</h1>
      <section className="gallery-container">
        {images.map((image) => {
          return (
            <div className="image-container" key={image.id}>
              <img
                src={image.url}
                alt=""
                onClick={() => openSlider(image.id)}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Gallery;
