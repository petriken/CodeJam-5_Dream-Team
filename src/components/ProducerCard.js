import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

const ProducerCard = ({
  name,
  producerPhotoUrl,
  to,
  tag,
  buttonName,
  briefInfo,
  birthPlace,
  birthPlaceTitle,
}) => (
  <div>
    <Card style={{ margin: '0', height: '600px', position: 'relative' }}>
      <CardImg
        top
        height="300px"
        style={{ objectFit: 'cover' }}
        src={producerPhotoUrl}
        alt={name}
      />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>
          {birthPlaceTitle}: {birthPlace}
        </CardText>
        <CardText style={{ height: '100px', overflow: 'hidden' }}>
          {briefInfo}
        </CardText>
        <Button
          to={to}
          tag={tag}
          style={{ position: 'absolute', bottom: '20px' }}
        >
          {buttonName}
        </Button>
      </CardBody>
    </Card>
  </div>
);

ProducerCard.propTypes = {
  name: PropTypes.string.isRequired,
  producerPhotoUrl: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  briefInfo: PropTypes.string.isRequired,
  birthPlace: PropTypes.string.isRequired,
  birthPlaceTitle: PropTypes.string.isRequired,
};

export default ProducerCard;
