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
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ReviewDetail(props) {
  //console.log(props.rPk);
  const [reviewPkData, setReviewPkData] = useState([]);
  const getReviewByPk = async () => {
    const reviewByPkResult = await axios.get(
      "http://127.0.0.1:8080/review/" + props.rPk
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
      <Grid
        container
        spacing={2}
        columns={16}
        sx={{ margin: 5, justifyContent: "center" }}
      >
        <Grid item xs={8}>
          <Card sx={{ width: 330 }}>
            <CardMedia
              component="img"
              height="200"
              sx={{ objectFit: "contain" }}
              image={reviewPkData.topImgUrl}
              alt="unsplash image"
            />
            <CardMedia
              component="img"
              height="200"
              sx={{ objectFit: "contain" }}
              image={reviewPkData.bottomImgUrl}
              alt="unsplash image"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
