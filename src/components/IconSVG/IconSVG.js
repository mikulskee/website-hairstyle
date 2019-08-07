import React from "react";
import SVG from "react-inlinesvg";

const IconSVG = ({ className, src, ...props }) => {
  return (
    <div {...props} className={className}>
      <SVG src={src} />
    </div>
  );
};

export default IconSVG;
