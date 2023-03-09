import styled from 'styled-components';

export const StyledImage = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
}))`
  width: 50vh;
`;
