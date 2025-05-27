package com.weatherapp.weather_backend.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weatherapp.weather_backend.service.WeatherService;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "*") // Permitir peticiones desde Angular
public class WeatherController {

    private final WeatherService service;

    public WeatherController(WeatherService service) {
        this.service = service;
    }

@GetMapping("/{city}")
public ResponseEntity<String> getWeather(@PathVariable String city) {
    String weatherData = service.getWeather(city);
    return ResponseEntity.ok(weatherData);
}
}
