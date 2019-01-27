import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Col,
  Row,
  CardDeck,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import ProducerCard from '../components/ProducerCard';

class SearchProducers extends Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return <Form>

        <FormGroup>
          <Label for="SearchProducer">
            Введите имя или город в котором родился режиссер:
          </Label>
          <Input value={this.state.value} onChange={this.handleChange} type="search" name="search" id="SearchProducer" placeholder="Producer's name or birth place " />
        </FormGroup>
        <Button style={{ margin: '10px 0' }
          }
          >
          Search
        </Button>
      </Form>;
  }
}

class ProducersPage extends Component {
  render() {
    const { translations } = this.props;

    return (
      <Fragment>
        <Row>
          <Col xs="12" sm="8" lg="6">
            <SearchProducers />
          </Col>
        </Row>
        <CardDeck>
          {Object.entries(translations.authors).map((item) => {
            const [key, value] = item;
            return (
              <Col xs="12" sm="6" lg="4" key={key} style={{ marginTop: '5%' }}>
                <ProducerCard
                  tag={Link}
                  to={`/producers/${key}`}
                  name={value.about.name}
                  briefInfo={value.about.briefInfo}
                  birthPlace={value.about.birthPlace}
                  birthPlaceTitle="Место рождения:"
                  producerPhotoUrl={value.about.mainPhotoUrl}
                  buttonName="Перейти на страницу режиссера"
                />
              </Col>
            );
          })}
        </CardDeck>
      </Fragment>
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
