import styled, { css } from 'styled-components';
import { useState } from 'react';

import { IIconsChooser } from './icons-chooser.types';

import { CardIconName } from '$shared/components';
import { useGuessingGame } from '$features/guessing-game/guessing-game.provider.hook';
import { createIcon } from '$shared/components/icon-card/icon-card.utils';

const ALL_ICONS = Object.values(CardIconName);

export const IconsChooser: React.FC<IIconsChooser> = ({
  minEnabledIconsRequired,
}) => {
  const {
    config: { updateConfigWith: _todo, config },
  } = useGuessingGame();

  const [enabledIcons, setEnabledIcons] = useState(config.iconsToChooseFrom);

  const isIconEnabled = (icon: CardIconName) =>
    Boolean(enabledIcons.find(enabledIcon => enabledIcon === icon));

  const toggleIcon = (icon: CardIconName) => {
    if (isIconEnabled(icon)) {
      setEnabledIcons(prev =>
        prev.filter(existingIcon => existingIcon !== icon),
      );
    } else {
      setEnabledIcons(prev => [...prev, icon]);
    }
  };

  const isEnoughIcons = enabledIcons.length >= minEnabledIconsRequired;
  const iconsAmountToSelectToRemoveError =
    minEnabledIconsRequired - enabledIcons.length;

  return (
    <Layout isError={!isEnoughIcons}>
      <h1>Icons:</h1>
      <IconsLayout>
        {ALL_ICONS.map(icon => {
          const Icon = createIcon(icon);

          return (
            <IconWrapper
              isEnabled={isIconEnabled(icon)}
              onClick={() => toggleIcon(icon)}
            >
              <Icon />
            </IconWrapper>
          );
        })}
      </IconsLayout>
      {!isEnoughIcons && (
        <ErrorMessage>
          Not enough icons! Please select {iconsAmountToSelectToRemoveError}{' '}
          more
        </ErrorMessage>
      )}
    </Layout>
  );
};

const Layout = styled.div<{ isError: boolean }>`
  padding: 8px 16px;
  border-radius: 16px;

  ${p =>
    p.isError &&
    css`
      outline: 1px solid red;
    `}
`;

const IconsLayout = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;

  svg {
    font-size: 4em;
  }
`;

const IconWrapper = styled.span<{ isEnabled: boolean }>`
  cursor: pointer;
  border-radius: 4px;
  padding: 16px;

  color: ${p => (p.isEnabled ? 'lightgreen' : '')};

  ${p =>
    p.isEnabled &&
    css`
      outline: 1px solid lightgreen;
    `}
`;

const ErrorMessage = styled.p`
  color: red;
  text-decoration: underline;
  font-weight: 700;
`;
