import { FaCog } from 'react-icons/fa';
import styled from 'styled-components';

import { devProtectedFC } from '$shared/utils/dev-protected.utils';
import { ButtonLayout } from '$shared/components';

export const GuessingGameConfigureConfig = devProtectedFC(() => {
  return (
    <Layout>
      <ButtonLayout>
        Configure <FaCog />
      </ButtonLayout>
    </Layout>
  );
});

const Layout = styled.div``;
