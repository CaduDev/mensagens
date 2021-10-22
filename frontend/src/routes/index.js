import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './routes';

import Message from '../pages/Message';
import MessageDetailsOrUpdate from '../pages/MessageDetailsOrUpdate';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Message} />
      <Route path="/details" exact component={MessageDetailsOrUpdate} />
      <Route path="/details/:id" component={MessageDetailsOrUpdate} />
    </Switch>
  );
}
