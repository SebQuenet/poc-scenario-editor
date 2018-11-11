import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { withRouter } from 'react-router';

import { actions } from '../../../features/factions';

import { Icon, Input, Table, Button } from 'react-materialize';

class FactionsTab extends Component {
  constructor(props) {
    super(props);
    const { location: { pathname } } = props;
    const areaId = pathname.match(/\/areas\/(.*)/)[1];
    this.state = {
      areaId,
      name: '',
      description: '',
    };
  }

  changeName = e => this.setState({ name: e.target.value });
  changeDescription = e => this.setState({ description: e.target.value });
  
  submitForm = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.upsertFactionForArea({name: this.state.name, description: this.state.description}, this.props.areaId);
  }

  renderLine (lineData) {
    return (
    <tr>
      <td>{lineData.name}</td>
      <td>{lineData.description}</td>
    </tr>)
  }
  render() {
    const nameColStyle = {
      width: '17em',
    };
    const cellStyle = {
      verticalAlign: 'top',
    };
    return (
      <>
        <Table>
          <thead>
            <tr>
              <th style={nameColStyle}>Nom</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.factions && this.props.factions.map(this.renderLine)}
          </tbody>
        </Table>
        <form onSubmit={this.submitForm}>
          <Table>
            <tr>
              <td style={{...cellStyle, ...nameColStyle}}><Input label="Nom" onChange={this.changeName} value={this.state.name} /></td>
              <td style={cellStyle}><Input label="Description" type="textarea" onChange={this.changeDescription} value={this.state.description} /></td>
            </tr>
          </Table>
              <Button waves='light'><Icon left>add</Icon>Nouvelle faction</Button>
        </form>
      </>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    areas: state.areas,
    factions: state.factions,
  }
}

const withConnect = connect(mapStateToProps, actions, null, {pure: false});

export default compose(
  withConnect,
  withRouter,
 )(FactionsTab);