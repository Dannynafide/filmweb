import {useFormik} from 'formik';

import useAuth from 'context/useAuth';
import {validationSchema} from 'utils/validation';
import MainTemplate from 'template/MainTemplate/MainTemplate';
import AuthTemplate from 'template/AuthTemplate/AuthTemplate';
import InputForm from 'components/atoms/InputForm/InputForm';
import ButtonForm from 'components/atoms/ButtonForm/ButtonForm';

export default function SignUpPage() {
  const {signUp, loading, error} = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => signUp(values.email, values.password),
  });

  return (
    <MainTemplate isAppBarSolidBackground>
      <AuthTemplate title="ZAŁÓŻ KONTO W DWÓCH PROSTYCH KROKACH">
        <form onSubmit={formik.handleSubmit}>
          {/* <MyTextInput label="Name" name="name" type="name" formik={formik} /> */}

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

          {error && <p style={{color: 'red'}}>Błąd rejestracji.</p>}

          <div style={{marginBottom: '50px'}} />

          <ButtonForm
            filmweb={+true}
            type="submit"
            disabled={loading || Object.keys(formik.errors).length > 0}
            bold={+true}
          >
            Zarejestruj się!
          </ButtonForm>

          <ButtonForm link="/login" bold={+true}>
            Formularz logowania
          </ButtonForm>

          <span style={{fontSize: '1.6rem'}}>lub</span>

          <ButtonForm>
            <s>Zmień sposób rejestracji</s>
          </ButtonForm>
        </form>
      </AuthTemplate>
    </MainTemplate>
  );
}
