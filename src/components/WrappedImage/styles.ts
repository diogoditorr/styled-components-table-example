import styled from "styled-components";

export interface IStylesWrappedImageProps {
  $size?: "small" | "semi-small" | "medium" | "large";
  $rounded?: "xl" | "full";
}

const sizeStyles = {
  small: "width: 1.875rem; height: 1.875rem;",
  "semi-small": "width: 2.125rem; height: 2.125rem;",
  medium: "width: 2.5rem /* 40px */; height: 2.5rem /* 40px */;",
  large: "width: 4.5rem; height: 4.5rem;",
};

const roundedStyles = {
  xl: "border-radius: 0.75rem /* 12px */;",
  full: "border-radius: 9999px;",
};

export const Container = styled.div<IStylesWrappedImageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${({ $rounded = "xl" }) => roundedStyles[$rounded]}
  ${({ $size }) => $size && sizeStyles[$size]}
`;
