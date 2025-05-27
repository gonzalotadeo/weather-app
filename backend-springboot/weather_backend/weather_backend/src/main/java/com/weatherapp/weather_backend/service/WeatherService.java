package com.weatherapp.weather_backend.service;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@Service
public class WeatherService {

    private final RestTemplate restTemplate;

    public WeatherService(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

   public String getWeather(String city) {
        // Nota: esta URL no usa la ciudad, pero devuelve un JSON de ejemplo
        String url = "https://www.el-tiempo.net/api/json/v2/home";
        return restTemplate.getForObject(url, String.class);
    }
}
