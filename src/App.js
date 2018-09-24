import React, { Component } from 'react';
import {
  Navbar,
  NavItem, 
  Breadcrumb,
} from 'react-materialize';
import { connect } from 'react-redux'
import { compose } from 'ramda';

import SyllaboBreadCrumb from './components/breadcrumb';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// import Store from './myFakeStore';

import World from './components/world';
import Area from './components/area';
import Place from './components/place';

import './App.css';

const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { pathname } = this.props.location;

    return (
      <div>
        <Navbar brand='Panneau administrateur de Syllabo' right className='admin-title'>
          <NavItem onClick={() => console.log('Back to main menu')}>Se déconnecter</NavItem>
        </Navbar>
        <Breadcrumb className='admin-breadcrumb'>
          {SyllaboBreadCrumb(pathname, this.props.areas)}
        </Breadcrumb>
        <Route
          exact={true}
          path={'/'}
          render={() => {
            return (<World/>);
          }}
        />
        <Route
          exact={true}
          path={'/world'}
          render={() => {
            return (<World/>);
          }}
        />
        <Route
          exact={true}
          path={'/areas/:areaId'}
          render={() => {
            return (<Area/>);
          }}
        />
        <Route
          path={'/areas/:areaId/places/:placeId'}
          render={() => {
            return (<Place/>);
          }}
        />
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
  connect(mapStateToProps, null, null, { pure: false }),
  withRouter,
 )(App);
