import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setupConfig} from '@ionic/react'
setupConfig({
  swipeBackEnabled:true
});


ReactDOM.render(<App />, document.getElementById('root'));
