import { useMemo } from "react";
import { ButtonProps } from "./types";
import StyleButton from "./style";

const Button: React.FC<ButtonProps> = ({
  children,
  styleType = "primary",
  size = "small",
  onClick,
  disabled = false,
  fullWidth = false,
  id,
  ...rest
}) => {
  const renderButton = useMemo(() => {
    return (
      <StyleButton
        styleType={styleType}
        size={size}
        onClick={onClick}
        disabled={disabled}
        fullWidth={fullWidth}
        {...rest}
      >
        {children}
      </StyleButton>
    );
  }, [children, styleType, size, onClick, disabled, id, rest]);
  return renderButton;
};

export default Button;
