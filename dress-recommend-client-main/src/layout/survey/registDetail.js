import {
  Card,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RegistDtail(props) {
  const registe = async () => {
    const uPk = sessionStorage.getItem("userPk");
    await axios.post("http://127.0.0.1:8080/review/review/", {
      bottomImgUrl: props.imgUrl[1],
      topImgUrl: props.imgUrl[0],
      upk: uPk,
    });
  };

  const userId = sessionStorage.getItem("userId");

  return (
    <Container maxWidth="md" component="main">
      <Grid container justifyContent="center">
        <Grid item>
          <CardHeader
            title={userId}
            titleTypographyProps={{ align: "center" }}
          />
          <Card sx={{ width: 500, m: 3 }}>
            <CardMedia
              component="img"
              height="300"
              sx={{ objectFit: "contain" }}
              image={props.imgUrl[0]}
              alt="unsplash image"
            />
            <CardMedia
              component="img"
              height="300"
              sx={{ objectFit: "contain" }}
              image={props.imgUrl[1]}
              alt="unsplash image"
            />
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="한줄평"
              value={content}
              onChange={contentHandler}
              fullWidth
              variant="standard"
            /> */}
          </Card>
          <Grid item>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button fullWidth disableRipple onClick={registe}>
                결과저장
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
