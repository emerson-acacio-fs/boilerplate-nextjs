import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Wrapper = styled.main`
  background-color: ${theme.backgroundColor};
  color: ${theme.secondary.colora};
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  width: min(30rem, 100%);
  margin-top: 3rem;
`;
