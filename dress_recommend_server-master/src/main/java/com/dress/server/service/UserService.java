package com.dress.server.service;

import com.dress.server.dto.User;

import java.util.List;

public interface UserService {

    List<User> getAllUser();
    void addUser(User user);

    User getUser(User user);

    User getMyInfoByPk(int upk);

    User getIdDoubleCheck(String userId);

    void updateMyInfo(User user);

    void getDeleteUser(int upk);

}
