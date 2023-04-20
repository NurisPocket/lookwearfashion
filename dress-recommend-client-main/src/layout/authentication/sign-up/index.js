import {
  Box,
  TextField,
  Container,
  Typography,
  MenuItem,
  Button,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const onUserIdHandler = (e) => {
    setUserId(e.target.value);
  };

  const [userPwd, setUserPwd] = useState('');
  const onUserPwdHandler = (e) => {
    setUserPwd(e.target.value);
  };
  //이름 이메일 성별 주소
  const [userName, setUserName] = useState('');
  const onUserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const [userEmail, setUserEmail] = useState('');
  const onUserEmailHendeler = (e) => {
    setUserEmail(e.target.value);
  };

  const [userGender, setUserGender] = useState('');
  const onGenderHandeler = (e) => {
    setUserGender(e.target.value);
  };

  const [userPh, setUserPh] = useState('');
  const userPhHandler = (e) => {
    setUserPh(e.target.value);
  };

  const registe = async () => {
    //회원정보 유효성 체크
    if (userId === '') {
      alert('아이디를 입력해주세요');
      return;
    } else if (userId.length < 4) {
      alert('아이디는 최소 4자 이상 적어주세요');
      return;
    }

    if (userPwd === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    } else if (userPwd.length < 8) {
      alert('비밀번호는 최소 8자 이상 적어주세요.');
      return;
    }

    if (userName === '') {
      alert('이름을 입력해주세요');
      return;
    }

    if (userGender === '') {
      alert('성별을 선택해 주세요.');
      return;
    }

    if (!userEmail.includes('@') || !userEmail.includes('.')) {
      alert('이메일을 확인해 주세요.');
      return;
    }

    if (userPh === '') {
      alert('휴대폰 번호를 확인해 주세요.');
      return;
    } else if (isNaN(userPh * 1)) {
      alert('숫자를 입력하세요');
      return;
    }

    //TODO 아이디중복검사 API 생성 후 확인
    const idResult = await axios.get(
      'http://127.0.0.1:8080/user/idcheck/' + userId
    );
    //console.log(idResult);
    if (idResult.data.uid) {
      alert('중복된 아이디입니다');
      return;
    }

    const result = await axios.post('http://127.0.0.1:8080/user/signUp/', {
      uid: userId,
      upassword: userPwd,
      uname: userName,
      ugender: userGender,
      uemail: userEmail,
      uphon: userPh,
    });
    console.log(result);
    alert('가입을 환영합니다!');

    navigate('/');
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
          회원가입
        </Typography>
        <Box>
          <TextField
            margin="normal"
            required
            fullWidth
            label="아이디"
            autoFocus
            value={userId}
            onChange={onUserIdHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="비밀번호"
            type="password"
            value={userPwd}
            onChange={onUserPwdHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="이름"
            value={userName}
            onChange={onUserNameHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="성별"
            select
            value={userGender}
            onChange={onGenderHandeler}
          >
            <MenuItem value={'F'}>여자</MenuItem>
            <MenuItem value={'M'}>남자</MenuItem>
          </TextField>

          <TextField
            margin="normal"
            required
            fullWidth
            label="이메일"
            value={userEmail}
            onChange={onUserEmailHendeler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="휴대전화"
            value={userPh}
            onChange={userPhHandler}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            size="large"
            disableRipple
            onClick={registe}
          >
            가입하기
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
