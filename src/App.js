import React, { Component } from 'react';
import {
  Navbar,
  NavItem, 
  Breadcrumb,
} from 'react-materialize';
import { connect } from 'react-redux'
import { compose } from 'ramda';

import { withRouter } from 'react-router';
import renderRoutes from './routes';

import BreadcrumbContent from 'components/BreadcrumbContent';

import { actions } from './features/areas';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchAreas();
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <div>
        <Navbar brand='Panneau administrateur de Syllabo' right className='admin-title'>
          <NavItem onClick={() => console.log('Back to main menu')}>Se déconnecter</NavItem>
        </Navbar>
        <Breadcrumb className='admin-breadcrumb'>
          <BreadcrumbContent pathname={pathname} areas={this.props.areas} />
        </Breadcrumb>
        {renderRoutes()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    areas: state.areas,
  }
};

export default compose(
  connect(mapStateToProps, actions , null, { pure: false }),
  withRouter,
 )(App);
