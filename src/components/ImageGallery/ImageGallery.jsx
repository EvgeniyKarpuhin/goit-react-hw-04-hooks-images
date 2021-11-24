import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onClick }) {
  return (
    <ul>
      {images.map((item) => {
        return <ImageGalleryItem item={item} onClick={onClick} />
      })}
    </ul>
  )
}

export default ImageGallery;
