import styled from 'styled-components';

import { IBoard } from './board.types';

export const Board: React.FC<IBoard> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 100%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
`;
