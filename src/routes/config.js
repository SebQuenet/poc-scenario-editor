import World from 'pages/World';
import Area from 'pages/Area';
import Place from 'pages/Place';

export default [
  { path: '/', exact: true, component: World },
  { path: '/world', exact: true, component: World },
  { path: '/areas/:areaId', component: Area },
  { path: '/areas/:areaId/places/:placeId', exact: true, component: Place },
];
