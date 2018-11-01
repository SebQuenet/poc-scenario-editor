import React, { Component } from 'react';
import { Tabs, Tab, InteractiveForceGraph, ForceGraphNode, ForceGraphArrowLink } from 'react-vis-force';
import { withRouter } from 'react-router';
import { Input, Modal, Button, Icon } from 'react-materialize';
import { connect } from 'react-redux'
import { compose } from 'ramda';
import uuid from 'uuid';

const whichColor = ({ hasSource, hasTarget }) => 
  hasSource && hasTarget ? 'blue' :
  hasSource && !hasTarget ? 'green': 
  !hasSource && hasTarget ? 'red' :
  'grey';

const renderGraph = (nodes, links) => nodes !== undefined && links !== undefined ? [
    Object.entries(nodes).map(([nodeId, node]) => {
      console.log(nodeId, node);
      return (<ForceGraphNode node={{ id: nodeId, label: node.label }} fill={whichColor(node)}></ForceGraphNode>)
    }) ,
    links.map(link => <ForceGraphArrowLink link={{ source: link.source, target: link.target }}></ForceGraphArrowLink>),
  ] :
  <div></div>;

const genColors = (nodes, links) => {
  // no target, no source => isolated grey
  // sources, no targets => green (starts)
  // targets, no sources => red (ends)
  // targets and sources => blue (middle)
  console.log(nodes);
  links.forEach((link) => {
    const { source, target } = link;
    nodes[source].hasSource=true;
    /* eslint-disable */
    nodes[source].nbSources ? nodes[source].nbSources += 1 : 1;
    console.log(target);
    nodes[target].hasTarget=true;
    nodes[target].nbTargets ? nodes[target].nbTargets += 1 : 1;
    /* eslint-enable */
  });
}

class Place extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pathname: props.location.pathname,
      currentLabel: 'text',
      currentType: 'text',
    }
    this.handleLabelChange = this.handleLabelChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }
    
  handleLabelChange(e) {
    this.setState({ currentLabel: e.target.value });
  }

  handleTypeChange(e) {
    this.setState({ currentType: e.target.value });
  }


  render() {
    const pathname = this.state.pathname;

    const [, areaId, placeId] = pathname.match(/\/areas\/(.*)\/places\/(.*)/);
    const placeData = this.props.areas[areaId].places[placeId];

    genColors(placeData.modules, placeData.moduleLinks);

    return (
      <div>
        <h2 style={{ marginLeft: '1rem' }}>{placeData.name}</h2>
        <InteractiveForceGraph
          zoom
          showLabels
          simulationOptions={{ height: 500, width: 840, animate: true, }}
          labelAttr="label"
          onSelectNode={(node) => console.log(node)}
          highlightDependencies
        >
          {renderGraph(placeData.modules, placeData.moduleLinks)}
        </InteractiveForceGraph>
        <Modal
          trigger={
            <Button waves='light'>
              <Icon left>add</Icon>
              Nouveau module
          </Button>
          }
          modalOptions={{
            complete: (data) => {
              placeData.modules[uuid.v4()] = {
                label: this.state.currentLabel,
                type: this.state.currentType,
              }
            }
          }}
        >
          <Input label='Label' value={this.state.currentLabel} onChange={this.handleLabelChange}></Input>
          <Input type='select' label='type' defaultValue={this.state.currentType} onChange={this.handleTypeChange}>
            <option value='text'>Texte</option>
            <option value='flashcards'>Flashcards</option>
            <option value='memory'>Memory</option>
            <option value='historicalevents'>Historical events</option>
          </Input>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    areas: state.areas,
  }
}

export default compose(
  connect(mapStateToProps, null, null, {pure: false}),
  withRouter,
)(Place)