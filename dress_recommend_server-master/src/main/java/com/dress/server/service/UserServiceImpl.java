package com.dress.server.service;

import com.dress.server.dto.User;
import com.dress.server.mapper.UserMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    UserMapper userMapper;
    public UserServiceImpl(UserMapper userMapper){
        this.userMapper = userMapper;
    }
    @Override
    public List<User> getAllUser() {
        return userMapper.getAllUser();
    }


    @Override
    public void addUser(User user) {
        userMapper.addUser(user);
    }

    @Override
    public User getUser(User user) {

        return userMapper.getUser(user);
    }

    @Override
    public User getMyInfoByPk(int upk) {
        return userMapper.getMyInfoByPk(upk);
    }

    @Override
    public User getIdDoubleCheck(String userId) {
        return userMapper.getIdDoubleCheck(userId);
    }

    @Override
    public void updateMyInfo(User user) {
         userMapper.updateMyInfo(user);
    }

    @Override
    public void getDeleteUser(int upk) {
        userMapper.getDeleteUser(upk);
    }


}
