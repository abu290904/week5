import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppColor from './AppColor';


ReactDOM.render(
  <React.StrictMode>
    <AppColor heading="Change Background Color to Green" label="Name:" color="green" />
    <AppColor heading="Change Background Color to Blue" label="Name:" color="blue" />
    <AppColor heading="Change Background Color to Yellow" label="Name:" color="yellow" />
  </React.StrictMode>,
  document.getElementById('root')
);
