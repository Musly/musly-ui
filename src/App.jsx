import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Viewport } from './components/Viewport';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { AppController } from './components/AppController';
import { useUserIsLoggedIn } from './app/user.store';
import { useGroup } from './app/group.store';
import { AuthScreen } from './screens/AuthScreen';
import { CreateGroupScreen } from './screens/CreateGroupScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { SongsScreen } from './screens/SongsScreen';
import { GenresScreen } from './screens/GenresScreen';

export function App () {
  const isLoggedIn = useUserIsLoggedIn();
  const group = useGroup();

  return (
    <AppController>

      {!isLoggedIn && (
        <AuthScreen />
      )}

      {(isLoggedIn && !group) && (
        <CreateGroupScreen />
      )}

      {(isLoggedIn && group) && (
        <BrowserRouter>
          <Viewport>

            <Header />
            <Navigation />

            <Switch>

              <Route path="/" exact component={DashboardScreen} />
              <Route path="/songs" component={SongsScreen} />
              <Route path="/genres" component={GenresScreen} />
              <Route>
                Not found
              </Route>

            </Switch>
          </Viewport>
        </BrowserRouter>
      )}

    </AppController>
  );
}
