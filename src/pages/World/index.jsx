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
        title={place.title}
        actions={[<Link to={`/areas/${placeKey}`}>Modifier</Link>]}
      >
        {place.description}
      </Card>
    </Col>
  )
);

const Place = ({areas}) => {
  return (
    <Row>
      <Col m={2} s={12}>
        <Card
          actions={'Ajouter une région'}
        >
        </Card>
      </Col>
      {[...generatePlaces(areas)]}
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    areas: state.areas,
  }
}

export default connect(mapStateToProps, null, null, { pure: false })(Place);