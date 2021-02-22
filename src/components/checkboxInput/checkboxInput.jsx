import React from 'react';
import styles from './checkboxInput.module.css';

const CheckboxInput = ({
  field, 
  form: { touched, errors }, 
  ...props
}) => {
  return(
    <div className={styles.checkout__terms__alerts}>
      <input {...field} {...props} />
    </div>
  )
}

export default CheckboxInput;