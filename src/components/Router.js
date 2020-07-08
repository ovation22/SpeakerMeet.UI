import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import routes from '../constants/routes';
import Speakers from './Speakers';
import Communities from './Communities';
import Conferences from './Conferences';

function Router() {
  return (
    <Switch>
      <Route path={routes.root.path} exact component={Home} />
      <Route path={routes.speakers.path} exact component={Speakers} />
      <Route path={routes.communities.path} exact component={Communities} />
      <Route path={routes.conferences.path} exact component={Conferences} />
      {/* Render component given un-found route */}
      <Route component={Home} />
    </Switch>
  );
}

export default Router;
