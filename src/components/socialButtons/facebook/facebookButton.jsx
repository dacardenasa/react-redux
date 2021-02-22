import React from 'react';
import ReactDOM from 'react-dom'
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log('hello');
}

const FacebookButton = () => {
  return(
  ReactDOM.createPortal(
    <div
      style={{
        width: '50%',
        margin: '0 auto'
      }}
    >
      <FacebookLogin
      appId="1088597931155576"
      autoLoad={false}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook} />
    </div>
    , document.getElementById('popups'))
  )
}

export default FacebookButton;
