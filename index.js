import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// import reset styles and icons
import 'material-design-icons';

import Application from 'Application';

const mountNode = document.getElementById('app');

const app = App => (
  <AppContainer>
    <App />
  </AppContainer>
);

render(
  app(Application),
  mountNode
);

if (__DEV__ && module.hot) {
  module.hot.accept('./Application', () => {
    const HotApplication = require('./Application').default; // eslint-disable-line

    render(
      app(HotApplication),
      mountNode
    );
  });
}
