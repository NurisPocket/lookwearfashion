import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  TextField,
  Stack,
  Button,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReviewMessage from './reviewMessage';

export default function RealReviewDetail(props) {
  //console.log(props.rPk);
  const [reviewPkData, setReviewPkData] = useState([]);
  const getReviewByPk = async () => {
    const reviewByPkResult = await axios.get(
      'http://127.0.0.1:8080/allUsedReview/' + props.rPk
    );
    //console.log(reviewByPkResult);
    setReviewPkData(reviewByPkResult.data);
  };

  useEffect(() => {
    //console.log(props.rPk);
    getReviewByPk();
  }, []);
  //
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={2} columns={16} sx={{ margin: 5 }}>
        <Grid item xs={8}>
          <Card sx={{ width: 330 }}>
            <CardMedia
              component="img"
              height="250"
              sx={{ objectFit: 'contain' }}
              image={reviewPkData.topImgUrl}
              alt="unsplash image"
            />
            <CardMedia
              component="img"
              height="250"
              sx={{ objectFit: 'contain' }}
              image={reviewPkData.bottomImgUrl}
              alt="unsplash image"
            />
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2">{reviewPkData.createDate}</Typography>
          <Typography variant="body2">
            내 평가: {reviewPkData.contents}
          </Typography>

          <ReviewMessage />
        </Grid>
      </Grid>
    </Container>
  );
}
