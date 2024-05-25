<template>
  <div class="py-5 ml-16 mt-4 flex justify-between pt-3 shadow-lg border-gray-900">
    <h1 class="text-4xl font-bold text-white"><span class="text-blue-500">Rick</span> and Morty</h1>
    <div class="flex gap-2 mt-2 menu">
      <div v-for="(lin,index) in links" class="text-gray-500" 
      :class="{
         'menu-none':!toggle,
           
       }" :key="index">
        <RouterLink :to="`${lin.link}`" class="mx-3 text-3xl font-bold hover:text-gray-400">{{
          lin.home
        }}</RouterLink>
      </div>
     
    </div>
    <div class="toggler mr-3 flex-row " @click="toggleMenu">
      <div class="bg-white h-2 w-12"></div>
      <div class="bg-white h-2 w-12 my-1"></div>
      <div class="bg-white h-2 w-12"></div>


    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { RouterLink } from 'vue-router'
const links = [
  {
    home: 'Home',
    link: '/'
  },
  {
    home: 'Episode',
    link: '/episode'
  },
  {
    home: 'Location',
    link: '/location'
  },
  {
    home: 'Character',
    link: '/character'
  }
]

const toggle=ref(false)
const toggleMenu=()=>{
    toggle.value=!toggle.value
}
</script>

<style>

</style>
