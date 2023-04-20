import {
  Box,
  Typography,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Avatar,
} from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function Login(props) {
  const [userId, setUserId] = useState("");
  const onUserIdHandler = (e) => {
    setUserId(e.target.value);
  };

  const [userPwd, setUserPwd] = useState("");
  const onUserPwdHandler = (e) => {
    setUserPwd(e.target.value);
  };

  //비동기 함수인데 동기스럽게 쓰기위해서 await를 씀
  const login = async () => {
    if (userPwd === "") {
      alert("비밀번호를 입력하세요");
      return;
    }
    //메서드는 post, 데이터 전달 형식은 body, 데이터표기법은 json

    try {
      const result = await axios.post("http://127.0.0.1:8080/user/logIn/", {
        uid: userId,
        upassword: userPwd,
      });
      //쿠키는 꺼도 존재(비휘발성 - 스토리지에 저장), 세션은 브라우저 종료시 삭제(휘발성- 메모리에저장)
      //세션에 회원정보 저장
      alert(result.data.uname + "님 환영합니다!");
      sessionStorage.setItem("userPk", result.data.upk);
      sessionStorage.setItem("userId", result.data.uid);
      sessionStorage.setItem("userName", result.data.uname);
      //console.log(result);
      props.clickLoginBtn();
      props.LoginSuccess();

      //props.getUserName();
    } catch (e) {
      console.log(e);
      alert("아이디/비밀번호를 확인하세요!");
    }
  };
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  //하나끝나고 하나하고 -> 동기 (순서대로실행)
  //실행 확인 안하고 지나감 나중에 확인(비동기)
  return (
    <Container maxWidth="xs">
      <Form onKeyPress={onCheckEnter}>
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "#ef6694", mb: 1 }}>
            <CheckroomIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box noValidate sx={{ mt: 1, mb: 4 }}>
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="비밀번호"
              label="비밀번호"
              type="password"
              value={userPwd}
              onChange={onUserPwdHandler}
            />

            <FormControlLabel
              control={
                <Checkbox
                  value="remembar"
                  color="primary"
                  disableRipple
                  size="small"
                />
              }
              label="아이디, 비밀번호를 저장하겠습니까?"
            />

            <Button
              variant="contained"
              value="login"
              fullWidth
              sx={{ mt: 1 }}
              onClick={login}
            >
              로그인
            </Button>
          </Box>
        </Box>
      </Form>
    </Container>
  );
}
