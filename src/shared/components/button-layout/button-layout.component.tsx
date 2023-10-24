import styled, { css } from 'styled-components';

import { IButtonLayout } from './button-layout.types';

export const ButtonLayout = styled.button<IButtonLayout>`
  display: flex;
  gap: 8px;
  padding: 8px 32px;
  align-items: center;
  background: transparent;

  cursor: pointer;

  border-radius: 8px;
  border: 1px dashed #ffffff33;

  &:hover {
    filter: brightness(0.9);
  }

  ${p =>
    p.isLoading &&
    css`
      pointer-events: none;
      background: #ffd38e36;
    `}
`;
