import { Button } from "./styles";

export const CTAButton = ({
  children,
  href,
  primary = false,
  secondary = false,
  ...props
}) => {
  return (
    <Button
      as="a"
      href={href}
      $primary={primary}
      $secondary={secondary}
      {...props}
    >
      {children}
    </Button>
  );
};