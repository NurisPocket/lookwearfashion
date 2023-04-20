import * as React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Typography,
  Grid,
  Box,
  Button,
  SwipeableDrawer,
} from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CallIcon from "@mui/icons-material/Call";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EmailIcon from "@mui/icons-material/Email";
import WcIcon from "@mui/icons-material/Wc";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import EditMyPage from "./edit";
import BtnGroup from "./btnGroup";
import DeleteMyPage from "./delete";

export default function Mypage() {
  //기본 프로필 이미지
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
    } else {
      //업로드 취소할 시
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  //아래에서 박스 올라오기 기능
  const [state, setState] = useState(false);
  const getOpenStateHandler = () => {
    setState(true);
  };
  const getCloseStateHandler = () => {
    setState(false);
  };

  //아래에서 박스 올라오기 기능(회원탈퇴)
  const [state2, setState2] = useState(false);
  const getOpenStateHandler2 = () => {
    setState2(true);
  };
  const getCloseStateHandler2 = () => {
    setState2(false);
  };

  const [info, setInfo] = useState("");

  const myInfo = async () => {
    const upk = sessionStorage.getItem("userPk");
    const myInfoResult = await axios.get("http://127.0.0.1:8080/user/" + upk);
    //console.log(myInfoResult);
    setInfo(myInfoResult.data);
  };

  useEffect(() => {
    myInfo();
  }, []);

  return (
    <Box>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        sx={{ mt: 15, mb: 5 }}
      >
        My Page
      </Typography>
      <Box sx={{ display: "flex" }} justifyContent="center">
        <Grid container maxWidth="sm">
          <Grid item xs={6} sx={{ mt: 5 }}>
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg,impge/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
              ref={fileInput}
            />
            <Avatar
              alt="Profile"
              src={Image}
              sx={{ height: "180px", width: "180px", mt: 4 }}
              onClick={() => {
                fileInput.current.click();
              }}
              style={{ cursor: "pointer" }}
            />
            <Grid item>
              <Button
                size="small"
                variant="text"
                sx={{ mt: 2, ml: 3 }}
                onClick={getOpenStateHandler}
              >
                회원정보 수정하기
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="small"
                variant="text"
                sx={{ ml: 7 }}
                onClick={getOpenStateHandler2}
              >
                회원탈퇴
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ width: "auto" }} role="presentation">
            <SwipeableDrawer
              anchor="bottom"
              open={state}
              onOpen={getOpenStateHandler}
              onClose={getCloseStateHandler}
            >
              <EditMyPage closeHandler={getCloseStateHandler} />
            </SwipeableDrawer>
            <SwipeableDrawer
              anchor="bottom"
              open={state2}
              onOpen={getOpenStateHandler2}
              onClose={getCloseStateHandler2}
            >
              <DeleteMyPage closeHandler={getCloseStateHandler2} />
            </SwipeableDrawer>
          </Box>

          <Grid item xs={6}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AssignmentIndIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="아이디" secondary={info.uid} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PermIdentityIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="이름" secondary={info.uname} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WcIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="성별"
                  secondary={info.ugender === "M" ? "남자" : "여자"}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="이메일" secondary={info.uemail} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CallIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="휴대전화번호" secondary={info.uphon} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Grid>
        </Grid>
      </Box>
      <Grid item>
        <BtnGroup />
      </Grid>
    </Box>
  );
}
