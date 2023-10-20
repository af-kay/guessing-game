import { BOARD_GAP, BOARD_PADDING } from './board.constants';
import { IBoard } from './board.types';

import { ICON_CARD_SIZE } from '$shared/components/icon-card/icon-card.constants';

export const getBoardMaxWidth = ({
  maxColumns,
}: Pick<IBoard, 'maxColumns'>) => {
  const cardsWidth = ICON_CARD_SIZE * maxColumns;
  const cardsGap = BOARD_GAP * (maxColumns - 1);
  const padding = BOARD_PADDING * 2;

  return cardsWidth + cardsGap + padding;
};
