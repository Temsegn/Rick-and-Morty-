<template>
  <div class="my-4 flex justify-center">
    <input
      type="text"
      v-model="search"
      name=""
      id=""
      class="border-2 px-2 w-96  mr-2 border-slate-500 rounded-xl text-lg text-gray-800 font-semibold"
      placeholder="Search for location"
    />
    <button class="bg-blue-500 text-white px-4 py-2  text-lg rounded-xl">search</button>
  </div>
  <h1 class="text-center text-4xl font-bold ">
      Location
  </h1>
  <div class="border-0 pt-6 border-gray-900 rounded-2xl mx-2">
    <div class="flex flex-wrap mx-10  justify-center gap-6 mx-4">
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading" class="pl-16 py-2 text-lg">Loading...</p>
      <router-link 
        :to="`/location/ ${location.id}`"
        v-else
        v-for="location in filteredLOcations"
        :key="location.id"
        class="p-2 "
      >
        <!--Card 1-->
        <div class="w-56 h-32 rounded-md overflow-hidden shadow-lg bg-gray-200">
           <div class="px-2 pt-1 text-blue-700 font-bold">
            <div class="text-xl p-2 hover:underline hover:text-gray-950">{{ location.name }}</div>
            <div class="text-xl pl-2 hover:underline hover:text-gray-950">{{ location.type }}</div>

          </div>
        </div>
      </router-link>
       
    </div>
    <div class="flex justify-around py-6  ">
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
    <div class="text-center my-6">
      <h1 class="block text-2xl my-6 ">Get the design and the source code</h1>
  
       <a href="https://github.com/Temsegn/Rick-and-morty-website" class="hover:text-blue-500 hover:underline  justify-center text-3xl gap-12 font-bold my-12 ">Github</a>
       <a href="" class="hover:text-blue-500 hover:underline mx-12 justify-center text-3xl gap-12 font-bold my-12">Figma</a>
  
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
 
const CHARACTERS_QUERY = gql`
  query Characters($page: Int!) {
    locations(page: $page) {
      results {
        id
        name
         type
         dimension
      }
    }
  }
`
export default {
  name: 'locationPage',
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
    filteredLOcations() {
          return this.result.locations.results.filter((eps) => {
            return eps.name.toLowerCase().includes(this.search.toLowerCase())
          })
        }
      }

}
</script>
