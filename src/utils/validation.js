import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string().email('Niepoprawny adres email').required('Wymagany'),
  password: Yup.string()
    .required('Nie podano hasła.')
    .min(8, 'Hasło jest za krótkie - powinno mieć minimum 8 znaków.')
    .matches(/[a-zA-Z]/, 'Hasło może zawierać tylko litery łacińskie.'),
  // .minLowercase(1, 'password must contain at least 1 lower case letter')
  // .minUppercase(1, 'password must contain at least 1 upper case letter')
  // .minNumbers(1, 'password must contain at least 1 number')
  // .minSymbols(1, 'password must contain at least 1 special character'),
  nick: Yup.string().min(
    4,
    'Hasło jest za krótkie - powinno mieć minimum 4 znaki.'
  ),
});

export const validationNick = Yup.object({
  nick: Yup.string().min(
    4,
    'Hasło jest za krótkie - powinno mieć minimum 4 znaki.'
  ),
});
