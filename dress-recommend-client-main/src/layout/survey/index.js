import {
  Container,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Button,
  Stack,
  Dialog,
  DialogActions,
} from '@mui/material';
import { useState } from 'react';
import RegistDtail from './registDetail';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

export default function Survey() {
  //option
  //pk,option_id,option_title,gender,type

  // select option_id,option_title from option where gender = "W" and type ="TOP"

  const womanTop = ['밝은 반팔', '어두운반팔', '밝은 긴팔', '어두운긴팔'];
  const womanBottom = [
    '밝은 반바지',
    '어두운 반바지',
    '밝은 긴바지',
    '어두운 긴바지',
    '밝은 짧은 치마',
    '어두운 짧은 치마',
    '밝은 긴 치마',
    '어두운 긴 치마',
  ];

  const manTop = ['밝은 반팔', '어두운반팔', '밝은 긴팔', '어두운긴팔'];
  const manBottom = [
    '밝은 반바지',
    '어두운 반바지',
    '밝은 긴바지',
    '어두운 긴바지',
  ];
  const [gender, setGender] = useState('F');
  const [topList, setTopList] = useState(womanTop);
  const [bottomList, setBottomList] = useState(womanBottom);
  const [resultUrls, setResultUrls] = useState([]);

  const [open, setOpen] = useState(false);

  const [loadingOpen, setLoadingOpen] = useState(false);
  const onLoadingOpen = () => {
    setLoadingOpen(true);
  };

  const handelClickOpen = async () => {
    onLoadingOpen();
    console.log(gender);
    const results = await axios.get(
      'http://localhost:8080/rec/' +
        (gender === 'F' ? 'woman' : 'man') +
        '/' +
        selectedOption['top'] +
        '/' +
        selectedOption['bottom']
    );
    console.log(results);
    setLoadingOpen(false);
    if (results.data.length !== 2) {
      alert('서버 오류입니다 다른값을 선택해주세요');
    } else {
      setResultUrls(results.data.map((url) => 'http://localhost:8080' + url));
      setOpen(true);
    }
  };
  const handelClickClose = () => {
    setOpen(false);
  };
  const selectedOption = { top: '', bottom: '' };

  // http://localhost:8080/rec/woman/4/7

  const SelectOption = (props) => {
    return (
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" align="center">
          {props.type}
        </Typography>
        <RadioGroup row sx={{ justifyContent: 'center', my: 3 }}>
          {(props.type === '상의' ? topList : bottomList).map((data, idx) => (
            <FormControlLabel
              key={data}
              value={idx + 1}
              control={<Radio color="success" size="medium" />}
              label={data}
              onClick={() => {
                if (props.type === '상의') {
                  selectedOption['top'] = idx + 1;
                } else {
                  selectedOption['bottom'] = idx + 5;
                }
              }}
            />
          ))}
        </RadioGroup>
      </Box>
    );
  };

  return (
    <Box sx={{ pt: 6, pb: 6 }}>
      <Container maxWidth="lx" sx={{ bgcolor: '#bdbdbd', height: 200 }}>
        <Typography variant="h4" textAlign="center" sx={{ p: 3 }} gutterBottom>
          코디 추천
        </Typography>
        <Typography variant="body1" textAlign="center" gutterBottom>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
      </Container>

      <Container sx={{ py: 8 }} maxWidth="lg">
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" align="center">
            성별
          </Typography>

          <RadioGroup
            row
            sx={{ justifyContent: 'center', my: 3 }}
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
              setTopList(e.target.value === 'F' ? womanTop : manTop);
              setBottomList(e.target.value === 'F' ? womanBottom : manBottom);
            }}
          >
            <FormControlLabel
              value="F"
              control={<Radio color="success" size="medium" />}
              label="여자"
            />
            <FormControlLabel
              value="M"
              control={<Radio color="success" size="medium" />}
              label="남자"
            />
          </RadioGroup>
        </Box>
        <Divider />
        <SelectOption type={'상의'} />
        <SelectOption type={'하의'} />
      </Container>

      <Stack alignItems="center">
        <Button
          size="large"
          variant="contained"
          sx={{ mt: 5 }}
          onClick={handelClickOpen}
        >
          결과확인
        </Button>

        <Dialog open={loadingOpen}>
          <Stack
            sx={{ width: 100, height: 100 }}
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress color="inherit" />
            <Typography>Loading...</Typography>
          </Stack>
        </Dialog>

        <Dialog open={open} onClose={handelClickClose}>
          <RegistDtail imgUrl={resultUrls} />
        </Dialog>
      </Stack>
    </Box>
  );
}
