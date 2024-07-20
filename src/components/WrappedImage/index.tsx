import classNames from "classnames";
import { ReactNode } from "react";

import defaultIcon from "../../assets/dog-icon.jpg";

import { Container, IStylesWrappedImageProps } from "./styles";

interface IWrappedImageRootProps extends IStylesWrappedImageProps {
  className?: string;
  children?: ReactNode;
}

const WrappedImageRoot = ({
  $rounded,
  $size,
  className,
  children,
}: IWrappedImageRootProps) => {
  return (
    <Container
      $rounded={$rounded}
      $size={$size}
      className={classNames("shrink-0", className)}
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
