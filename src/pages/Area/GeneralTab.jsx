import React from 'react';
import { connect } from 'react-redux';

import { Icon, Input, Table, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

import moment from 'moment';

const orderBy = 'name';

const GeneralTab = ({areas, areaId, areaData}) => [(
  <>
    <h4> {areas[areaId].title} </h4>
    <h4> {areas[areaId].description} </h4>
  </>
)];

const mapStateToProps = (state) => {
  return {
    areas: state.areas,
  }
}

export default connect(mapStateToProps)(GeneralTab);