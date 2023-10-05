import styled, { css } from 'styled-components';

import { CardState, IIconCard } from './icon-card.types';
import {
  createClosedIcon,
  createFaIcon,
  getIconStateColor,
} from './icon-card.utils';

export const IconCard: React.FC<IIconCard> = ({ icon, state, onClick }) => {
  const FaIcon = createFaIcon(icon);
  const ClosedIcon = createClosedIcon();

  return (
    <CardLayout state={state} onClick={onClick}>
      <CardInner state={state}>
        <CardFrontSide state={state}>
          <FaIcon size={80} color="black" />
        </CardFrontSide>
        <CardBackSide state={state}>
          <ClosedIcon size={80} color="black" />
        </CardBackSide>
      </CardInner>
    </CardLayout>
  );
};

const CardLayout = styled.div<{ state: CardState }>`
  min-width: 86px;
  min-height: 86px;
  border-radius: 8px;
  outline: 1px solid red;
  // padding: 24px;
  cursor: pointer;
  background: transparent;
`;

const CardInner = styled.div<{ state: CardState }>`
  position: relative;
  width: 100%;
  height: 100%;

  ${p =>
    p.state === CardState.CLOSED &&
    css`
      transform: rotateY(180deg);
    `}

  transition: transform 0.4s;
  transform-style: preserve-3d;
`;

const CardSide = styled(CardLayout)`
  position: absolute;
  backface-visibility: hidden;

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

const CardFrontSide = styled(CardSide)`
  background: ${p => getIconStateColor(p.state)};

  ${p =>
    p.state === CardState.GUESSED_WRONG &&
    css`
      animation: infinite shake 0.5s;
    `}
  ${p =>
    p.state === CardState.GUESSED &&
    css`
      animation: shake 0.2s;
    `}
`;

const CardBackSide = styled(CardSide)`
  background: ${p => getIconStateColor(p.state)};
  transform: rotateY(180deg);
`;
