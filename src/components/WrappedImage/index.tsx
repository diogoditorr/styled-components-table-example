import { CSSProperties, ReactNode } from "react";

import defaultIcon from "../../assets/dog-icon.jpg";

import { Container, IStylesWrappedImageProps } from "./styles";

interface IWrappedImageRootProps extends IStylesWrappedImageProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const WrappedImageRoot = ({
  $rounded,
  $size,
  className,
  children,
  style,
}: IWrappedImageRootProps) => {
  return (
    <Container
      $rounded={$rounded}
      $size={$size}
      className={className}
      style={{ flexShrink: 0, ...style }}
    >
      {children}
    </Container>
  );
};

interface IWrappedImageImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const WrappedImageImage = ({
  src,
  style,
  ...rest
}: IWrappedImageImageProps) => {
  return (
    <img
      src={src || defaultIcon}
      style={{ height: "100%", width: "100%", objectFit: "cover", ...style }}
      {...rest}
    />
  );
};

export const WrappedImage = Object.assign(WrappedImageRoot, {
  Image: WrappedImageImage,
});
