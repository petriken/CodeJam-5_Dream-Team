import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Translate, setLocale } from 'react-redux-i18n';
import PropTypes from 'prop-types';

import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Collapse,
  NavLink,
  NavbarToggler,
  Input,
} from 'reactstrap';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.dispatch = props.dispatch;
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleChange = (event) => {
    this.dispatch(setLocale(event.target.value));
  }

  render() {
    const {
      routes,
      languages,
    } = this.props;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">RSS-group 11</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {
              routes.map((route, index) => {
                if (route.translationId) {
                  return (
                    <NavItem key={index}>
                      <NavLink
                        tag={Link}
                        to={route.path}
                      >
                        <Translate value={`pages.${route.translationId}`} />
                      </NavLink>
                    </NavItem>
                  );
                }
                return '';
              })
            }
              <NavItem>
              <Input type="select" defaultValue='en' onChange={this.handleChange}>
                {
                  languages.map(lang => (
                    <option key={lang}>{lang}</option>
                  ))
                }
              </Input>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavigationBar.defaultProps = {
  lagnuages: [],
};

NavigationBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
  languages: PropTypes.array,
};

export default NavigationBar;
