import TextField from '@mui/material/TextField';

import styles from './inputForm.module.scss';

export default function InputForm(props) {
  const {formik, name} = {...props};
  const error = formik.touched[name] && formik.errors[name];

  return (
    <div className={styles.wrapper}>
      <TextField
        variant="standard"
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className={styles.input}
        error={error}
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
