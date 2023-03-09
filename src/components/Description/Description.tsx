import React from 'react';
import { StyledParagraph } from './Styles';

interface DescriptionProps {
    text: string;
}

const Description: React.FC<DescriptionProps> = ({text}) => {
  return <StyledParagraph>{text}</StyledParagraph>;
}

export default Description;