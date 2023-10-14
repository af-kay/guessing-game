import styled from 'styled-components';

export const Board = ({ children }: Required<React.PropsWithChildren>) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  max-width: 440px;
  align: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  background: #b993d6;
  background: linear-gradient(to right, #b993d6, #8ca6db); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  outline: 2px solid #ffffff22;

  padding: 16px;
  border-radius: 8px;

  > * {
    flex: 1 0 22%; // 4 items per row
  }
`;
