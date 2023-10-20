import styled from 'styled-components';

import { BOARD_COLORS, BOARD_GAP, BOARD_PADDING } from './board.constants';
import { IBoard } from './board.types';
import { getBoardMaxWidth } from './board.utils';

export const Board = ({ maxColumns, children }: IBoard) => {
  return <Layout maxColumns={maxColumns}>{children}</Layout>;
};

const Layout = styled.div<Pick<IBoard, 'maxColumns'>>`
  display: flex;
  max-width: ${getBoardMaxWidth}px;
  align: auto;
  flex-wrap: wrap;
  gap: ${BOARD_GAP}px;
  padding: ${BOARD_PADDING}px;
  border-radius: 8px;

  background: ${BOARD_COLORS.BG};
  background: linear-gradient(to right, ${BOARD_COLORS.BG_GRADIENT.join(', ')});
  outline: 2px solid ${BOARD_COLORS.BORDER};
`;
