import styled from 'styled-components';

export const CarInfoHeader = styled.header`
  line-height: 0em;
`;

export const CarInfoModel = styled.p`
  font-size: 0.9em;
`;

export const CarInfoImage = styled.img.attrs(({ src }) => ({
  src,
}))`
  width: 50vh;
`;
