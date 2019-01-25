import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';

class HomePage extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
          <div>
            <Translate value="application.title" />
          </div>
          <div>
            <Translate value="application.text" />
          </div>
      </div>
    );
  }
}

export default HomePage;
