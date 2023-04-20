package com.dress.server.mapper;

import com.dress.server.dto.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<User> getAllUser();
    void addUser(User user);
    User getUser(User user);
    User getMyInfoByPk(int upk);
    User getIdDoubleCheck(String userId);

    void updateMyInfo(User user);

    void getDeleteUser(int upk);
}
