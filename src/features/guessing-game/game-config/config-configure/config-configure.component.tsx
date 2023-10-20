import { FaCog } from 'react-icons/fa';
import styled from 'styled-components';

import { devProtectedFC } from '$shared/utils/dev-protected.utils';

export const GuessingGameConfigureConfig = devProtectedFC(() => {
  return (
    <Layout>
      <Text>
        Configure <FaCog />
      </Text>
    </Layout>
  );
});

const Layout = styled.div``;

const Text = styled.p`
  display: flex;
  gap: 8px;
  padding: 8px 32px;
  align-items: center;

  cursor: pointer;

  border-radius: 8px;
  border: 1px dashed #ffffff33;

  &:hover {
    filter: brightness(0.9);
  }
`;
