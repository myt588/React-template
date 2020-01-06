import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Auth0Provider } from './Auth0';
import App from './App';
import history from './utils/history';

const onRedirectCallback = (appState: any) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

const render = () => {
  ReactDOM.render(
    <Auth0Provider
      domain={process.env.DOMAIN || ''}
      client_id={process.env.CLIENT_ID || ''}
      audience={process.env.AUTH0_AUDIENCE || ''}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>,
    document.getElementById('app')
  );
};

render();
