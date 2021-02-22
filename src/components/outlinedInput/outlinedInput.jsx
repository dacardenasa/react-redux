import React from 'react';
import styles from './outlinedInput.module.css'

const OutlinedInput = ({
  field, 
  form: { touched, errors }, 
  ...props
  }) => {
  const setDefaultClass = () => {
    if(!errors[field.name]
      && touched[field.name]) {
        return 'success'
    }
    if(errors[field.name]
      && touched[field.name]) {
        return 'error'
    }
  }
  return(
    <>
      <label className={styles.pure_material_textfield_outlined}>
        <input 
          placeholder=" "
          className={
            setDefaultClass() === 'success'
            ? styles.success
            : setDefaultClass() === 'error'
            ? styles.error
            : ''
          }
          {...field} 
          {...props} 
        />
        <span>{field.name}</span>
      </label>
    </>
  );
}

export default OutlinedInput;