import classNames from "classnames";
import { useCurrentTheme } from '../../contexts/theme.js';
import styles from "./styles.module.scss";
import { SIZES } from "../../constants/sizes.js";


export const Button = ({
  children,
  onClick,
  disabled,
  className,
  viewVariant = "primary",
  size = SIZES.m,
}) => {
 
  const {theme} = useCurrentTheme();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.root,
        styles[size],
        styles[viewVariant],
        className,
        {
          [styles.disabled]: disabled,
        }
      )}
    >
      {theme}
      {children}
    </button>
  );
};