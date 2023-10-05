import styled, { css } from 'styled-components';

import { IIconCard } from './icon-card.types';
import { createClosedIcon, createFaIcon } from './icon-card.utils';

export const IconCard: React.FC<IIconCard> = ({
  iconName: icon,
  isClosed,
  animation,
  bgColor,
  iconColor,
  onClick,
}) => {
  const FaIcon = createFaIcon(icon);
  const ClosedIcon = createClosedIcon();

  return (
    <CardLayout onClick={onClick}>
      <CardInner isClosed={isClosed}>
        <CardFrontSide bgColor={bgColor}>
          <AnimationWrapper animation={animation}>
            <FaIcon size={70} color={iconColor} />
          </AnimationWrapper>
        </CardFrontSide>
        <CardBackSide bgColor={bgColor}>
          <ClosedIcon size={70} color={iconColor} />
        </CardBackSide>
      </CardInner>
    </CardLayout>
  );
};

const CardLayout = styled.div`
  min-width: 86px;
  min-height: 86px;
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
  background: transparent;
`;

const CardInner = styled.div<Pick<IIconCard, 'isClosed'>>`
  position: relative;
  width: 100%;
  height: 100%;

  ${p =>
    p.isClosed &&
    css`
      transform: rotateY(180deg);
    `}

  transition: transform 0.4s;
  transform-style: preserve-3d;
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

const CardSide = styled(CardLayout)<Pick<IIconCard, 'bgColor'>>`
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #ffffff22;

  background: ${p => p.bgColor};
`;

const CardFrontSide = styled(CardSide)``;

const CardBackSide = styled(CardSide)<Pick<IIconCard, 'bgColor'>>`
  transform: rotateY(180deg);
`;
