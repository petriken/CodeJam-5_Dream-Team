import React, { Component } from 'react';
import {
  Label,
  Input,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Translate, I18n } from 'react-redux-i18n';

class SearchDirectors extends Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    this.props.onClickSearch(this.state.value);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <Label for="SearchDirector">
          <Translate value="directorsPage.search.label" />
        </Label>
        <Input
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          id="SearchDirector"
          placeholder={I18n.t('directorsPage.search.placeholder')}
        />
        <Button onClick={this.handleClick} className="mt-3">
          <Translate value="directorsPage.search.button" />
        </Button>
      </div>
    );
  }
}

SearchDirectors.propTypes = {
  onClickSearch: PropTypes.func.isRequired,
};

export default SearchDirectors;
