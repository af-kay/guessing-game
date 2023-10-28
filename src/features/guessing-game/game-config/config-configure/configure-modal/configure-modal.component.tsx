import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx';

import { IConfigureConfigModal } from './configure-modal.types';
import { ConfigureModalForm } from './configure-modal-form';

export const ConfigureConfigModal: React.FC<IConfigureConfigModal> = ({
  onCloseRequested,
}) => {
  return (
    <ModalLayout>
      <Layout>
        <Header>
          <h1>Game configuration</h1>
          <span onClick={onCloseRequested}>
            <RxCross2 />
          </span>
        </Header>
        <ConfigureModalForm />
      </Layout>
    </ModalLayout>
  );
};

const ModalLayout = styled.div`
  position: fixed;
  z-index: 6000;
  background: #2c2c2cf5;
  height: calc(100vh - 64px);
  width: calc(100vw - 64px);

  padding: 12px;
  border-radius: 12px;

  top: 32px;
`;

const Layout = styled.div`
  padding: 32px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1em;

  h1 {
    justify-self: center;
    width: 100%;
  }

  svg {
    cursor: pointer;
    font-size: 2em;
  }
`;
