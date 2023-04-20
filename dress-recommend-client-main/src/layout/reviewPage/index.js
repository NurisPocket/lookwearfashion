import React, { useEffect, useState } from 'react';
import {
  Container,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Grid,
  Box,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReviewDetail from './reviewDetail';
import styled from 'styled-components';
import axios from 'axios';

export default function RecommendReview() {
  const [datas, setDatas] = useState([]);

  const allReview = async () => {
    //const results = await axios.get('http://localhost:8080/review/all/');
    //console.log(results);
    //setDatas(results.data);
  };
  useEffect(() => {
    allReview();
  }, []);

  //선택된 pk를 담기위한 useState
  const [selectedPk, setSelectedPk] = useState(0);

  const [open, setOpen] = useState(false);
  const onClickHandler = () => {
    setOpen(true);
  };
  const onClickCloseHandler = () => {
    setOpen(false);
  };

  const Top = styled.button`
    position: fixed;
    bottom: 5%;
    right: 2rem;

    background-color: gray;
    color: white;
    border: gray;
    width: 75px;
    height: 25px;
    border-radius: 25px;
  `;
  return (
    <Container sx={{ py: 15 }} maxWidth="md">
      <Top
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        위로 가기
      </Top>
      <Grid container spacing={4}>
        {datas.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardHeader title={data.uid} subheader={data.createDate} />
              <CardMedia
                component="img"
                height="150"
                sx={{ objectFit: 'contain' }}
                image={data.topImgUrl}
                alt="unsplash image"
              />
              <CardMedia
                component="img"
                height="150"
                sx={{ objectFit: 'contain' }}
                image={data.bottomImgUrl}
                alt="unsplash image"
              />
              <Typography autoFocus variant="body2">
                {data.content}
              </Typography>

              {/* <Grid item>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <CardActions>
                  <Button
                    sx={{ flexGrow: 1 }}
                    size="small"
                    onClick={() => {
                      onClickHandler();
                      setSelectedPk(data.rpk);
                    }}
                  >
                    View
                  </Button>
                </CardActions>
              </Grid> */}
            </Card>
          </Grid>
        ))}
        {/* <Box sx={{ width: "auto" }} role="presentation">
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onOpen={onClickHandler}
            onClose={onClickCloseHandler}
          >
            <ReviewDetail rPk={selectedPk} />
          </SwipeableDrawer>
        </Box> */}
      </Grid>
    </Container>
  );
}
