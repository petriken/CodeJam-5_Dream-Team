import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import ProducerCard from '../components/ProducerCard';
import SearchProducers from '../components/SearchProducers';

import directorFileter from '../utils/directorsFilter';

class ProducersPage extends Component {
  constructor(props) {
    super(props);
    const { authors } = props.translations;

    this.savedDirectors = authors;
    this.state = {
      directors: authors,
    };
    console.log(this.state.directors);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchValue) {
    const newDirectors = directorFileter(this.savedDirectors, searchValue);
    this.setState({ directors: newDirectors });
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="8" lg="6">
            <SearchProducers onClickSearch={this.handleSearch} />
          </Col>
        </Row>
        <Row>
          {
            Object.entries(this.state.directors).map((director) => {
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
                <Col xs="12" sm="6" lg="4" key={directorKey} style={{ marginTop: '5%' }}>
                  <ProducerCard
                    tag={Link}
                    to={`/producers/${directorKey}`}
                    name={name}
                    briefInfo={briefInfo}
                    birthPlace={birthPlace}
                    birthPlaceTitle="Место рождения:"
                    producerPhotoUrl={mainPhotoUrl}
                    buttonName="Перейти на страницу режиссера"
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
