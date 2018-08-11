import React from 'react';
import ReactDOM from 'react-dom';

import 'babel-polyfill'
import { ParallaxProvider } from 'react-scroll-parallax';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ParallaxProvider>
        <App />
    </ParallaxProvider>, document.getElementById('root'));

registerServiceWorker();
