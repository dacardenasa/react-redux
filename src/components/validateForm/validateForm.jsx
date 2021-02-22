import React from "react";
import { Formik, Field, Form } from "formik";
import { 
  handleSubmit, 
  initialValues,
  validateFirstName,
  validateLastName,
  validatePhone,
  validateEmail,
  validatePassword,
  validateTerms, 
} from './formik';
import OutlinedInput from '../outlinedInput/outlinedInput';
import CheckboxInput from '../checkboxInput/checkboxInput';

const SignupForm = () => {
  return (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
  >
    {({errors, 
      touched,
      dirty,
      }) => 
      (
      <Form 
        style={
          {
            display: 'flex', 
            flexDirection: 'column', 
            margin: '0 auto', 
            width: '70%'
          }
        }
      >
        <Field name="firstName" validate={validateFirstName} component={OutlinedInput} />
        { touched.firstName && errors.firstName && <span style={{color: '#b00020'}}>{errors.firstName}</span> }
        
        <Field name="lastName" validate={validateLastName} component={OutlinedInput} />
        { touched.lastName && errors.lastName &&<span style={{color: '#b00020'}}>{errors.lastName}</span> }
        
        <Field name="phone" validate={validatePhone} component={OutlinedInput} />
        { errors.phone && touched.phone && <span style={{color: '#b00020'}}>{errors.phone}</span> }

        <Field name="email" validate={validateEmail} component={OutlinedInput} />
        { touched.email && errors.email && <span style={{color: '#b00020'}}>{errors.email}</span>}
        
        <Field name="password" validate={validatePassword} component={OutlinedInput} />
        { touched.password && errors.password && <span style={{color: '#b00020'}}>{errors.password}</span>}
        
        <div style={{display: 'flex', marginBottom: '3%'}}>
          <Field 
            name="terms"
            type="checkbox"
            validate={validateTerms} 
            component={CheckboxInput}
          />
          <label htmlFor="acceptTerms" style={{fontSize: '12px', marginLeft: '2%'}}>
            Acepto términos, condiciones y políticas de privacidad
          </label>
        </div>

        <div style={{display: 'flex'}}>
          <Field 
            name="alerts"
            type="checkbox"
            component={CheckboxInput}
          />
          <label htmlFor="acceptTerms" style={{fontSize: '12px', marginLeft: '2%'}}>
            Acepto recibir alertas en mi correo electrónico
          </label>
        </div>
        { touched.terms && errors.terms && <span style={{color: '#b00020', fontSize: '11px', textAlign: 'center'}}>{errors.terms}</span>}
        <button 
          type="submit" 
          style={{marginTop: '5%'}}
          disabled={!dirty}
        >
          Submit
        </button>
      </Form>
    )}
  </Formik>
)};

export default SignupForm;
