import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';

class ProducersPage extends Component {
  render() {
    const {
      translations,
    } = this.props;

    return (
      <div>
        {
          Object.entries(translations.authors).map((item) => {
            const [key, value] = item;
            return (
              <Button
                tag={Link}
                to={`/producers/${key}`}
                key={key}
                style={{ margin: '0 10px' }}
              >
                {value.lastName}
              </Button>
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { i18n } = state;
  return {
    translations: i18n.translations[i18n.locale],
  };
}

ProducersPage.propTypes = {
  translations: PropTypes.object,
};

export default connect(mapStateToProps)(ProducersPage);
