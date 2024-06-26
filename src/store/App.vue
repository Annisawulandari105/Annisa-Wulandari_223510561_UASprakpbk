<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <q-toolbar-title>Weather App</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import WeatherWidget from './components/WeatherWidget.vue';

export default {
  components: {
    WeatherWidget,
  },
};
</script>
