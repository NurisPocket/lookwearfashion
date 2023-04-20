코스모 파이널 프로젝트 클라이언트

- material ui 설치 불가시

npm install @mui/material @mui/styled-engine-sc styled-components --force

npm install @mui/material @emotion/react @emotion/styled --force

<!-- 사진 관련 (unsplash 가입, 키 필요)
npx create-react-app unsplash -->

axios
npm install axios --force

npm install react-router-dom

npm i styled-components --force

npm install react-bootstrap bootstrap --force

create table user (
u_pk int(11) not null auto_increment primary key,
u_id varchar(100) not null,
u_password varchar(100) not null,
u_name varchar(30) not null,
u_email varchar(200) not null,
u_phon varchar(11) not null,
u_gender char(1) not null,
u_post_code int(11) not null,
u_adress_1 varchar(200) not null,
u_adress_2 varchar(200) not null,
u_deleteyn char(1) not null,
u_create_date datetime,
u_delete_date datetime,
u_pwd_change_date datetime
);

create table dress.review(
r_pk int(11) not null AUTO_INCREMENT primary key,
img_url varchar(200) not null,
create_date datetime not null,
u_pk int(11) not null,
constraint fk_user_review foreign key(u_pk) references dress.user(u_pk)
);

create table dress.comment(
c_pk int(11) not null primary key,
u_pk int(11) not null,
r_pk int(11) not null,
message TEXT not null,
create_date datetime not null,
constraint FK_user_comment FOREIGN KEY (u_pk) REFERENCES user(u_pk),
constraint FK_review_comment FOREIGN KEY (r_pk) REFERENCES review(r_pk)
);

create table used_review(
ur_pk int(11) not null auto_increment primary key,
contents text not null,
rating char(1) not null,
file_url varchar(200) not null,
title varchar(50) not null,
r_pk int(11) not null,
constraint fk_used_review_review foreign key(r_pk) references dress.review(r_pk)
)

alter table review rename column tom_img_url to top_img_url;

alter table review add bottom_img_url varchar(200);
