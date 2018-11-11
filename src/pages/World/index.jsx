import React from 'react';
import { Col, Row, Card } from 'react-materialize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const generatePlaces = (areas) => Object
  .entries(areas)
  .map(([placeKey, place]) => (
    <Col m={2} s={12} key={placeKey}>
      <Card
        key={placeKey}
        title={place.name}
        actions={[<Link to={`/areas/${placeKey}`}>Modifier</Link>]}
      >
        <em>{place.date}</em>
        <p>{place.description}</p>
      </Card>
    </Col>
  )
);

const Place = ({areas}) => {
  return (
    <Row>
      <Col m={2} s={12}>
        <Card
          actions={[<Link to={`/areas/create`}>Ajouter une région</Link>]}
        >
        </Card>
      </Col>
      {[...generatePlaces(areas)]}
    </Row>
  );
}

const World = ({areas}) => {
  return (
    <>
      <h3>Régions</h3>
      <Place areas={areas} />
      <h3>Accomplissements</h3>
    </>
  );
}

const mapStateToProps = state => {
  return {
    areas: state.areas,
  }
}

export default connect(mapStateToProps, null, null, { pure: false })(World);