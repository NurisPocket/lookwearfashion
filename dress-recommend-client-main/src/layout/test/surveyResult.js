import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Button,
  Box,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState, React } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function SurveyResult() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [datas, setDatas] = useState([]);
  const [datas1, setDatas1] = useState([]);

  const getMyReviewByPk = async () => {
    const upk = sessionStorage.getItem("userPk");
    const results = await axios.get(
      "http://127.0.0.1:8080/review/myresult/" + upk
    );
    //console.log(results);
    setDatas(results.data);
  };

  // useEffect(() => {
  //   getMyReviewByPk();
  // }, []);

  return (
    <Box sx={{ display: "flex", ml: 10 }}>
      {/* <Box sx={{ flexGrow: 1 }} m={2}>
        <Box sx={{ mt: 5, mb: 5, ml: 5 }}>
          <Typography variant="h5">내가 쓴 후기</Typography>
        </Box>
        <Grid container spacing={{ xs: 6, md: 3 }}>
          {datas1.map((data1, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardHeader title={data1.uid} subheader={data1.createDate} />
                <CardMedia
                  component="img"
                  height="300"
                  image={data1.imgurl}
                  alt="unsplash image"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box> */}

      <Box sx={{ flexGrow: 1 }} m={2}>
        <Box sx={{ mt: 5, mb: 5, ml: 5 }}>
          <Typography variant="h5">내 옷장</Typography>
        </Box>
        <Grid container spacing={{ xs: 6, md: 3 }}>
          {datas.map((data) => (
            <Grid item key={data.rpk}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Grid item sx={{ display: "flex" }}>
                  <CardHeader title={data.uid} subheader={data.createDate} />
                  <IconButton disableRipple>
                    <CloseIcon />
                  </IconButton>
                </Grid>

                <CardMedia
                  component="img"
                  height="300"
                  image={data.imgUrl}
                  alt="unsplash image"
                />
                <Button onClick={handleClickOpen}>평가하기</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>한줄평</DialogTitle>
        <DialogContent>
          <DialogContentText>
            다른 사용자들에게 의견을 들려주세요.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog> */}
    </Box>
  );
}
