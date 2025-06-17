package com.weatherapp.weather_backend.dto;

//La clase DTO filtra los datos innecesarios de la api y deja sólo los necesarios para el frontend.

public class WeatherDayDTO {

    private String date;
    private String condition;
    private String icon;
    private double maxTemp;
    private double minTemp;

    public WeatherDayDTO(String date, String condition, String icon, double maxTemp, double minTemp) {
        this.date = date;
        this.condition = condition;
        this.icon = icon;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
    }

    public String getDate() {
        return date;
    }

    public String getCondition() {
        return condition;
    }

    public String getIcon() {
        return icon;
    }

    public double getMaxTemp() {
        return maxTemp;
    }

    public double getMinTemp() {
        return minTemp;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public void setCondition(String condition) {
        this.condition = condition;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public void setMaxTemp(double maxTemp) {
        this.maxTemp = maxTemp;
    }

    public void setMinTemp(double minTemp) {
        this.minTemp = minTemp;
    }
}
