import React from "react";
import SVG from "react-inlinesvg";

const IconSVG = ({ className, src, ...props }) => {
  return (
    <div {...props}>
      <SVG src={src} className={className} />
    </div>
  );
};

export default IconSVG;
