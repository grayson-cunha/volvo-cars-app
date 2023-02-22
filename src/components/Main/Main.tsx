import { ReactNode } from 'react';
import { Content } from './Styles';

interface Props {
  children?: ReactNode;
}

function Main({ children }: Props) {
  return <Content>{children}</Content>;
}

export default Main;
