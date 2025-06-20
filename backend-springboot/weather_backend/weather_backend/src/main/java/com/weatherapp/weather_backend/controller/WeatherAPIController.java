package com.weatherapp.weather_backend.controller;

import com.weatherapp.weather_backend.dto.WeatherDayDTO;
import com.weatherapp.weather_backend.service.WeatherAPIService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

  @RestController
  @RequestMapping("/api/weather") // Establece la URL base para la llamada API
  @CrossOrigin(origins = "*") // Permite solicitudes desde cualquier origen, incluido Angular en este caso

public class WeatherAPIController {
  
    @Autowired
    private WeatherAPIService weatherAPIService;

    @GetMapping("/prueba") //ruta tiempo actual
    public String getWeatherPrueba() {
         return weatherAPIService.getWeatherData(WeatherAPIService.localizacion); //Este método devuelve los datos del tiempo para la localización definida en WeatherAPIService
    }
     
    @GetMapping("/forecast") //este método devuelve la previsión del tiempo para los próximos 7 días
public List<WeatherDayDTO> getWeatherForecast(){
    return weatherAPIService.getSimplifiedForecast(WeatherAPIService.localizacion);
}
    @PostMapping("/ciudad")
public void setCiudad(@RequestBody Map<String, String> payload) {
    String nuevaCiudad = payload.get("ciudad");
    WeatherAPIService.localizacion = nuevaCiudad;
    System.out.println("Ciudad actualizada a: " + nuevaCiudad);
}

}
