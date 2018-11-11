import React, { Component } from 'react';
import { Tabs, Tab, Row } from 'react-materialize';
import { connect } from 'react-redux'
import { compose } from 'ramda';
import { withRouter } from 'react-router';

import GeneralTab from './GeneralTab';
import FactionsTab from './FactionsTab';
import GraphTab from './GraphTab';
import MapTab from './MapTab';
import NPCsTab from './NPCsTab/index.jsx';
import PlacesTab from './PlacesTab';
import { actions as currentAreaActions } from '../../features/currentArea';
import { actions as factionsActions } from '../../features/factions';
import { actions as NPCsActions } from '../../features/npcs';
import { bindActionCreators } from 'redux';

const styledTab = {
  color: 'white'
};

const renderAreaTabs = (areaId, areaData, isNewArea) => {
  const tabsToRender = [];
  tabsToRender.push(
    <Tab id="general" title="General" style={styledTab}>
      <GeneralTab active={ isNewArea ? true : false } areaId={isNewArea ? undefined : areaId} areaData={{}} />
    </Tab>
  );

  if (!isNewArea) {
    tabsToRender.push(
      <Tab id='factions' title='Factions' style={styledTab}>
        <FactionsTab areaId={areaId} />
      </Tab>);
    tabsToRender.push(
      <Tab id='pnjs' title='PNJs' style={styledTab}>
        <NPCsTab areaId={areaId} />
      </Tab>);
    tabsToRender.push(
      <Tab id='map' title='Carte' style={styledTab}>
        <MapTab />
      </Tab>);
    tabsToRender.push(
      <Tab id='places' active title='Lieux' style={styledTab}>
        <PlacesTab areaId={areaId} areaData={areaData} />
      </Tab>);
    tabsToRender.push(
      <Tab id='graph' title='Graph'>
        <GraphTab areaData={areaData} />
      </Tab>);
    tabsToRender.push(
      <Tab id='equipment' title='Équipement' style={styledTab}>
      </Tab>);
    tabsToRender.push(
      <Tab id='housing' title='Maison' style={styledTab}>
      </Tab>);
  }

  return (
    <Row>
      <h2 style={{marginLeft: '1rem'}}>{areaData ? areaData.title : 'Nouvelle région'}</h2>
      <Tabs className='z-depth-1 admin-breadcrumb'>
        {tabsToRender}
      </Tabs>
    </Row>
  );
}

class Area extends Component {
  constructor(props) {
    super(props);
    const { location: { pathname } } = props;
    const areaId = pathname.match(/\/areas\/(.*)/)[1];
    this.state = {
      areaId,
    }
  }

  componentDidMount() {
    this.props.fetchArea(this.state.areaId);
    this.props.fetchFactionsForArea(this.state.areaId);
    this.props.fetchNPCsForArea(this.state.areaId);
  }

  render() {
    const { areas, location: {pathname} } = this.props;
    const { areaId } = this.state;

    console.log(areaId);
    if (areaId === 'create') {
      return (renderAreaTabs(null, null, true));
    }

    const areaData = areas[areaId];

    return areaData ? renderAreaTabs(areaId, areaData) : (<div></div>);
  }
}

const mapStateToProps = state => {
  return {
    areas: state.areas,
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchArea: currentAreaActions.fetchArea,
    fetchFactionsForArea: factionsActions.fetchFactionsForArea,
    fetchNPCsForArea: NPCsActions.fetchNPCsForArea,
  }, dispatch);
}

const withConnect = connect(mapStateToProps, mapDispatchToProps, null, {pure: false});

export default compose(
  withConnect,
  withRouter,
 )(Area);