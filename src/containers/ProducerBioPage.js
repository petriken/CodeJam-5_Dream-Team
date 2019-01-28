import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Translate, I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import {
  Col,
  Row,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

import PhotoGallery from '../components/PhotoGallery';
import GeoWidget from '../components/GeoWidget';
import VideoOverlay from '../components/VideoOverlay';

class ProducerBioPage extends Component {
  render() {
    const {
      translations,
      match,
    } = this.props;
    const authorId = match.params.id;
    const {
      about: {
        mainPhotoUrl,
        name,
        briefInfo,
        birthPlace,
      },
      timeLine,
      filmography,
      photo,
      geolocation,
      youtubeVideoId,
    } = translations[authorId];

    return (
      <Row className="mb-5">
        <Col xs="12">
          <Row>
            <Col xs="12" md="4">
              <img src={mainPhotoUrl} style={{ width: '100%', height: '350px', objectFit: 'cover' }} alt=""/>
            </Col>
            <Col xs="12" md="8">
              <h1 className="mb-3">{name}</h1>
              <ListGroup>
                <ListGroupItem>{briefInfo}</ListGroupItem>
                <ListGroupItem>
                  <Translate tag="b" value="intro.birthPlace" />: {birthPlace}
                </ListGroupItem>
                <ListGroupItem>
                  <VideoOverlay id={youtubeVideoId} buttonTitle={I18n.t('intro.video')}/>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Col>

        <Col xs="6">
          <Timeline lineColor={'#cbcbcb'}>
            {
              timeLine.map((authorItem, index) => (
                <TimelineItem
                  key={index}
                  dateText={authorItem.year.toString()}
                  dateInnerStyle={{ background: '#007bff' }}
                >
                  {authorItem.info.map((Item, ind) => (
                      <p key={ind}>{Item}</p>))}
                </TimelineItem>
              ))
            }
          </Timeline>
        </Col>

        <Col xs="6">
          <Translate tag="h2" value="intro.filmography" />
          <ul style={{ listStyleType: 'none' }}>
          {
            filmography.map((authorItem, index) => (
              <li key={index}><b>{authorItem.year}</b>: {authorItem.titleMovie}</li>
            ))
          }
          </ul>
        </Col>

        <Col xs="12">
          <Translate tag="h2" value="intro.gallery" />
          <Row>
            <Col xs="12" md="6">
              <PhotoGallery maxHeight="300px" items={ photo } />
            </Col>
            <Col xs="12" md="6">
              <GeoWidget markers={ geolocation.markers }center={ geolocation.center }/>
            </Col>
          </Row>


        </Col>
      </Row>

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
