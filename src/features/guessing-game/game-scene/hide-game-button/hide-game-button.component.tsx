import styled from 'styled-components';
import { TbEye, TbEyeClosed } from 'react-icons/tb';

import { IHideGameButton } from './hide-game-button.types';

import { devProtectedFC } from '$shared/utils';

export const HideGameButton: React.FC<IHideGameButton> = devProtectedFC(
  ({ isGameHidden, onToggle }) => {
    const Icon = isGameHidden ? TbEyeClosed : TbEye;

    return (
      <Layout title="Hide/Show game" onClick={onToggle}>
        <Icon />
      </Layout>
    );
  },
);

const Layout = styled.div`
  position: absolute;
  z-index: 2000;
  font-size: 3rem;
  cursor: pointer;

  right: 32px;
  top: 32px;
  opacity: 0.2;

  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 1;
  }
`;
