import React, { useState, useEffect } from "react";

function ImageSlider({ images, imageId, showSlider, closeSlider }) {
  const [id, setId] = useState(imageId);

  useEffect(() => {
    if (id < 1) {
      setId(images.length);
    }
    if (id > images.length) {
      setId(1);
    }
  }, [id]);

  useEffect(() => {
    setId(imageId);
  }, [imageId]);

  return (
    <section className={`slider-container ${showSlider && "show"}`}>
      <div className="close-info">
        <h1>{`${id} / ${images.length}`}</h1>
        <button className="btn close-btn" onClick={() => closeSlider()}>
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div
        className="slider-wrapper"
        onClick={(e) =>
          e.target.className === "slider-wrapper" && closeSlider()
        }
      >
        <button className="btn slide-right" onClick={() => setId(id + 1)}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <button className="btn slide-left" onClick={() => setId(id - 1)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div
          className="slider"
          onClick={(e) => e.target.className === "slider" && closeSlider()}
        >
          {images.map((image) => {
            let slidePosition = "nextSlide";
            if (image.id === id) {
              slidePosition = "currentSlide";
            }
            if (image.id < id) {
              slidePosition = "prevSlide";
            }
            return (
              <div className={`slide ${slidePosition}`} key={image.id}>
                <img src={image.url} alt={image.id} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;
