import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import routes from '../constants/routes';
import Speakers from '../pages/Speakers';
import Communities from '../pages/Communities';
import Conferences from '../pages/Conferences';
import SpeakerDetail from '../pages/SpeakerDetail';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

function Router() {
  return (
    <Switch>
      <Route path={routes.root.path} exact component={Home} />
      <Route path={routes.speakers.path} exact component={Speakers} />
      <Route path={`${routes.speakers.path}/:slug?`} component={SpeakerDetail} />
      <Route path={routes.communities.path} exact component={Communities} />
      <Route path={routes.conferences.path} exact component={Conferences} />
      <Route path={routes.privacy.path} exact component={Privacy} />
      <Route path={routes.terms.path} exact component={Terms} />
      {/* Render component given un-found route */}
      <Route component={Home} />
    </Switch>
  );
}

export default Router;
