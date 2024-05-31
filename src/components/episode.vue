<template>
  
  <div class="my-4 flex justify-center">
    <input
      type="text"
      v-model="search"
      name=""
      id=""
      class="border-2 px-2 w-96  mr-2 border-slate-500 rounded-xl text-lg text-gray-800 font-semibold"
      placeholder="Search for episode"
    />
    <button class="bg-blue-500 text-white px-4 py-3  text-lg rounded-xl">search</button>
  </div>
  <h1 class="text-center text-4xl font-bold ">
    Episode
</h1>
  <div class=" m-2 border-gray-900 rounded-2xl">
    <div class="flex flex-wrap mx-10  justify-center gap-6 mx-4">
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading" class="pl-16 py-2 text-lg">Loading...</p>
      <RouterLink 
        :to="`/episode/ ${episode.id}`"
        v-else
        v-for="episode in filteredEpisodes"
        :key="episode.id"
        class="p-2 "
      >
        <!--Card 1-->
        <div class="w-56 h-32 rounded-md overflow-hidden shadow-lg bg-gray-200">
           <div class="px-2 pt-1 text-blue-700 font-bold">
            <div class="text-xl p-2 hover:underline hover:text-gray-950">{{ episode.name }}</div>
            <div class="text-xl p-2 hover:underline hover:text-gray-950">{{ episode.episode }}</div>

          </div>
        </div>
      </RouterLink>
       
    </div>
    <div class="flex justify-around py-6  mt-10 ">
      <button @click="decrementCount" 
      class="bg-white hover:bg-gray-400  text-gray-800 text-lg font-bold rounded-full w-14 h-14  text-center"      >
      prev 
      </button>
      <button
         
        class="bg-gray-900 hover:bg-gray-800  text-gray-400 font-bold  w-24 rounded-lg h-14 p-1 text-center"      >
         page-{{ page }}
      </button>
      <button
        type="button"
        @click="incrementCount"
        class="bg-white hover:bg-gray-400  text-gray-800 text-lg font-bold rounded-full w-14 h-14  text-center"      >
      next 
       
      </button>
    </div>
     
  </div>
</template>

<script>
import { ref } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { RouterLink } from 'vue-router'

const CHARACTERS_QUERY = gql`
  query Characters($page: Int!) {
    episodes(page: $page) {
      results {
        id
        name
        episode
      }
    }
  }
`
export default {
  name: 'CharacterPage',
  setup() {
    const  search=ref('')
    const page = ref(1)
    // Define page variable in setup
    const pre = ref(0)
 
    const next = ref(2)
    const incrementCount = () => {
      if (page.value == 3) return
     
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
      search,
 
    }
  },
  computed: {
        filteredEpisodes() {
          return this.result.episodes.results.filter((eps) => {
            return eps.name.toLowerCase().includes(this.search.toLowerCase())
          })
        }
      }

}
</script>
