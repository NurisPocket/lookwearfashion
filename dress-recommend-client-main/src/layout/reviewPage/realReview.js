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
  Stack,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReviewDetail from './reviewDetail';
import RealReviewDetail from './realReviewDetail';
import styled from 'styled-components';
import axios from 'axios';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

export default function Realreview() {
  const actions = [
    { icon: <BuildCircleIcon />, name: '고객센터' },
    { icon: <GroupIcon />, name: '그룹방' },
    { icon: <ChatIcon />, name: '친구채팅방' },
  ];

  const [datas, setDatas] = useState([]);

  const allReview = async () => {
    const results = await axios.get(
      'http://localhost:8080/review/allUsedReview/'
    );
    console.log(results);
    setDatas(results.data);
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

  const [realOpen, setRealOpen] = useState(false);
  const onClickRealReview = () => {
    setRealOpen(true);
  };
  const onClickCloseRealReview = () => {
    setRealOpen(false);
  };

  const Top = styled.button`
    position: fixed;
    bottom: 3%;
    right: 5rem;

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
                image={data.fileUrl}
                alt="이미지파일"
              />

              <Typography autoFocus variant="body2">
                {data.content}
              </Typography>

              <Grid item>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <Stack direction="row">
                  <Button
                    sx={{ flexGrow: 1 }}
                    size="small"
                    onClick={() => {
                      onClickRealReview();
                      setSelectedPk(data.rpk);
                    }}
                  >
                    리뷰
                  </Button>
                  <Button
                    sx={{ flexGrow: 1 }}
                    size="small"
                    onClick={() => {
                      onClickHandler();
                      setSelectedPk(data.rpk);
                    }}
                  >
                    추천결과
                  </Button>
                </Stack>
              </Grid>
            </Card>
          </Grid>
        ))}
        <Box sx={{ width: 'auto' }} role="presentation">
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onOpen={onClickHandler}
            onClose={onClickCloseHandler}
          >
            <ReviewDetail rPk={selectedPk} />
          </SwipeableDrawer>
        </Box>
        <Box sx={{ width: 'auto' }} role="presentation">
          <SwipeableDrawer
            anchor="bottom"
            open={realOpen}
            onOpen={onClickRealReview}
            onClose={onClickCloseRealReview}
          >
            <RealReviewDetail rPk={selectedPk} />
          </SwipeableDrawer>
        </Box>
      </Grid>
      <SpeedDial
        ariaLabel="For chating"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Container>
  );
}
