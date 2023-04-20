import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Dialog,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../authentication/login';

//DeleteMypage
export default function DeleteMyPage(props) {
  //upk 정보 보내기
  const upk = sessionStorage.getItem('userPk');
  const deleteUser = async () => {
    const deleteUser = await axios.delete(
      'http://127.0.0.1:8080/user/delete/' + upk
    );
  };
  //올라오는 박스 기능 설정
  const [open, setOpen] = useState(false);
  const handelClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handelIsLogin = () => {
    setIsLogin(true);
  };
  // 로그인 상태가 아니면 userPk가 null = true , 로그인하면 userPk가 null 이 아님 false
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem('userPk') !== null
  );
  //
  const [userName, setUserName] = useState('');
  const getUserName = () => {
    setUserName(sessionStorage.getItem('userName'));
  };

  const [removeMyInfo, setRemoveMyInfo] = useState('');
  const removeMyInfoResult = () => {
    setRemoveMyInfo(sessionStorage.clear());
  };
  const [userId, setUserId] = useState('');
  const onUserIdHandler = (e) => {
    setUserId(e.target.value);
  };

  const [userPwd, setUserPwd] = useState('');
  const onUserPwdHandler = (e) => {
    setUserPwd(e.target.value);
  };

  //비동기 함수인데 동기스럽게 쓰기위해서 await를 씀
  const verification = async () => {
    if (userId === '') {
      alert('아이디를 입력하세요');
      return;
    }
    if (userPwd === '') {
      alert('비밀번호를 입력하세요');
      return;
    }
    //메서드는 post, 데이터 전달 형식은 body, 데이터표기법은 json
    try {
      const result = await axios.post('http://127.0.0.1:8080/user/logIn/', {
        uid: userId,
        upassword: userPwd,
      });
      //아이디 비밀번호 일치시 정보삭제, 로그인(false)=로그아웃, 메인페이지로 이동
      deleteUser();
      props.closeHandler();
      setIsLogin(false);
      removeMyInfoResult();
      alert('탈퇴 되었습니다.');
      window.location.replace('/');
      //아이디 비밀번호 불일치시
    } catch (e) {
      console.log(e);
      alert('아이디/비밀번호를 확인하세요!');
    }
  };
  // 로그인 상태 or 로그아웃 상태에서 위에 메뉴바 설정
  const LoginMenu = () => {
    getUserName();
    if (isLogin) {
      return (
        <>
          <Button disabled>{userName}님</Button>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              disableRipple
              sx={{ color: 'text.secondary' }}
              onClick={() => {
                setIsLogin(false);
                removeMyInfoResult();
              }}
            >
              로그아웃
            </Button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Button disableRipple onClick={handelClickOpen}>
            로그인
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <Login clickLoginBtn={handleClose} LoginSuccess={handelIsLogin} />
          </Dialog>
          <Link to="signup" style={{ textDecoration: 'none' }}>
            <Button disableRipple>회원가입</Button>
          </Link>
        </>
      );
    }
  };

  // 여기부터 return문
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          회원탈퇴
        </Typography>
        <Box>
          아이디
          <TextField
            margin="normal"
            required
            fullWidth
            id="아이디"
            label="아이디"
            autoFocus
            value={userId}
            onChange={onUserIdHandler}
          />
          비밀번호
          <TextField
            margin="normal"
            fullWidth
            type="password"
            value={userPwd}
            onChange={onUserPwdHandler}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            size="large"
            disableRipple
            onClick={verification}
          >
            탈퇴하기
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
