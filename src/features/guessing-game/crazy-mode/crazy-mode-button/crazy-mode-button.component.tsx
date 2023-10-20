import styled from 'styled-components';

import { useCrazyMode } from '../crazy-mode.hook';

import { devProtectedFC } from '$shared/utils';

export const CrazyModeButton = devProtectedFC(() => {
  const { toggle, isEnabled } = useCrazyMode();

  return (
    <Button onClick={toggle}>
      {isEnabled ? '(CRAZY MODE) Please turn it off!' : 'Enable crazy mode'}
    </Button>
  );
});

const Button = styled.div`
  border-radius: 8px;
  border: 1px dashed gray;
  padding: 8px 32px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
