import React from 'react';

import { InteractiveForceGraph, ForceGraphNode, ForceGraphArrowLink } from 'react-vis-force';

const whichColor = ({ hasSource, hasTarget }) => 
  hasSource && hasTarget ? 'blue' :
  hasSource && !hasTarget ? 'green': 
  !hasSource && hasTarget ? 'red' :
  'grey';

const renderGraph = (nodes, /*links between areas*/) => nodes !== undefined /*&& links !== undefined*/ ? [
    Object.entries(nodes).map(([nodeId, node]) => {
      console.log(nodeId, node);
      return (<ForceGraphNode node={{ id: nodeId, label: node.name}} fill={whichColor(node)}></ForceGraphNode>)
    }) ,
  ] :
  <div></div>;

const GraphTab = ({areaData}) => [(
  <InteractiveForceGraph
    zoom
    showLabels
    simulationOptions={{ height: 500, width: 840, animate: true, }}
    labelAttr="label"
    onSelectNode={(node) => console.log(node)}
    highlightDependencies
  >
    {renderGraph(areaData.places, /* links between areas here */)}
  </InteractiveForceGraph>
)];

  export default GraphTab;