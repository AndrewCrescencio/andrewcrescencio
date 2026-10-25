import { Button } from "./styles";

export const CTAButton = ({
  children,
  href,
  variant = "primary",
  size = "md",
  ...props
}) => {
  return (
    <Button
      as="a"
      href={href}
      $variant={variant}
      $size={size}
      {...props}
    >
      {children}
    </Button>
  );
};