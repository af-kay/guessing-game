import styled from 'styled-components';

import {
  BOARD_BG,
  BOARD_FALLBACK_BG,
  BOARD_GAP,
  BOARD_PADDING,
} from './board.constants';
import { IBoard } from './board.types';

import { ICON_CARD_SIZE } from '$components/icon-card/icon-card.constants';

export const Board = ({ maxColumns, children }: IBoard) => {
  return <Layout maxColumns={maxColumns}>{children}</Layout>;
};

const Layout = styled.div<Pick<IBoard, 'maxColumns'>>`
  display: flex;
  max-width: ${p =>
    ICON_CARD_SIZE * p.maxColumns! +
    BOARD_GAP * (p!.maxColumns - 1) +
    BOARD_PADDING * 2}px;
  align: auto;
  flex-wrap: wrap;
  gap: ${BOARD_GAP}px;
  padding: ${BOARD_PADDING}px;
  border-radius: 8px;

  background: ${BOARD_FALLBACK_BG};
  background: ${BOARD_BG};
  outline: 2px solid #ffffff22;
`;
