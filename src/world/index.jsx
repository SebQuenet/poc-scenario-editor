import React, { Component } from 'react';
import { Col, Row, Card, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const generatePlaces = (areas) => Object
  .entries(areas)
  .map(([placeKey, place]) => (
    <Col m={2} s={12}>
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

const Place = ({store}) => {
  return (
    <Row>
      <Col m={2} s={12}>
        <Card
          actions={'Ajouter une région'}
        >
        </Card>
      </Col>
      {[...generatePlaces(store.areas)]}
    </Row>
  );
}

export default Place;