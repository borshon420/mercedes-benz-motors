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
  React.useEffect(() => {
    fetch("https://powerful-forest-52418.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-5">
      <h1 className="my-5">
        SPECIAL <span style={{ color: "#FFB129" }}>REVIEWS</span>
      </h1>
      <Container className="review-conteiner">
        <Card style={{ height: "320px" }} className="review-content">
          <Card.Img variant="top" src={review1} />
          <Card.Body>
            <Card.Title>Maria</Card.Title>
            <Card.Text>
              A few American-based Daimler-Benz dealerships were converted to
              Mercedes-Benz dealerships when Daimlers non-Mercedes-partnered
              company closed in 1966.
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
        <Card className="review-content mt-5">
          <Card.Img variant="top" src={review3} />
          <Card.Body>
            <Card.Title>Scott Smith</Card.Title>
            <Card.Text>
              Emil Jellinek, an European automobile entrepreneur who worked with
              Daimler Motoren Gesellschaft (DMG), registered the trademark in
              1902, naming the 19
            </Card.Text>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="read-only" value={5} readOnly />
            </Box>
          </Card.Body>
        </Card>
        <Card style={{ height: "320px" }} className="review-content">
          <Card.Img variant="top" src={review2} />
          <Card.Body>
            <Card.Title>Sofia</Card.Title>
            <Card.Text>
              Gottlieb Daimler was born on 17 March 1834 in Schorndorf. After
              training as a gunsmith and working in France, he attended the
              Polytechnic School in St
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
      <h1 className="my-5">
        REGULAR <span style={{ color: "#FFB129" }}>REVIEWS</span>
      </h1>
      <Container className="review-conteiner">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </Container>
    </div>
  );
};

export default Reviews;
