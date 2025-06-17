package com.weatherapp.weather_backend.model;
import java.util.List;
//La estructura puede parecer confusa, pero es imprescindible porque es exáctamente la estructura del JSON, si la modificas no se podrá hacer mapeo automático.

public class WeatherForecastResponse { //toda la respuesta de la api
    private Forecast forecast;

    public Forecast getForecast() {
        return forecast;
    }
    public void setForecast(Forecast forecast) {
        this.forecast = forecast;
    }

    public static class Forecast { //el bloque forecast del json
        private List<ForecastDay> forecastday;

        public List<ForecastDay> getForecastday() {
            return forecastday;
        }

        public void setForecastday(List<ForecastDay> forecastday) {
            this.forecastday = forecastday;
        }
    }

    public static class ForecastDay { //un solo día del bloque forecastday
        private String date;
        private Day day;
        public String getDate() {
            return date;
        }
        public Day getDay() {
            return day;
        }
        public void setDate(String date) {
            this.date = date;
        }
        public void setDay(Day day) {
            this.day = day;
        }
        
    }

    public static class Day { //datos del clima
        private double maxtemp_c;
        private double mintemp_c;
        private Condition condition;

        public Condition getCondition() {
            return condition;
        }
        public double getMaxtemp_c() {
            return maxtemp_c;
        }
        public double getMintemp_c() {
            return mintemp_c;
        }
        public void setCondition(Condition condition) {
            this.condition = condition;
        }
        public void setMaxtemp_c(double maxtemp_c) {
            this.maxtemp_c = maxtemp_c;
        }
        public void setMintemp_c(double mintemp_c) {
            this.mintemp_c = mintemp_c;
        }
        // Getter y setter
    }

    public static class Condition { //condción del clima
        private String text;
        private String icon;

        public String getIcon() {
            return icon;
        }
        public String getText() {
            return text;
        }
        public void setIcon(String icon) {
            this.icon = icon;
        }
        public void setText(String text) {
            this.text = text;
        }
        // Getter y setter
    }
}