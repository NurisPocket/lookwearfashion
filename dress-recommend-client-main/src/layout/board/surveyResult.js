import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Box,
  IconButton,
  Button,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState, React } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export default function SurveyResult() {
  const [datas, setDatas] = useState([]);

  const upk = sessionStorage.getItem('userPk');
  const getMyResultByPk = async () => {
    const results = await axios.get(
      'http://127.0.0.1:8080/review/myresult/' + upk
    );
    //console.log(results);
    setDatas(results.data);
  };

  const deleteMyResultByPk = async (props) => {
    const dataRpk = await axios.delete(
      'http://127.0.0.1:8080/review/deleteMyResultByPk/' + props
    );

    //console.log(dataRpk);
    window.location.replace('/surveyResult');
  };

  useEffect(() => {
    getMyResultByPk();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1 }} mt={20}>
        <Grid container spacing={{ xs: 6, md: 3 }} justifyContent="center">
          {datas.map((data) => (
            <Grid item key={data.rpk}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Grid item sx={{ display: 'flex' }}>
                  <CardHeader title={data.uid} subheader={data.createDate} />
                  <IconButton
                    disableRipple
                    onClick={() => {
                      deleteMyResultByPk(data.rpk);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>

                <CardMedia
                  component="img"
                  height="150"
                  image={data.topImgUrl}
                  sx={{ objectFit: 'contain' }}
                  alt="unsplash image"
                />
                <CardMedia
                  component="img"
                  height="150"
                  image={data.bottomImgUrl}
                  sx={{ objectFit: 'contain' }}
                  alt="unsplash image"
                />
                <Link
                  to={'/myreview/' + data.rpk}
                  style={{ textDecoration: 'none' }}
                >
                  <Button disableRipple fullWidth>
                    리뷰쓰기
                  </Button>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
