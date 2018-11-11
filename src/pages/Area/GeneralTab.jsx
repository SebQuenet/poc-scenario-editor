import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Button } from 'react-materialize';

import * as actions from 'features/areas/actions';

class GeneralTab extends Component {
  constructor(props) {
    super(props);

    const areaData = this.props.areas[this.props.areaId];

    this.state = areaData ? {
      name: areaData.name,
      description: areaData.description,
      date: areaData.date,
      place: areaData.place,
      isNew: false,
    } : {
      name: '',
      description: '',
      date: '',
      place: '',
      isNew: true,
    };
  }

  changeName = e => this.setState({ name: e.target.value });
  changeDescription = e => this.setState({ description: e.target.value });
  changeDate = e => this.setState({ date: e.target.value });
  changePlace = e => this.setState({ place: e.target.value });
  
  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
    const {name, description, date, place} = this.state;
    const {areaId} = this.props;
    this.props.addArea({areaId, name, description, date, place});
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <Input placeholder="Nom" s={12} label="Nom" value={this.state.name} onChange={this.changeName} />
        <Input type="textarea" s={12} label="Description" value={this.state.description} onChange={this.changeDescription} />
        <Input placeholder="Date" s={6} label="Date" value={this.state.date} onChange={this.changeDate} />
        <Input placeholder="Lieu" s={6} label="Lieu" value={this.state.place} onChange={this.changePlace} />
        <Button waves='light'>{this.state.isNew ? 'Ajouter': 'Modifier'}</Button>
      </form>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    areas: state.areas,
  }
}

export default connect(mapStateToProps, actions)(GeneralTab);