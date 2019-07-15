import React from "react";
import SVG from "react-inlinesvg";

const IconSVG = ({ className, src, isVisible, showAbout, ...props }) => {
  return (
    <div {...props} className={className}>
      <SVG src={src} isVisible={isVisible} showAbout={showAbout} />
    </div>
  );
};

export default IconSVG;
