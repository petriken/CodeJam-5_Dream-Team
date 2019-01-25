import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProducerBioPage extends Component {
  render() {
    const {
      translations,
      match,
    } = this.props;
    const authorId = match.params.id;

    return (
      <div>
        {
          Object.entries(translations[authorId]).map((authorItem, index) => {
            const [, value] = authorItem;
            return (
              <div key={index}>
                {value}
              </div>
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
    translations: i18n.translations[i18n.locale].authors,
  };
}

ProducerBioPage.propTypes = {
  translations: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ProducerBioPage);
