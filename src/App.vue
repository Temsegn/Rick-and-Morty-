<template>
    <navigation />
    <RouterView />
  </template>
  
  <script setup>
  import { RouterView } from "vue-router";
  import navigation from "./components/navigation.vue";
  </script>
  