import styled from 'styled-components';

export const StyledImage = styled.img.attrs(({ src }) => ({
    src,
  }))`
    width: 50vh;
  `;

  