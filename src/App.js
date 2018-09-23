import React, { Component } from 'react';
import {
  Navbar,
  NavItem, 
  Breadcrumb,
  MenuItem,
} from 'react-materialize';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Store from './myFakeStore';

import World from './world';
import Area from './area';
import Place from './place';

import './App.css';

const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

class App extends Component {
  render() {
    const { pathname } = this.props.location;
    const breadCrumbContent = () => {
      const bcc = [
        (<MenuItem><Link to={'/world'}>Monde</Link></MenuItem>),
      ];
      const areaUrl = pathname.match(/areas\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/);
      const placeUrl = pathname.match(/areas\/(.*)\/places\/(.*)/);
      if (areaUrl) {
        bcc.push(<MenuItem><Link to={`/areas/${areaUrl[1]}`}>{Store.areas[areaUrl[1]].title}</Link></MenuItem>);
      }
      if (placeUrl) {
        bcc.push(<MenuItem><Link to={`/areas/${placeUrl[1]}/places/${placeUrl[2]}`}>{Store.areas[placeUrl[1]].places[placeUrl[2]].name}</Link></MenuItem>);
      }
      return bcc;
    };

    return (
      <div>
        <Navbar brand='Panneau administrateur de Syllabo' right className='admin-title'>
          <NavItem onClick={() => console.log('Back to main menu')}>Se déconnecter</NavItem>
        </Navbar>
        <Breadcrumb className='admin-breadcrumb'>
          {breadCrumbContent()}
        </Breadcrumb>
        <Route
          exact={true}
          path={'/'}
          render={() => {
            return (<World store={Store}/>);
          }}
        />
        <Route
          exact={true}
          path={'/world'}
          render={() => {
            return (<World store={Store}/>);
          }}
        />
        <Route
          exact={true}
          path={'/areas/:areaId'}
          render={() => {
            return (<Area store={Store}/>);
          }}
        />
        <Route
          path={'/areas/:areaId/places/:placeId'}
          render={() => {
            return (<Place store={Store}/>);
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);
