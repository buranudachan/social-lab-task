import React from 'react';
import ReactDOM from 'react-dom';
import NextApp from './module/NextApp';
import { AppContainer } from 'react-hot-loader';
import * as serviceWorker from './serviceWorker';


const render = (Component: any) => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render once
render(NextApp);

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