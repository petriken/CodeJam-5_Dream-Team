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
    const {
      dispatch,
      languages,
    } = this.props;

    return (
      <div>
        <Router history={history}>
          <div>
            <NavigationBar
              routes={routes}
              dispatch={dispatch}
              languages={languages}
            />
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
  languages: PropTypes.array,
};

function mapStateToProps(state) {
  const { i18n } = state;
  return {
    languages: Object.keys(i18n.translations),
  };
}

export default connect(mapStateToProps)(App);
