import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon, Input, Table, Button } from 'react-materialize';

import * as actions from 'features/npcs/actions';

const lineStyle = {
  cursor: 'pointer',
};

const newNPC = {
  id: undefined,
  name: '',
  age: '',
  biographie: '',
  faction: '',
}

class NPCsTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: undefined,
      name: '',
      age: '',
      biographie: '',
      factionId: '',
    };
  }

  changeName = e => this.setState({ name: e.target.value });
  changeAge = e => this.setState({ age: e.target.value });
  
  submitForm = e => {
    e.preventDefault();
    this.props.upsertNPC({
      _id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      biographie: this.state.biographie,
      factionId: this.state.factionId,
    });
  }

  editNPC = npc => {
    this.setState({
      id: npc._id,
      name: npc.name,
      age: npc.age,
      biographie: npc.biographie,
      factionId: npc.factionId,
    })
  }

  renderNPCLine = npc => {
    return (
      <tr style={lineStyle} onClick={e => this.editNPC(npc)}>
        <td>{npc.name}</td>
        <td>{npc.age}</td>
        <td>{npc.biographie}</td>
      </tr>
    );
  }

  renderFactionOption = faction => {
    return (<option value={faction._id}>{faction.name}</option>)
  }

  render() {
    return (
      <>
        <Table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Age</th>
              <th>Biographie</th>
              <th>Faction</th>
            </tr>
          </thead>
          <tbody>
            {this.props.NPCs && this.props.NPCs.map(this.renderNPCLine)}
            <tr style={lineStyle} onClick={e => this.editNPC(newNPC)}>
              <td colSpan={3}><em>&lt;Nouveau PNJ&gt;</em></td>
            </tr>
          </tbody>
        </Table>
        <form onSubmit={this.submitForm}>
          <Input s={6} label="Nom" onChange={this.changeName} value={this.state.name} />
          <Input s={6} label="Age" onChange={this.changeAge} value={this.state.age} />
          <Input s={12} label="Biographie" type="textarea" onChange={this.changebio} value={this.state.biographie} />
          <Input s={6} label="Faction" type="select" onChange={this.changefaction} value={this.state.faction}>{this.props.factions && this.props.factions.map(this.renderFactionOption)}</Input>
          <Button s={12} waves='light'><Icon left>add</Icon>{ this.state.id ? 'Modifier le PNJ' : 'Nouveau PNJ' }</Button>
        </form>
      </>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    areas: state.areas,
    NPCs: state.NPCs,
    factions: state.factions,
  }
}

export default connect(mapStateToProps, actions)(NPCsTab);