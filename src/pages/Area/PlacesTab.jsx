import React from 'react';

import { Icon, Input, Table, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

import moment from 'moment';

const orderBy = 'name';

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

const PlacesTab = ({areaId, areaData}) => [(
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
        .entries(areaData.places)
        .sort((a, b) => a[1][orderBy] < b[1][orderBy])
        .map(([placeId, place]) => renderPlace(areaId, placeId, place))}
    </tbody>
  </Table>
), (<Button waves='light'><Icon left>add</Icon>Nouveau lieu</Button>)];

export default PlacesTab;