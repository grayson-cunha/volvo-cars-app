import React from 'react';
import CardHeader from '../CardHeader/CardHeader';
import Image from '../Image/Image';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div>
      <CardHeader title={title} description={description} />
      <Image src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default Card;
