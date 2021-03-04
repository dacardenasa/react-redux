import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { FieldLevelValidationExample } from './components/results';
import SignupForm from './components/validateForm/validateForm';
import FieldLevelValidation from './components/fieldLevel';
import FacebookButton from './components/socialButtons/facebook/facebookButton';
import ImagesGallery from './components/imagesOptimization/imagesGallery';
import ImagesGalleryCloud from './components/imagesOptimization/imagesGalleryCloud';
import ImagesFileResizer from './components/imagesOptimization/imageFileResizer';
import ImageKit from './components/imagesOptimization/imageKit';

const Root = (
  <BrowserRouter>
    <Switch>
      <Route path="/results" component={FieldLevelValidationExample} />
      <Route path="/form" component={SignupForm} />
      <Route path="/level" component={FieldLevelValidation} />
      <Route path="/facebook" component={FacebookButton} />
      <Route path="/images" component={ImagesGallery} />
      <Route path="/imagesCloud" component={ImagesGalleryCloud} />
      <Route path="/imagesResizer" component={ImagesFileResizer} />
      <Route path="/imageKit" component={ImageKit} />
      <Redirect from="/" to="/imagesCloud" />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  Root,
  document.getElementById('root')
);
