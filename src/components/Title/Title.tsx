import React from 'react';

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({text}) => {
  return <h6>{text}</h6>
}

export default Title;