import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Card } from 'react-bootstrap';

const SingleReview = ({review}) => {
    const {name, description, email, rattings} = review;
    return (
        <div>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{email}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <Box>
          <Rating
        name="simple-controlled"
        value={rattings}
      />
          </Box>
        </div>
    );
};

export default SingleReview;