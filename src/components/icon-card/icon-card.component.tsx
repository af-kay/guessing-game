import styled, { css } from 'styled-components';

import { IIconCard } from './icon-card.types';
import { createClosedIcon, createFaIcon } from './icon-card.utils';
import { ICON_CARD_BORDER_RADIUS, ICON_CARD_SIZE } from './icon-card.constants';

export const IconCard: React.FC<IIconCard> = ({
  iconName: icon,
  isClosed,
  animation,
  bgColor,
  highlightColor,
  iconColor,
  onClick,
}) => {
  const FaIcon = createFaIcon(icon);
  const ClosedIcon = createClosedIcon();

  return (
    <CardLayout onClick={onClick}>
      <CardInner isClosed={isClosed}>
        <CardFrontSide bgColor={bgColor} highlightColor={highlightColor}>
          <AnimationWrapper animation={animation}>
            <FaIcon size={70} color={iconColor} />
          </AnimationWrapper>
        </CardFrontSide>
        <CardBackSide bgColor={bgColor} highlightColor={highlightColor}>
          <AnimationWrapper animation={animation}>
            <ClosedIcon size={70} color={iconColor} />
          </AnimationWrapper>
        </CardBackSide>
      </CardInner>
    </CardLayout>
  );
};

const CardLayout = styled.div`
  width: ${ICON_CARD_SIZE}px;
  height: ${ICON_CARD_SIZE}px;
  max-width: ${ICON_CARD_SIZE}px;
  max-height: ${ICON_CARD_SIZE}px;

  border-radius: ${ICON_CARD_BORDER_RADIUS}px;
  cursor: pointer;

  background: transparent;
`;

const CardInner = styled.div<Pick<IIconCard, 'isClosed'>>`
  position: relative;
  width: 100%;
  height: 100%;

  transition: transform 0.4s;
  transform-style: preserve-3d;

  ${p =>
    p.isClosed &&
    css`
      transform: rotateY(180deg);
    `}
`;

const AnimationWrapper = styled.span<Pick<IIconCard, 'animation'>>`
  ${p =>
    p.animation === 'shake' &&
    css`
      animation: shake 0.2s;
    `}
  ${p =>
    p.animation === 'infinite-shake' &&
    css`
      animation: infinite shake 0.5s;
    `}
  
  @keyframes shake {
    0% {
      transform: translate(1px, 1px);
    }
    10% {
      transform: translate(-1px, -2px);
    }
    20% {
      transform: translate(-3px, 0px);
    }
    30% {
      transform: translate(3px, 2px);
    }
    40% {
      transform: translate(1px, -1px);
    }
    50% {
      transform: translate(-1px, 2px);
    }
    60% {
      transform: translate(-3px, 1px);
    }
    70% {
      transform: translate(3px, 1px);
    }
    80% {
      transform: translate(-1px, -1px);
    }
    90% {
      transform: translate(1px, 2px);
    }
    100% {
      transform: translate(1px, -2px);
    }
  }
`;

const CardSide = styled(CardLayout)<
  Pick<IIconCard, 'bgColor' | 'highlightColor'>
>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #ffffff22;
  backface-visibility: hidden;

  background: ${p => p.bgColor};

  ${p =>
    p.highlightColor &&
    css`
      box-shadow: 0px 0px 6px 0 ${p.highlightColor};
      
    `}
`;

const CardFrontSide = styled(CardSide)``;

const CardBackSide = styled(CardSide)<Pick<IIconCard, 'bgColor'>>`
  transform: rotateY(180deg);

  outline: 1px dashed #44444488;
`;
