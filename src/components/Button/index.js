import React from 'react';
import Spinner from '../Spinner';
import { default as BaseIconButton } from '@mui/material/IconButton';
import styles from './button.module.scss';
import cn from 'classnames';

function Button({ onClick, children, disabled, loading, style, className, variant = 'contained', ...otherProps }) {
  const child = loading ? <Spinner /> : children;
  const isDisabled = loading || disabled;

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle = {
    ...(loading ? loadingStyle : style),
    color: '#fff',
    ...style,
  };

  return (
    <button
      {...otherProps}
      variant={variant}
      className={cn(className, styles.button)}
      style={buttonStyle}
      disabled={isDisabled}
      onClick={onClick}
    >
      {child}
    </button>
  );
}

const IconButton = ({ children }) => {
  return <BaseIconButton>{children}</BaseIconButton>;
};

export { IconButton };
export default Button;
