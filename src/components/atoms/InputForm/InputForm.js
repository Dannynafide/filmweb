import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';

import styles from './inputForm.module.scss';

export default function MyFormTextInput(props) {
  const {formik, name} = {...props};
  const [error, setError] = useState(false);

  useEffect(() => {
    if (formik.touched[name] && formik.errors[name]) {
      setError(true);
    } else {
      setError(false);
    }
  }, [formik.touched[name], formik.errors[name]]);

  return (
    <div className={styles.wrapper}>
      <TextField
        error={error}
        variant="standard"
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className={styles.textInput}
        InputProps={{
          style: {fontSize: '1.6rem', padding: '2px'},
        }}
        InputLabelProps={{style: {fontSize: '1.6rem'}}}
        {...props}
      />

      {error ? <div className={styles.error}>{formik.errors[name]}</div> : null}
    </div>
  );
}
