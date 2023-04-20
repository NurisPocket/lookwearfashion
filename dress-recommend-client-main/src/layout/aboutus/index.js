import * as React from "react";
import styles from "./index.css";
import styled from "styled-components";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  TextField,
  Stack,
  Button,
  Typography, 
} from "@mui/material";
import Box from '@mui/material/Box';
import { width } from "@mui/system";

export default function AboutUs() {
  return (
    <body>
      <div>        
      <div>
        <div className="container">	
          <ht>Look Wear Fashion</ht>    
          <svg className="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <circle id="Oval" cx={512} cy={512} r={512} />
            <circle id="Oval" cx={512} cy={512} r={512} />
            <circle id="Oval" cx={512} cy={512} r={512} />
          </svg>    
        </div>    
      </div>
      </div>

      <div style={{ margin : "50px 50px"}}>
      <img src="img/1.jpg" width="30%" height="300px" style={{float: "left"}}/> 
            <h1>Selecting</h1>        
            <p>사용자의 선택에 따른 코디를 추천받는 사이트입니다.</p>      
      </div>
      <div style={{}} >
      <img src="img/1.webp" width="30%" height="300px" style={{float: "left"}}/> 
                <h1 >Buying</h1>
                <p>추천받은 옷을 살 수있는 페이지로 연결</p>    
      </div>      
      <div style={{}}>
      <div>
      <img src="img/1.webp" width="30%" height="300px" style={{float: "left"}} /> 
                <h1>SNS</h1>
                <p>추천받은 옷을 자랑 하고 의견을 공유 </p>    
      </div>
      </div>

      <div style={{}}>
      <img src="img/1.webp" width="30%" height="300px" style={{float: "right"}} /> 
                <h1>사이트 개발자</h1>
                <p>김영인,김보라,김재혁,이수종,이정우,임누리</p>    
      </div>
        
    </body>
  )
}

