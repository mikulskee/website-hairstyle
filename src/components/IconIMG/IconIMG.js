import React from "react";
import styled from "styled-components";

const StyledIMG = styled.img`
  display: block;
`;

const IconIMG = ({ className, src, alt }) => {
  return <StyledIMG className={className} src={src} alt={alt} />;
};

export default IconIMG;
