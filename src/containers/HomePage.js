import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';
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

class HomePage extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
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
          <Col sm="6" md="6" lg="4">
            <Card body text-center inverse style={{ backgroundColor: '#d6effc80', marginBottom: '20px' }}>
              <img width="100%" src="https://brateckrolikstudent.github.io/rsschool-codejam1-cv/images/avatar.jpg" alt="Avatar photo of a team member" />
              <CardBody>
                <CardTitle style={{ color: '#010b15' }}><h4><Translate value="team.member1.name"/></h4></CardTitle>
                <CardTitle style={{ color: '#010b15' }}>Github: <CardLink href="https://github.com/brateckrolikstudent" target="_blank">brateckrolikstudent</CardLink></CardTitle>
                <CardTitle style={{ color: '#010b15' }}>Email: <CardLink href="mailto:ibelieveinarabbit@gmail.com">ibelieveinarabbit@gmail.com</CardLink></CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="6" lg="4">
           <Card body inverse style={{ backgroundColor: '#d6effc80', marginBottom: '20px' }}>
              <img width="100%" src="https://anastasiyamazura.github.io/rsschool-codejam1-cv/img/Mazura_Anastasia.jpg" alt="Avatar photo of a team member" />
              <CardBody>
              <CardTitle style={{ color: '#010b15' }}><h4><Translate value="team.member2.name"/></h4></CardTitle>
              <CardTitle style={{ color: '#010b15' }}>Github: <CardLink href="https://github.com/AnastasiyaMazura" target="_blank">AnastasiyaMazura</CardLink></CardTitle>
              <CardTitle style={{ color: '#010b15' }}>Email: <CardLink href="mailto:mazura.anastasiya@gmail.com">mazura.anastasiya@gmail.com</CardLink></CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="6" lg="4">
           <Card body inverse style={{ backgroundColor: '#d6effc80', marginBottom: '20px' }}>
              <img width="100%" src="https://avatars2.githubusercontent.com/u/41955026?s=460&v=4" alt="Avatar photo of a team member" />
              <CardBody>
              <CardTitle style={{ color: '#010b15' }}><h4><Translate value="team.member3.name"/></h4></CardTitle>
              <CardTitle style={{ color: '#010b15' }}>Github: <CardLink href="https://github.com/dzianiskavalionak" target="_blank">dzianiskavalionak</CardLink></CardTitle>
              <CardTitle style={{ color: '#010b15' }}>Email: <CardLink href="mailto:nereidy4@gmail.com">nereidy4@gmail.com</CardLink></CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="6" lg="4">
           <Card body inverse style={{ backgroundColor: '#d6effc80', marginBottom: '20px' }}>
              <img width="100%" src="https://cdn.discordapp.com/attachments/537907151985704962/538789462943989773/photo.png" size="sm" alt="Avatar photo of a team member" />
              <CardBody>
              <CardTitle style={{ color: '#010b15' }}><h4><Translate value="team.member4.name"/></h4></CardTitle>
              <CardTitle style={{ color: '#010b15' }}>Github: <CardLink href="https://github.com/petriken" target="_blank">petriken</CardLink></CardTitle>
              <CardTitle style={{ color: '#010b15' }}>Email: <CardLink href="mailto:petriken82@gmail.com">petriken82@gmail.com</CardLink></CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="6" lg="4">
           <Card body inverse style={{ backgroundColor: '#d6effc80', marginBottom: '20px' }}>
              <img width="100%" src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/27973479_1736578996406233_261896360789868839_n.jpg?_nc_cat=107&_nc_ht=scontent-frx5-1.xx&oh=d49a9311ec8afaf37cb07a9ccec51f96&oe=5CB57C44"
              alt="Avatar photo of a team member" />
              <CardBody>
                <CardTitle style={{ color: '#010b15' }}><h4><Translate value="team.member5.name"/></h4></CardTitle>
                <CardTitle style={{ color: '#010b15' }}>Github: <CardLink href="https://github.com/yana-bashtyk" target="_blank">yana-bashtyk</CardLink></CardTitle>
                <CardTitle style={{ color: '#010b15' }}>Email: <CardLink href="mailto:yankabshtyk16@gmail.com">yankabshtyk16@gmail.com</CardLink></CardTitle>
              </CardBody>
            </Card>
          </Col>
          </Row>
      </div>
    );
  }
}

export default HomePage;
