import {useFormik} from 'formik';

import useAuth from 'context/useAuth';
import MainTemplate from 'template/MainTemplate/MainTemplate';
import AuthTemplate from 'template/AuthTemplate/AuthTemplate';
import InputForm from 'components/atoms/InputForm/InputForm';
import ButtonForm from 'components/atoms/ButtonForm/ButtonForm';
import {validationSchema} from 'utils/validation';

export default function LoginFormPage() {
  const {login, loading, error} = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => login(values.email, values.password),
  });

  return (
    <MainTemplate isAppBarSolidBackground>
      <AuthTemplate title="ZALOGUJ SIĘ KONTEM FILMWEB">
        <form onSubmit={formik.handleSubmit}>
          <InputForm
            label="Adres e-mail"
            name="email"
            type="email"
            formik={formik}
          />

          <InputForm
            label="Hasło"
            name="password"
            type="password"
            formik={formik}
          />

          {error && (
            <p style={{color: 'red', marginTop: '20px'}}>Błąd logowania.</p>
          )}

          <div style={{marginBottom: '50px'}} />

          <ButtonForm
            type="submit"
            disabled={loading || Object.keys(formik.errors).length > 0}
            bold={+true}
            color="filmweb"
          >
            Zaloguj się!
          </ButtonForm>

          <ButtonForm link="/register" bold={+true}>
            Formularz rejestracji
          </ButtonForm>

          <span style={{fontSize: '1.6rem'}}>lub</span>

          <ButtonForm>
            <s>Zmień sposób logowania</s>
          </ButtonForm>
        </form>
      </AuthTemplate>
    </MainTemplate>
  );
}
