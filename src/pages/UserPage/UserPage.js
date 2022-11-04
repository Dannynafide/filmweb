import {useState, useEffect} from 'react';
import {useFormik} from 'formik';

import MainTemplate from 'template/MainTemplate/MainTemplate';
import useAuth from 'context/useAuth';
import {validationNick} from 'utils/validation';
import InputForm from 'components/atoms/InputForm/InputForm';
import ButtonForm from 'components/atoms/ButtonForm/ButtonForm';
import styles from './userPage.module.scss';

export default function UserPage() {
  const {
    user,
    loading,
    error,
    setError,
    updateProfile,
    updateEmail,
    updatePassword,
  } = useAuth();

  const [open, setOpen] = useState('');

  useEffect(() => {
    setError(null);
  }, [open]);

  const formikNick = useFormik({
    initialValues: {
      nick: '',
    },
    validationNick,
    onSubmit: (values) => {
      setError(null);
      updateProfile({displayName: values.nick});
    },
  });

  const formikEmail = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      setError(null);
      updateEmail(values.email);
    },
  });

  const formikPassword = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
    },
    onSubmit: (values) => {
      setError(null);
      updatePassword(values.oldPassword, values.newPassword);
    },
  });

  return (
    <MainTemplate isAppBarSolidBackground>
      <div className={styles.userPage}>
        <h1 className={styles.title}>Ustawienia</h1>
        <div className={styles.mainSettings__group}>
          <header className={styles.blockHeader}>
            <legend className={styles.blockHeader__title}>
              Dane logowania
            </legend>
          </header>

          {open !== 'nick' ? (
            <div className={styles.mainSettings__groupItem}>
              <div className={styles.mainSettings__groupItemHeader}>Nick</div>
              <div className={styles.mainSettings__groupItemStateContent}>
                {user.displayName || <span>Brak nicku </span>}
                <button type="button" onClick={() => setOpen('nick')}>
                  Zmień
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.mainSettings__form__wrapper}>
              <form
                onSubmit={formikNick.handleSubmit}
                className={styles.mainSettings__form}
              >
                <InputForm
                  label="Obecny nick"
                  name="currentNick"
                  type="text"
                  formik={formikNick}
                  value={user.displayName || ''}
                  disabled
                />

                <InputForm
                  label="Nowy nick"
                  name="nick"
                  type="text"
                  formik={formikNick}
                />

                {error && (
                  <p style={{color: 'red', marginTop: '20px'}}>
                    Wystąpił błąd.
                  </p>
                )}

                <ButtonForm
                  color="filmweb"
                  type="submit"
                  disabled={
                    loading || Object.keys(formikNick.errors).length > 0
                  }
                  bold={+true}
                >
                  {loading ? 'Ładowanie...' : 'Zapisz'}
                </ButtonForm>

                <ButtonForm
                  type="button"
                  onClick={() => setOpen('') || setError(null)}
                >
                  Anuluj
                </ButtonForm>
              </form>
            </div>
          )}

          {open !== 'email' ? (
            <div className={styles.mainSettings__groupItem}>
              <div className={styles.mainSettings__groupItemHeader}>E-mail</div>
              <div className={styles.mainSettings__groupItemStateContent}>
                {user.email}
                <button type="button" onClick={() => setOpen('email')}>
                  Zmień
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.mainSettings__form__wrapper}>
              <form
                onSubmit={formikEmail.handleSubmit}
                className={styles.mainSettings__form}
              >
                <InputForm
                  label="Obecny e-mail"
                  name="currentEmail"
                  type="email"
                  formik={formikEmail}
                  value={user.email || ''}
                  disabled
                />

                <InputForm
                  label="Nowy e-mail"
                  name="email"
                  type="email"
                  formik={formikEmail}
                />

                {error && (
                  <p style={{color: 'red', marginTop: '20px'}}>
                    Wystąpił błąd.
                  </p>
                )}

                <ButtonForm
                  color="filmweb"
                  type="submit"
                  disabled={
                    loading || Object.keys(formikEmail.errors).length > 0
                  }
                  bold={+true}
                >
                  {loading ? 'Ładowanie...' : 'Zapisz'}
                </ButtonForm>

                <ButtonForm
                  type="button"
                  onClick={() => setOpen('') || setError(null)}
                >
                  Anuluj
                </ButtonForm>
              </form>
            </div>
          )}

          {open !== 'password' ? (
            <div className={styles.mainSettings__groupItem}>
              <div className={styles.mainSettings__groupItemHeader}>
                Aktualne hasło
              </div>
              <div className={styles.mainSettings__groupItemStateContent}>
                ........
                <button type="button" onClick={() => setOpen('password')}>
                  Zmień
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.mainSettings__form__wrapper}>
              <form
                onSubmit={formikPassword.handleSubmit}
                className={styles.mainSettings__form}
              >
                <InputForm
                  label="Obecne hasło"
                  name="oldPassword"
                  type="password"
                  formik={formikPassword}
                />

                <InputForm
                  label="Nowe hasło"
                  name="newPassword"
                  type="password"
                  formik={formikPassword}
                />

                {error && (
                  <p style={{color: 'red', marginTop: '20px'}}>
                    Wystąpił błąd.
                  </p>
                )}

                <ButtonForm
                  color="filmweb"
                  type="submit"
                  disabled={
                    loading || Object.keys(formikPassword.errors).length > 0
                  }
                  bold={+true}
                >
                  {loading ? 'Ładowanie...' : 'Zapisz'}
                </ButtonForm>

                <ButtonForm
                  type="button"
                  onClick={() => setOpen('') || setError(null)}
                >
                  Anuluj
                </ButtonForm>
              </form>
            </div>
          )}
        </div>
      </div>
    </MainTemplate>
  );
}
