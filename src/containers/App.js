import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';
import NavigationBar from '../components/NavigationBar';

import routes from '../routes';

const history = createBrowserHistory({
  basename: '/',
  forceRefresh: false,
  keyLength: 6,
});

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <NavigationBar routes={routes} dispatch={this.props.dispatch}/>
            <Container style={{ marginTop: '10px' }}>
              <Switch>
                {
                  routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  ))
                }
              </Switch>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
