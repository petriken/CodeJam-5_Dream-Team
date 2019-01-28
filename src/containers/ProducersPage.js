import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { I18n } from 'react-redux-i18n';

import ProducerCard from '../components/ProducerCard';
import SearchProducers from '../components/SearchProducers';

import directorFilter from '../utils/directorsFilter';

class ProducersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchValue) {
    this.setState({ searchValue });
  }

  render() {
    const {
      translations: {
        authors: directors,
      },
    } = this.props;

    return (
      <div>
        <Row>
          <Col xs="12">
            <SearchProducers onClickSearch={this.handleSearch} />
          </Col>
        </Row>
        <Row>
          {
            Object.entries(
              directorFilter(directors, this.state.searchValue),
            ).map((director) => {
              const [directorKey, directorData] = director;
              const { about } = directorData;
              if (!about) return '';

              const {
                name,
                briefInfo,
                birthPlace,
                mainPhotoUrl,
              } = about;
              if (!name) return '';

              return (
                <Col xs="12" sm="6" md="6" lg="4" key={directorKey} className="my-4">
                  <ProducerCard
                    tag={Link}
                    to={`/producers/${directorKey}`}
                    name={name}
                    briefInfo={briefInfo}
                    birthPlace={birthPlace}
                    birthPlaceTitle={I18n.t('directorsPage.birthPlaceTitle')}
                    producerPhotoUrl={mainPhotoUrl}
                    buttonName={I18n.t('directorsPage.buttonName')}
                  />
                </Col>
              );
            })
          }
        </Row>
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
