import React, { Component } from 'react';
import { Tabs, Tab, Icon, Row, Table, Input, Button } from 'react-materialize';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphArrowLink } from 'react-vis-force';
import { connect } from 'react-redux'
import { compose } from 'ramda';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import moment from 'moment';

import GeneralTab from './GeneralTab';
import PlacesTab from './PlacesTab';
import GraphTab from './GraphTab';

const Area = ({ areas, location: {pathname} }) => {
  const areaId = pathname.match(/\/areas\/(.*)/)[1];
  const areaData = areas[areaId];

  const styledTab = {
    color: 'white'
  };
  
  return areaData ? (
    <Row>
      <h2 style={{marginLeft: '1rem'}}>{areaData.title}</h2>
      <Tabs className='z-depth-1 admin-breadcrumb'>
        <Tab title='General' style={styledTab}>
          <GeneralTab areaId={areaId} areaData={areaData} />
        </Tab>
        <Tab title='PNJs' style={styledTab}>
        </Tab>
        <Tab active title='Lieux' style={styledTab}>
          <PlacesTab areaId={areaId} areaData={areaData} />
        </Tab>
        <Tab title='Graph'>
          <GraphTab areaData={areaData} />
        </Tab>
      </Tabs>
    </Row>
  ) : (<div></div>) ;
}

const mapStateToProps = state => {
  return {
    areas: state.areas,
  }
};

const withConnect = connect(mapStateToProps, null, null, {pure: false});

export default compose(
  withConnect,
  withRouter,
 )(Area);