import React from 'react';
import { Formik, Form, Field } from 'formik';
import TextField, { Input } from '@material/react-text-field';

import '@material/react-text-field/dist/text-field.css';

function validateEmail(value) {
  let error;
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
}

export const FieldLevelValidationExample = () => {
  return(
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{display: 'flex', flexDirection: 'column', margin: '0 auto', width: '50%'}}>

          <Field name="email" validate={validateEmail}>
            {({field, form}) => (
              <TextField
                label='email'
                outlined
                style={{marginBottom: '5%'}}
              >
                <Input
                  name='email'
                  type='text'
                  value={field.value}
                  isValid={!errors.email}
                  onChange={e => {
                    form.setFieldValue('email', e.target.value);
                  }}
                />
              </TextField>
            )}
          </Field>
          {errors.email && touched.email && <div>{errors.email}</div>}
          
          <Field name="username" validate={validateUsername}>
            {({field, form}) => (
              <TextField
                label='username'
                outlined
                style={{marginBottom: '5%'}}
              >
                <Input
                  name='username'
                  type='text'
                  value={field.value}
                  isValid={!errors.username}
                  onChange={e => {
                    form.setFieldValue('username', e.target.value);
                  }}
                />
              </TextField>
            )}
          </Field>
          {errors.username && touched.username && <div>{errors.username}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)};