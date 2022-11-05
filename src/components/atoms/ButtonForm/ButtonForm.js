import React from 'react';
import {Link} from 'react-router-dom';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

import styles from './buttonForm.module.scss';

export default function ButtonForm(props) {
  const {
    link,
    filmweb,
    facebook,
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

  const classs = `
    ${styles.button}
    ${bold && styles.bold}
    ${inactive && styles.inactive}
    ${startIcon && styles.button__startIcon}
    ${color === 'filmweb' && styles.filmweb}
    ${color === 'facebook' && styles.facebook}
    ${color === 'transparent' && styles.transparent}
  `;

  let btn = (
    <button
      onMouseDown={onRippleStart}
      onMouseUp={onRippleStop}
      onMouseLeave={onRippleStop}
      type="button"
      className={`${classs} ${className}`}
      {...other}
    >
      <span className={styles.startIcon}>{startIcon}</span>
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
