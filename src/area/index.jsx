import React, { Component } from 'react';
import { Tabs, Tab, Icon, Row, Table, Input, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import moment from 'moment';

const orderBy = 'name'

const renderPlace = (areaId, placeId, placeData) => (
  <tr key={placeId}>
    <td><Input name='on' type='switch' value='1' /></td>
    <td><Icon>{placeData.icon}</Icon></td>
    <td>
      <Link to={`/areas/${areaId}/places/${placeId}`}>
        {placeData.name}
      </Link>
    </td>
    <td>{moment(placeData.lastUpdate).format("MMM Do YY")}</td>
  </tr>
);

const renderPlacesTab = (areaId, places) => [(
  <Table>
    <thead>
      <tr>
        <th>Actif</th>
        <th>Icone</th>
        <th>Nom</th>
        <th>Derniere modification</th>
      </tr>
    </thead>
    <tbody>
      {Object
        .entries(places)
        .sort((a,b) => a[1][orderBy] < b[1][orderBy])
        .map(([placeId, place]) => renderPlace(areaId, placeId, place))}
    </tbody>
  </Table>
),(<Button waves='light'><Icon left>add</Icon>Nouveau lieu</Button>)];

const Area = ({ store, location: {pathname} }) => {
  const areaId = pathname.match(/\/areas\/(.*)/)[1];
  const areaData = store.areas[areaId];
  
  return areaData ? (
    <Row>
      <h2 style={{marginLeft: '1rem'}}>{areaData.title}</h2>
      <Tabs className='z-depth-1 admin-breadcrumb'>
        <Tab title='General' style='color: white'>
        </Tab>
        <Tab title='PNJs' style='color: white'>
        </Tab>
        <Tab active title='Lieux' style='color: white'>
          {renderPlacesTab(areaId, areaData.places)}
        </Tab>
        <Tab title='Graph'>
        </Tab>
      </Tabs>
    </Row>
  ) : (<div></div>) ;
}

export default withRouter(Area);