import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
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

    return (
      <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Comic Sans MS' }}>
        <section style={{ display: 'flex', padding: '6%' }}>
          <img src={translations[authorId].about.mainPhotoUrl} style={{ width: '35%', height: '35%' }} alt=""/>
          <ul style={{ listStyleType: 'square', marginTop: '5%', fontSize: '2vw' }}>
            <li>{translations[authorId].about.name}</li>
            <li>{translations[authorId].about.briefInfo}</li>
            <li><Translate value="intro.birthPlace" />: {translations[authorId].about.birthPlace}</li>
          </ul>
        </section>

        <section>
          <Timeline lineColor={'#cbcbcb'}>
            {(translations[authorId]).timeLine.map((authorItem, index) => (
                <TimelineItem
                  key={index}
                  dateText={authorItem.year.toString()}
                  dateInnerStyle={{ background: '#007bff' }}
                >
                  {authorItem.info.map((Item, ind) => (
                      <p key={ind}>{Item}</p>))}
                </TimelineItem>
            ))}
          </Timeline>
        </section>

        <section className="film-list-container" style={{ paddingLeft: '5%' }}>
          <span style={{ fontSize: '2vw' }}>
            <Translate value="intro.filmography" />
          </span>
          <ul style={{ listStyleType: 'square' }}>
          {(translations[authorId]).filmography.map((authorItem, index) => (
              <li key={index}>{authorItem.year}: {authorItem.titleMovie}</li>
          ))}
          </ul>
        </section>

        <section
          style={{
            padding: '0 10% 5% 10%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}>
          <span style={{ fontSize: '2vw' }}>
            <Translate value="intro.gallery" />
          </span>
          <PhotoGallery items={ translations[authorId].photo } />
        </section>

        <section style={{
          width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '5%',
        }}>
        <VideoOverlay id={translations[authorId].youtubeVideoId} buttonTitle=<Translate value="intro.video" />/>
        </section>

        <GeoWidget markers={ translations[authorId].geolocation.markers }
                   center={ translations[authorId].geolocation.center }/>

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
