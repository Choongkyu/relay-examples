import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import './index.css';
import RelayEnvironment from './RelayEnvironment';
import routes from './routes';
import { RoutingContext } from './routing/RoutingContext';
import createRouter from './routing/createRouter';
import RouterRenderer from './routing/RouteRenderer';

// Uses the custom router setup to define a router instanace that we can pass through context
const { context } = createRouter(routes, null);

ReactDOM.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <RoutingContext.Provider value={context}>
      {/* Render the active route */}
      <RouterRenderer />
    </RoutingContext.Provider>
  </RelayEnvironmentProvider>,
  document.getElementById('root'),
);
