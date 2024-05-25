<template>
  <div class="grid grid-cols-1">
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <div v-else class="p-8">
      <div
        class="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-gray-900 mb-6 block ml-36"
      >
        <div class="relative">
          <div
            :class="{
              'bg-green-500': result.character.status === 'Alive',
              'bg-red-500': result.character.status === 'Dead',
              'bg-blue-700': result.character.status === 'unknown'
            }"
            class="inline-block rounded-lg px-3 py-0 text-lg font-bold mr-2 mb-2 absolute right-2 top-2 text-white"
          >
            {{ result.character.status }}
          </div>

          <img class="w-full h-64 object-cover" :src="result.character.image" alt="Mountain" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-2xl text-center">{{ result.character.name }}</div>
          <p class="text-gray-700 text-base"></p>
        </div>
        <div class="px-6 pt-4 pb-2 flex-row">
          <span
            class="block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-2"
            >Gender : {{ result.character.gender }}</span
          >
          <span
            class="block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-950 mr-2 mb-2"
            >Species : {{ result.character.species }}</span
          >
          <span
            class="block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-900 mr-2 mb-2"
          >
            location : {{ result.character.location.name }}</span
          >
          <span
            class="block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-2"
          >
            Status : {{ result.character.status }}</span
          >
        </div>
      </div>
      <RouterLink
        to="/episode"
        class="text-blue-500 text-3xl font-bold hover:text- hover:underline"
      >
        Episode
        <small class="text-gray-500 text-sm"> ({{ result.character.name }} participate)</small>
      </RouterLink>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-3 mt-6">
        <RouterLink
          :to="`/episode/${episode.id}`"
          v-for="episode in result.character.episode"
          :key="episode.id"
          class="border-2 rounded-lg flex-row border-gray-900 py-2"
        >
          <p
            class="text-3xl text-center my-4 font-bold text-white hover:underline hover:text-blue-600"
          >
            {{ episode.name }}
          </p>
          <p class="text-2xl ml-12">episode :{{ episode.episode }}</p>
          <p class="text-2xl ml-12">Air date : {{ episode.air_date }}</p>
          <p class="text-2xl ml-12">Created : {{ episode.created }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
  <RouterView />
</template>
<script setup>
import { defineProps } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { RouterLink } from 'vue-router'

const props = defineProps(['id'])

const LOCATION_QUERY = gql`
  query GetLocation($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      episode {
        id
        name
        created
        air_date
        episode
      }
      location {
        id
        name
      }
    }
  }
`

const { result, loading, error } = useQuery(LOCATION_QUERY, { id: props.id })
</script>
