import React from "react";
import SVG from "react-inlinesvg";

const IconSVG = ({ className, src, isVisible, ...props }) => {
  return (
    <div {...props} className={className}>
      <SVG src={src} isVisible={isVisible} />
    </div>
  );
};

export default IconSVG;
