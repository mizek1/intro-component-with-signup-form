import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/form.less';

export default function SignupForm() {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name cannot be empty'),
    lastName: Yup.string().required('Last Name cannot be empty'),
    email: Yup.string()
      .email('Looks like this is not an email')
      .required('Email cannot be empty'),
    password: Yup.string().required('Password cannot be empty'),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={() => {}}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <div className="input-group">
              <Field
                className={errors.firstName && touched.firstName ? 'error' : ''}
                placeholder="First name"
                name="firstName"
                id="firstName"
              />
              <img
                style={{
                  display:
                    touched.firstName && errors.firstName ? 'block' : 'none',
                }}
                src="icon-error.svg"
              />
            </div>
            {touched.firstName && errors.firstName && (
              <span>{errors.firstName}</span>
            )}
          </div>
          <div>
            <div className="input-group">
              <Field
                className={errors.lastName && touched.lastName ? 'error' : ''}
                placeholder="Last name"
                name="lastName"
                id="lastName"
              />
              <img
                style={{
                  display:
                    touched.lastName && errors.lastName ? 'block' : 'none',
                }}
                src="icon-error.svg"
              />
            </div>
            {touched.lastName && errors.lastName && (
              <span>{errors.lastName}</span>
            )}
          </div>
          <div>
            <div className="input-group">
              <Field
                className={errors.email && touched.email ? 'error' : ''}
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
              />
              <img
                style={{
                  display: touched.email && errors.email ? 'block' : 'none',
                }}
                src="icon-error.svg"
              />
            </div>
            {touched.email && errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <div className="input-group">
              <Field
                className={errors.password && touched.password ? 'error' : ''}
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
              <img
                style={{
                  display:
                    touched.password && errors.password ? 'block' : 'none',
                }}
                src="icon-error.svg"
              />
            </div>
            {touched.password && errors.password && (
              <span>{errors.password}</span>
            )}
          </div>

          <button type="submit">Claim your free trial</button>
          <p>
            By clicking the button, you are agreeing to our{' '}
            <a href="#">Terms and Services</a>
          </p>
        </Form>
      )}
    </Formik>
  );
}
