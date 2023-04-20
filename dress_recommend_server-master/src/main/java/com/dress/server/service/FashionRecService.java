package com.dress.server.service;

import java.io.IOException;
import java.util.List;

public interface FashionRecService {
    List<String> getWomanClothes(int tob,int bottom);
    List<String> getManClothes(int tob,int bottom);
    List<String> callFashionPython(int type,int tob,int bottom) throws IOException, InterruptedException;
}
