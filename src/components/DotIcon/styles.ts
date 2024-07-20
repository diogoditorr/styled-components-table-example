import styled from 'styled-components';
import { DotIcon } from '.';

export interface IStylesColorProps {
  $color?: 'orange' | 'light-green' | 'green' | 'red' | 'neutral';
}

const colorStyle = {
  orange: '#F97316',
  'light-green': '#4ADE80',
  green: '#16A34A',
  red: '#F43F5E',
  neutral: '#A3A3A3',
};

export const ColoredDotIcon = styled(DotIcon)<IStylesColorProps>`
  width: 0.625rem;
  height: 0.625rem;

  fill: ${({ $color = 'orange' }) => colorStyle[$color]};
`;
