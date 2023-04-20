import {
  Button,
  Toolbar,
  AppBar,
  Typography,
  Stack,
  Dialog,
} from '@mui/material';
import Side from './sidevarList';
import Main from './main';
import RecommendReview from '../reviewPage/index';
import SignUp from '../authentication/sign-up/index';
import Login from '../authentication/login';
import Survey from '../survey';
import Mypage from '../mypage';
import AboutUs from '../aboutus';
import SurveyResult from '../board/surveyResult';
import MyReview from '../board/myReview';
import Realreview from '../reviewPage/realReview';

import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

// const getAllUser = async () => {
//   const r = await axios.get("http://localhost:8080/user/all");
//   console.log(r);
// };

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const handelClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem('userPk') !== null // 로그인상태가아니면 userPk가 null = true , 로그인하면 userPk가 null 이 아님 false
  );
  const handelIsLogin = () => {
    setIsLogin(true);
  };

  const [userName, setUserName] = useState('');
  const getUserName = () => {
    setUserName(sessionStorage.getItem('userName'));
  };

  const [removeMyInfo, setRemoveMyInfo] = useState('');
  const removeMyInfoResult = () => {
    setRemoveMyInfo(sessionStorage.clear());
  };

  const LoginMenu = () => {
    useEffect(() => {
      getUserName();
    }, []);

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

  return (
    <BrowserRouter>
      <AppBar position="absolute" padding="0" sx={{ bgcolor: 'white' }}>
        <Toolbar>
          <Side />
          <Link to="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Typography color="primary" variant="h6" align="center">
              LookWearFashion
            </Typography>
          </Link>
          <Stack direction="row" sapcing={2}>
            <LoginMenu />
          </Stack>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/recommendreview" element={<RecommendReview />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/surver" element={<Survey />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/surveyResult" element={<SurveyResult />}></Route>
        <Route path="/myreview/:rpk" element={<MyReview />}></Route>
        <Route path="/realreview" element={<Realreview />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
