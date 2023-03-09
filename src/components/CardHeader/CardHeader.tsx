import React from 'react';

import Description from '../Description/Description';
import Title from '../Title/Title';
import { StyledHeader } from './Styles';

interface CardHeaderProps {
    title: string;
    description: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, description }) => {
  return (
    <StyledHeader>
        <Title text={title} />
        <Description text={description} />
    </StyledHeader>
    )
}

export default CardHeader;