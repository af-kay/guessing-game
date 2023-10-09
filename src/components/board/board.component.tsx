import styled from 'styled-components';

export const Board = ({ children }: Required<React.PropsWithChildren>) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 100%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
`;
