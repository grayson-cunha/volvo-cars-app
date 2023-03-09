import React from 'react';

import { StyledImage } from './Styles';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;
