import styled, { css } from 'styled-components';

import { BOARD_COLORS, BOARD_GAP, BOARD_PADDING } from './board.constants';
import { IBoard } from './board.types';
import { getBoardMaxWidth } from './board.utils';

export const Board = ({ maxColumns, children, colors }: IBoard) => {
  return (
    <Layout maxColumns={maxColumns} colors={colors}>
      {children}
    </Layout>
  );
};

const Layout = styled.div<Pick<IBoard, 'maxColumns' | 'colors'>>`
  display: flex;
  max-width: ${getBoardMaxWidth}px;
  align: auto;
  flex-wrap: wrap;
  gap: ${BOARD_GAP}px;
  padding: ${BOARD_PADDING}px;
  border-radius: 8px;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.4);

  outline: 2px solid ${BOARD_COLORS.BORDER};

  background: ${BOARD_COLORS.BG};
  background: linear-gradient(to right, ${BOARD_COLORS.BG_GRADIENT.join(', ')});

  ${p =>
    p.colors?.BG &&
    css`
      ${typeof p.colors.BG === 'string' && `background: ${p.colors.BG};`}

      ${Array.isArray(p.colors.BG) &&
      `background: linear-gradient(
      to right, ${p.colors.BG.join(', ')}
    );`}
    `}
`;
