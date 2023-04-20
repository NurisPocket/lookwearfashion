package com.dress.server.config;

import org.apache.ibatis.annotations.Delete;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebConfig implements  WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") //내 Api주소를
                .allowedOrigins("*") //모두에게 허용한다
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}

