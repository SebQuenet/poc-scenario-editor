import React from 'react';

import { Link } from 'react-router-dom';

import {
  MenuItem,
} from 'react-materialize';

const BreadcrumbContent = (props) => {
  const { pathname, areas } = props;

  const bcc = [
    (<MenuItem key={'world'}><Link to={'/world'}>Monde</Link></MenuItem>),
  ];
  const areaUrl = pathname.match(/areas\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/);
  const placeUrl = pathname.match(/areas\/(.*)\/places\/(.*)/);

  if (areaUrl && areas[areaUrl[1]]) {
    bcc.push(<MenuItem key={'area'}> > <Link to={`/areas/${areaUrl[1]}`}>{areas[areaUrl[1]].name}</Link></MenuItem>);
  }
  if (placeUrl && areas[placeUrl[1]]) {
    bcc.push(<MenuItem key={'place'}> > <Link to={`/areas/${placeUrl[1]}/places/${placeUrl[2]}`}>{areas[placeUrl[1]].places[placeUrl[2]].name}</Link></MenuItem>);
  }
  return bcc;
};

export default BreadcrumbContent;