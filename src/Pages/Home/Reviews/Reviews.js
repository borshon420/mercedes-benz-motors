import * as React from "react";
import { Card, Container } from "react-bootstrap";
import review1 from "../../../images/reviews/1.png";
import review2 from "../../../images/reviews/2.png";
import review3 from "../../../images/reviews/3.png";
import "./Reviews.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = React.useState([]);
    React.useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
  return (
    <div className="my-5">
      <h1 className="my-5">MERCEDES BENZ <span style={{ color: "#FFB129" }}>REVIEWS</span></h1>
      <Container className="review-conteiner">
        <Card style={{height: '320px'}} className="review-content">
          <Card.Img variant="top" src={review1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="read-only" value={3} readOnly />
            </Box>
          </Card.Body>
        </Card>
        <Card className="review-content mt-5">
          <Card.Img variant="top" src={review3} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="read-only" value={4} readOnly />
            </Box>
          </Card.Body>
        </Card>
        <Card style={{height: '320px'}}  className="review-content">
          <Card.Img variant="top" src={review2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
                <Rating name="read-only" value={4} readOnly />
            </Box>
          </Card.Body>
        </Card>
      </Container>
      <h1 className="my-5">LEATEST <span style={{ color: "#FFB129" }}>REVIEWS</span></h1>
      <Container className="review-conteiner">
          {
            reviews.map(review => <SingleReview 
              key={review._id}
              review={review}
              ></SingleReview>)
          }    
      </Container>
    </div>
  );
};

export default Reviews;
