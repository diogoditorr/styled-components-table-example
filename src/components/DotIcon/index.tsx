import React from 'react';

export interface IDotIconProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
}

export function DotIcon({ width, height, fill, ...rest }: IDotIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill || '#000'}
      viewBox='0 0 10 10'
      {...rest}>
      <circle cx='5' cy='5' r='5'></circle>
    </svg>
  );
}
