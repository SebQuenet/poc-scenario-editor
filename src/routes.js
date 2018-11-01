import App from 'App';
import World from 'components/world';
import Area from 'components/area';
import Place from 'components/place';

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: World,
      },
      { path: '/world',
        exact: true,
        component: World,
      },
      { path: '/areas/:areaId',
        exact: true,
        component: Area,
      },
      { path: '/areas/:areaId/places/:placeId',
        component: Place,
      },
    ]
  }
];

export default routes;