import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  CardText,
  CardLink,
  CardTitle,
  Jumbotron,
  Container,
  Row,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

class HomePage extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const {
      translations,
    } = this.props;
    return (
      <div style={{ marginBottom: '20px' }}>
          <div>
            <Row>
              <Col sm="8" md="6" lg="6">
              <Jumbotron fluid style={{ backgroundColor: '#4fcac24d' }}>
              <Container fluid>
                <h1 className="display-6"><Translate value="intro.title" /></h1>
                <p className="lead"><Translate value="intro.text" /></p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#007bff69' }} href="/producers"><Translate value="intro.start"/></a>
                </p>
              </Container>
            </Jumbotron>
            </Col>
            <Col sm="8" md="6" lg="6">
            <h2><Translate value="intro.news"/></h2>
              <Card body>
              <Row>
                <Col sm="6" md="6">
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=318" alt="Card image cap" />
                </Col>
                <Col sm="6" md="6">
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Some quick example text to build on the card title.</CardText>
                </CardBody>
                </Col>
              </Row>
              </Card>
            </Col>
            </Row>
          </div>
          <h3><Translate value="intro.devs"/></h3>
          <Row>
            {
            Object.entries(translations.team).map((item) => {
              const [key, value] = item;
              return (
                <Col sm="6" md="6" lg="4" key={key}>
                  <Card body inverse style={{ backgroundColor: '#d6effc80', marginBottom: '20px' }}>
                    <div style={{ height: '320px', textAlign: 'center' }}>
                      <img height="100%" src={value.img} alt="Avatar photo of a team member" />
                    </div>
                    <CardBody>
                      <CardTitle style={{ color: '#010b15' }}>
                        <h4>
                          {value.name}
                        </h4>
                      </CardTitle>
                      <CardTitle style={{ color: '#010b15' }}>Github:
                        <CardLink href={`https://github.com/${value.github}`}
                          target="_blank"> {value.github}
                        </CardLink>
                      </CardTitle>
                      <CardTitle style={{ color: '#010b15' }}>Email:
                        <CardLink href={`mailto:${value.mail}`}> {value.mail}</CardLink>
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
