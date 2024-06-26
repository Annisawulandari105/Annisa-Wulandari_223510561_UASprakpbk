<template>
    <div>
      <q-input v-model="location" label="Masukkan Lokasi" @keyup.enter="fetchWeather" />
      <q-btn label="Cari" @click="fetchWeather" />
      <div v-if="weatherData">
        <h3>Weather in {{ location }}</h3>
        <p>Temperature: {{ weatherData.main.temp }}°C</p>
        <p>Weather: {{ weatherData.weather[0].description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        location: '',
        weatherData: null,
      };
    },
    methods: {
      async fetchWeather() {
        const apiKey = 'YOUR_API_KEY';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}&units=metric`);
        this.weatherData = response.data;
      },
    },
  };
  </script>
  