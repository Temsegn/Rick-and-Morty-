<template>
  <div class="my-4 flex justify-center">
    <input
      type="text"
      v-model="search"
      name=""
      id=""
      class="border-2 px-2 w-96 mr-2 border-slate-500 rounded-xl text-lg text-gray-800 font-semibold"
      placeholder="Search for character"
    />
    <button class="bg-blue-500 text-white px-4 py-2 text-lg rounded-xl">search</button>
  </div>
  <h1 class="text-center text-4xl font-bold ">Characters</h1>

  <div v-if="loading">
    Loading...
  </div>
  <div v-else-if="error">
    Error: {{ error.message }}
  </div>

  <div v-else-if="!filteredCharacters.length">
    No characters found!
  </div>

  <div v-else class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20">
    <div v-for="c in filteredCharacters" :key="c.id" class="p-8 hover:p-6 hover:delay-1000 hover:scroll-smooth">
      <router-link :to="`/character/${c.id}` " class="max-w-sm overflow-hidden shadow-lg ">
        <div class="relative">
          <div
            :class="{
              'bg-green-500': c.status === 'Alive',
              'bg-red-500': c.status === 'Dead',
              'bg-blue-700': c.status === 'unknown'
            }"
            class="inline-block rounded-lg px-3 py-0 text-lg font-bold mr-2 mb-2 absolute right-2 top-2 text-white"
          >{{ c.status }}</div>
          <img class="w-full h-64 object-cover" :src="c.image" alt="Character Image" onError="this.src='placeholder.jpg'"/>
        </div>
        <div class="px-6 py-4">
          <router-link :to="`/character/${c.id}` " class="font-bold text-3xl mb-2 hover:text-blue-500 hover:underline">{{ c.name }}</router-link>
        </div>
      </router-link>
    </div>
  </div>

  <div class="flex justify-around py-6 ">
    <button @click="decrementCount" class="bg-white hover:bg-gray-400 text-gray-800 text-lg font-bold rounded-full w-14 h-14 text-center">prev</button>
    <button class="bg-gray-900 hover:bg-gray-800 text-gray-400 font-bold w-24 rounded-lg h-14 p-1 text-center">page-{{ page }}</button>
    <button @click="incrementCount" class="bg-white hover:bg-gray-400 text-gray-800 text-lg font-bold rounded-full w-14 h-14 text-center">next</button>
  </div>

  <div class="text-center my-6">
    <h1 class="block text-2xl my-6 ">Get the design and the source code</h1>
    <a href="https://github.com/Temsegn/Rick-and-morty-website" class="hover:text-blue-500 hover:underline justify-center text-3xl gap-12 font-bold my-12 ">Github</a>
    <a href="https://www.figma.com/design/5lrXCgbwuuW8GWDOSH0u0C/Rick-and-Morty-show?node-id=2-2&t=6t3nXVEdLvQb9Mc7-0" class="hover:text-blue-500 hover:underline mx-12 justify-center text-3xl gap-12 font-bold my-12">Figma  </a>
  </div>
</template>

<script>
import { ref } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
 
const CHARACTERS_QUERY = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      results {
        id
        image
        name
      }
    }
  }
`
export default {
  name: 'CharacterPage',
  setup() {
    const search = ref('')
    const page = ref(1)
    const pre = ref(0)

    const next = ref(2)
    const incrementCount = () => {
      if (page.value == 42) return

      page.value++
      pre.value++
      next.value++
    }
    const decrementCount = () => {
      if (page.value == 1) return

      page.value--
      pre.value--
      next.value--
    }
    const { result, loading, error } = useQuery(CHARACTERS_QUERY, () => ({
      page: page.value // Pass page value to the query
    }))

    return {
      result,
      loading,
      error,
      incrementCount,
      decrementCount,
      page,
      pre,
      next,
      search
    }
  },
  computed: {
    filteredCharacters() {
      return this.result.characters.results.filter((eps) => {
        return eps.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
