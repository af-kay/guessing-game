import styled from 'styled-components';

import { IBooleanText } from './boolean-text.types';
import { getBooleanColor, getBooleanText } from './boolean-text.utils';

export const BooleanText: React.FC<IBooleanText> = ({ children: value }) => {
  const text = getBooleanText(value);
  const color = getBooleanColor(value);

  return <Text color={color}>{text}</Text>;
};

const Text = styled.span<{ color: string }>`
  color: ${p => p.color};
`;
