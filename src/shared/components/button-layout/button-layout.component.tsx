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
  border: 1px solid #ffffff22;
  font-size: 1.1rem;

  &:hover {
    filter: brightness(0.9);
  }

  backdrop-filter: blur(8px) brightness(.95);

  ${p =>
    p.isLoading &&
    css`
      pointer-events: none;
      background: #ffd38e36;
    `}
`;
