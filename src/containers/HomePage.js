import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardImg,
  CardLink,
  CardTitle,
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProducerCard from '../components/ProducerCard';


class HomePage extends Component {
  constructor(props) {
    super(props);

    [this.randKey, this.randCard] = HomePage.rand(this.props.translations.authors);
  }

  static rand(object) {
      const keys = Object.keys(object);
      const key = keys[Math.floor(keys.length * Math.random())];
      const values = object[key];
      return [
        key,
        values,
      ];
    }  

  render() {
    const {
      translations,
    } = this.props;

    const randKey = this.randKey;
    const randCard = this.randCard;

    return (
      <div style={{ marginBottom: '20px' }}>
        <Row>
          <Col sm="8" md="6" lg="6">
            <Jumbotron fluid style={{ backgroundColor: '#4fcac24d', height: '645px', textAlign: 'center' }}>
              <Container fluid>
                <h1 className="display-6"><Translate value="intro.title" /></h1>
                <p className="lead" style={{ height: '100%' }}>
                  <Translate value="intro.text" />
                  <img width="90%" height="90%" src="https://www.wikihow.com/images/f/f7/Be-a-Film-Director-Step-16-Version-2.jpg" alt="Film director"/>
                </p>
                <p className="lead">
                  <Button
                    block
                    tag={Link}
                    size="lg"
                    to="/producers"
                  >
                    <Translate value="intro.start"/>
                  </Button>
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col sm="8" md="6" lg="6">
            <h2>
              <Translate value="intro.news"/>
            </h2>
            <ProducerCard
              tag={Link}
              to={`/producers/${randKey}`}
              name={randCard.about.name}
              briefInfo={randCard.about.briefInfo}
              birthPlace={randCard.about.birthPlace}
              birthPlaceTitle="Место рождения:"
              producerPhotoUrl={randCard.about.mainPhotoUrl}
              buttonName="Перейти на страницу режиссера"
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
                  sm="8"
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
                        <span>Github:&nbsp;</span>
                        <CardLink
                          href={`https://github.com/${value.github}`}
                          target="_blank"
                        >
                          {value.github}
                        </CardLink>
                      </CardTitle>
                      <CardTitle>
                        <span>Email:&nbsp;</span>
                        <CardLink href={`mailto:${value.mail}`}>{value.mail}</CardLink>
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
