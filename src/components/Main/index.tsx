import * as S from './styles';

export const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="./img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>React avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e styled Components
    </S.Description>
    <S.Illustration
      src="./img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
);
