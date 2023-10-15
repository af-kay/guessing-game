import styled from 'styled-components';

import { BOARD_BG, BOARD_FALLBACK_BG } from './board.constants';

export const Board = ({ children }: Required<React.PropsWithChildren>) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  max-width: 440px;
  align: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;

  background: ${BOARD_FALLBACK_BG};
  background: ${BOARD_BG};
  outline: 2px solid #ffffff22;

  > * {
    flex: 1 0 22%; // 4 items per row
  }
`;
