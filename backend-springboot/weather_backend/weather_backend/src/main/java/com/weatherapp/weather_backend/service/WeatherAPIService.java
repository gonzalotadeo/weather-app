package com.weatherapp.weather_backend.service;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.weatherapp.weather_backend.dto.WeatherDayDTO;
import com.weatherapp.weather_backend.model.WeatherForecastResponse;
//servicio creado 17/06/25 para obtener datos de weatherapi con exito. 
@Service
public class WeatherAPIService {

// Clave de API y URL base para WeatherAPI
//cambiar la variable localización por una función que reciba el parámetro del frontend.

    private static final String API_KEY = "e53e1d1b51e2468ea2a91753251706";
    private static final String BASE_URL = "http://api.weatherapi.com/v1/current.json";
    private static final String BASE_URL_FORECAST = "http://api.weatherapi.com/v1/forecast.json";
    public static String localizacion = "Barcelona";


    private final RestTemplate restTemplate; //permite las peticiones http a la api
    public WeatherAPIService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getWeatherData(String location) { //forma la consulta a la API de WeatherAPI con el tiempo ACTUAL
        String url = BASE_URL + "?key=" + API_KEY + "&q=" + location;
        return restTemplate.getForObject(url, String.class);
    }

    public String getWeatherForecast(String location) {
        String url = BASE_URL_FORECAST + "?key=" + API_KEY + "&q=" + location + "&days=7"; //consulta a la api los siete dias futuros. Revisar si se puede borrar tras crear la funciín List
        return restTemplate.getForObject(url, String.class);

    }
    
    public List<WeatherDayDTO> getSimplifiedForecast(String location) { //consulta de los siete dias siguientes a List.
        String url = BASE_URL_FORECAST + "?key=" + API_KEY + "&q=" + location + "&days=7";

        WeatherForecastResponse response = restTemplate.getForObject(url, WeatherForecastResponse.class);

        if (response == null || response.getForecast() == null) {
            return Collections.emptyList();
        }

        return response.getForecast().getForecastday().stream()
            .map(day -> new WeatherDayDTO(
                day.getDate(),
                day.getDay().getCondition().getText(),
                day.getDay().getCondition().getIcon(),
                day.getDay().getMaxtemp_c(),
                day.getDay().getMintemp_c()
            ))
            .collect(Collectors.toList());
    }
   
    
    }

