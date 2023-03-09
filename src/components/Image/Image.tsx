import React from 'react';

import { StyledImage } from './Styles';

interface ImageProps {
  src: string;
}

const Image: React.FC<ImageProps> = ({ src }) => {
  return <StyledImage src={`${src}`} />;
}

export default Image;