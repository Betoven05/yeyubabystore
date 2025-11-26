// src/components/LazyImage.jsx
import React from "react";

export const LazyImage = ({ src, alt, className, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"       
      decoding="async"     
      {...rest}            
    />
  );
};
