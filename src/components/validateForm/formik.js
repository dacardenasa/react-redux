export function validateFirstName(value) {
  let error;
  if (!value) {
    error = 'Nombre Requerido!';
  } else if (value.length < 2) {
    error = 'Nombre Inválido!';
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(value)) {
    error = 'Nombre Inválido!'
  }
  return error;
}

export function validateLastName(value) {
  let error;
  if (!value) {
    error = 'Apellido Requerido!';
  } else if (value.length < 2) {
    error = 'Apellido Inválido!';
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(value)) {
    error = 'Apellido Inválido!'
  }
  return error;
}

export function validatePhone(value) {
  let error;
  if (!value) {
    error = 'Teléfono Requerido!';
  } else if (!/^(([0-9]{2})( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{7})$/gm.test(value)) {
    error = 'Teléfono Inválido';
  }
  return error;
}

export function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Correo electrónico requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

export function validatePassword(value) {
  let error;
  const uppercaseRegex = new RegExp('(?=.*[A-Z])');
  const specialCharacter = new RegExp('[^A-Za-z0-9]');
  if (!value) {
    error = 'Contraseña requerida';
  } else if (!uppercaseRegex.test(value)) {
    error = 'La contraseña debe tener como mínimo 1 caracter en Mayúscula';
  } else if (!specialCharacter.test(value)) {
    error = 'La contraseña debe tener como mínimo 1 caracter especial';
  }

  return error;
}

export function validateTerms(value) {
  let error;
  if (!value){
    error = 'Debe aceptar los terminos para continuar!'
  }
  return error;
}

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  terms: false,
  alerts: false,
}

export const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}