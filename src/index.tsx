import React from 'react';
import ReactDOM from 'react-dom';
import NextApp from './module/NextApp';
import { AppContainer } from 'react-hot-loader';
import * as serviceWorker from './serviceWorker';

// Wrap the rendering in a function:
// tslint:disable-next-line no-any
const render = (Component: any) => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};
// Do this once
// register('/assets/scripts/registerServiceWorker.js');

// Render once
render(NextApp);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// tslint:disable-next-line no-any
declare let module: { hot: any };
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./module/NextApp', () => {
    render(NextApp);
  });
}