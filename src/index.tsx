import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Raven from 'raven-js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

Raven.config('https://cb2300578be9410ea0f3d99fcdfcce29@sentry.io/1277072', {
  release: 'test version1.0'
}).install();
ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
