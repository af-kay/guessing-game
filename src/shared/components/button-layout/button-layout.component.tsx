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

  backdrop-filter: blur(8px) brightness(0.95);

  ${p =>
    p.isLoading &&
    css`
      pointer-events: none;

      background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23565656' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
      animation: load 2s ease-in-out infinite;

      @keyframes load {
        50% {
          background-position: left 40px;
        }
      }
    `}
`;
