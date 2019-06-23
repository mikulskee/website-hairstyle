import React from "react";

const IconIMG = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default IconIMG;
