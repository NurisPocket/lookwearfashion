import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditMyPage(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  const [updatePwd, setUpdatePwd] = useState('');
  const onUdatePwdHandler = (e) => {
    setUpdatePwd(e.target.value);
  };
  const [updateEmail, setUpdateEmail] = useState('');
  const onUdateEmailHandler = (e) => {
    setUpdateEmail(e.target.value);
  };

  const [updatePh, setUpdatePh] = useState('');
  const onUpdatePhHandler = (e) => {
    setUpdatePh(e.target.value);
  };

  const upk = sessionStorage.getItem('userPk');
  const editUser = async () => {
    const editUserResult = await axios.get('http://127.0.0.1:8080/user/' + upk);
    setUser(editUserResult.data);
  };

  const update = async () => {
    if (updatePwd === '') {
      alert('아이디를 입력해주세요');
      return;
    } else if (updatePwd.length < 4) {
      alert('아이디는 최소 4자 이상 적어주세요');
      return;
    }

    if (!updateEmail.includes('@') || !updateEmail.includes('.')) {
      alert('이메일을 확인해 주세요.');
      return;
    }

    if (updatePh === '') {
      alert('휴대폰 번호를 확인해 주세요.');
      return;
    } else if (isNaN(updatePh * 1)) {
      alert('숫자를 입력하세요');
      return;
    }
    const updateMyInfo = await axios.put('http://127.0.0.1:8080/user/update/', {
      upk: upk,
      upassword: updatePwd,
      uemail: updateEmail,
      uphon: updatePh,
    });
    //console.log(updateMyInfo);
    alert('수정 완료!');

    navigate('/');
  };

  useEffect(() => {
    editUser();
  }, []);

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
          회원정보수정
        </Typography>
        <Box>
          아이디
          <TextField margin="normal" fullWidth label={user.uid} disabled />
          비밀번호
          <TextField
            margin="normal"
            fullWidth
            type="password"
            value={updatePwd}
            onChange={onUdatePwdHandler}
          />
          이름
          <TextField margin="normal" fullWidth label={user.uname} disabled />
          성별
          <TextField
            margin="normal"
            fullWidth
            label={user.ugender === 'F' ? '여자' : '남자'}
            disabled
          />
          이메일
          <TextField
            margin="normal"
            required
            fullWidth
            value={updateEmail}
            onChange={onUdateEmailHandler}
          />
          휴대전화
          <TextField
            margin="normal"
            required
            fullWidth
            value={updatePh}
            onChange={onUpdatePhHandler}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            size="large"
            disableRipple
            onClick={update}
          >
            수정하기
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
