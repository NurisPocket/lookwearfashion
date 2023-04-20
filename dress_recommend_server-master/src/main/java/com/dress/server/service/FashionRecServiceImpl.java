package com.dress.server.service;

import org.python.core.PyFunction;
import org.python.core.PyInteger;
import org.python.core.PyObject;
import org.python.core.PyString;
import org.python.util.PythonInterpreter;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FashionRecServiceImpl implements FashionRecService {

    FashionRecServiceImpl(){

    }

    @Override
    public List<String> getWomanClothes(int tob, int bottom) {
        List<String> list = null;
        try {
            list =callFashionPython(1,tob,bottom);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return list;
    }

    @Override
    public List<String> getManClothes(int tob, int bottom) {
        List<String> list = null;
        try {
            list =callFashionPython(2,tob,bottom);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return list;
    }

    @Override
    public List<String> callFashionPython(int type, int tob, int bottom) throws IOException, InterruptedException {

        ProcessBuilder processBuilder = new ProcessBuilder("python", "C:\\finalproject\\dress-recommend-python\\fashion.py",String.valueOf(type),String.valueOf(tob),String.valueOf(bottom));
        processBuilder.redirectErrorStream(true);
        System.out.println("프로세스 실행");
        Process process = processBuilder.start();
        int exitVal = process.waitFor();
        BufferedReader br = new BufferedReader(new InputStreamReader(process.getInputStream(), "euc-kr")); // 서브 프로세스가 출력하는 내용을 받기 위해
        String line;
        String result = "";
        while ((line = br.readLine()) != null) {
            //Warning 이 뜨는 경우가있어서 첫번째 아웃풋만 담아서 사용
            System.out.println(line);
            if(result == "")result = line;
        }
        if(exitVal != 0) {
            System.out.println("서브 프로세스가 비정상 종료되었다.");
        }

        result = result.replace("[", "").replace("]", "").replaceAll("'","").replace(" ","");
        String[] split = result.split(",");
        System.out.println("프로세스 종료");
        return Arrays.asList(split).stream().map(url->"/static-url/clothes"+url).collect(Collectors.toList());
    }
}
