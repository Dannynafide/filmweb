import React from 'react';
import {Link} from 'react-router-dom';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

import styles from './buttonForm.module.scss';

export const COLORS = {
  basic: 'basic',
  transparent: 'transparent',
  filmweb: 'filmweb',
  facebook: 'facebook',
};

export default function ButtonForm(props) {
  const {
    link,
    bold,
    className,
    children,
    startIcon,
    inactive,
    color,
    ...other
  } = {
    ...props,
  };

  // TouchRipple
  const rippleRef = React.useRef(null);
  const onRippleStart = (e) => {
    rippleRef.current.start(e);
  };
  const onRippleStop = (e) => {
    rippleRef.current.stop(e);
  };

  const buttonStyles = `
    ${styles.button}
    ${bold && styles.bold}
    ${inactive && styles.inactive}
    ${startIcon && styles.startIcon}
    ${color === COLORS.filmweb && styles.filmweb}
    ${color === COLORS.facebook && styles.facebook}
    ${color === COLORS.transparent && styles.transparent}
  `;

  let btn = (
    <button
      onMouseDown={onRippleStart}
      onMouseUp={onRippleStop}
      onMouseLeave={onRippleStop}
      type="button"
      className={`${buttonStyles} ${className}`}
      {...other}
    >
      <span className={styles.icon}>{startIcon}</span>
      {children}
      <TouchRipple ref={rippleRef} center={false} />
    </button>
  );

  if (link) {
    btn = (
      <Link to={link} className={styles.link}>
        {btn}
      </Link>
    );
  }

  return <div className={styles.wrapper}>{btn}</div>;
}
