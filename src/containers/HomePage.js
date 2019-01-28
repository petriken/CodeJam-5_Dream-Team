import React, { Component } from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardImg,
  CardLink,
  CardTitle,
  Row,
  Col,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProducerCard from '../components/ProducerCard';


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.randKey = HomePage.rand(this.props.translations.authors);
  }

  static rand(object) {
    const keys = Object.keys(object);
    const key = keys[Math.floor(keys.length * Math.random())];
    return key;
  }

  render() {
    const {
      translations,
    } = this.props;

    const { randKey } = this;
    const randCard = translations.authors[randKey];

    return (
      <div>
        <Row>
          <Col sm="12" md="7" lg="8">
            <Card style={{ backgroundColor: '#4fcac24d', textAlign: 'center' }}>
              <CardBody>
                <h1 className="display-6"><Translate value="intro.title" /></h1>
                <p className="lead">
                  <Translate value="intro.text" />
                </p>
                <img
                  width="100%"
                  height="100%"
                  src="https://www.wikihow.com/images/f/f7/Be-a-Film-Director-Step-16-Version-2.jpg"
                  style={{ maxHeight: '450px' }}
                  alt="Film director"/>
                <Button
                    block
                    tag={Link}
                    size="lg"
                    to="/producers"
                    className="lead mt-3"
                  >
                    <Translate value="intro.start"/>
                  </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="5" lg="4">
            <h2>
              <Translate value="intro.news"/>
            </h2>
            <ProducerCard
              to={`/producers/${randKey}`}
              name={randCard.about.name}
              briefInfo={randCard.about.briefInfo}
              birthPlace={randCard.about.birthPlace}
              birthPlaceTitle={I18n.t('directorsPage.birthPlaceTitle')}
              producerPhotoUrl={randCard.about.mainPhotoUrl}
              buttonName={I18n.t('directorsPage.buttonName')}
            />
          </Col>
          </Row>
          <h3 className="my-3">
            <Translate value="intro.devs"/>
          </h3>
          <Row>
            {
            Object.entries(translations.team).map((item) => {
              const [key, value] = item;
              return (
                <Col
                  key={key}
                  className="mb-3"
                  xs="12"
                  md="6"
                  lg="4"
                >
                  <Card
                    body
                    style={{ backgroundColor: '#d6effc80', height: '100%' }}
                  >
                    <CardImg
                      src={value.img}
                      alt={`Photo of ${value.name}`}
                      style={{ objectFit: 'cover' }}
                      width='100%'
                      height='320px'
                      top
                    />
                    <CardBody style={{ }}>
                      <CardTitle tag="h4">
                        {value.name}
                      </CardTitle>
                      <CardTitle>
                      <Row>
                          <Col style={{ flexBasis: 'auto' }}>
                            <span>Github:&nbsp;</span>
                          </Col>
                          <Col style={{ flexBasis: 'auto' }}>
                            <CardLink
                            href={`https://github.com/${value.github}`}
                            target="_blank"
                            >
                              {value.github}
                            </CardLink>
                          </Col>
                      </Row>
                      </CardTitle>
                      <CardTitle>
                        <Row>
                          <Col style={{ flexBasis: 'auto' }}>
                            <span>Email:&nbsp;</span>
                          </Col>
                          <Col style={{ flexBasis: 'auto' }}>
                            <CardLink
                              href={`mailto:${value.mail}`}
                            >
                              {value.mail}
                            </CardLink>
                          </Col>
                        </Row>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </div>
    );
  }
}

HomePage.propTypes = {
  translations: PropTypes.object,
};

function mapStateToProps(state) {
  const { i18n } = state;
  return {
    translations: i18n.translations[i18n.locale],
  };
}

export default connect(mapStateToProps)(HomePage);
