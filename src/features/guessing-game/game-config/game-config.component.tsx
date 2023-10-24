import { styled } from 'styled-components';

import { IGameConfigMenu } from './game-config.types';
import { GuessingGameConfigureConfig } from './config-configure';

export const GameConfigMenu: React.FC<IGameConfigMenu> = ({
  additionalButtons = [],
}) => {
  return (
    <Layout>
      <GuessingGameConfigureConfig />
      {additionalButtons}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 8px;
`;
