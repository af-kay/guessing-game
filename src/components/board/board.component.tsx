import styled from 'styled-components';

export const Board = ({ children }: Required<React.PropsWithChildren>) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  max-width: 620px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  > * {
    flex: 1 0 21%; // 4 items per row
  }
`;
