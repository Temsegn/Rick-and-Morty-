<template>
    <div>
       <div class=" mx-20 bg-white my-2 rounded-lg p-2">
            <p class="text-3xl text-center text-gray-950 font-bold">
                {{ result.episode.name }}
            </p>
            <p class="text-2xl  text-red-700 font-bold">
               episode : {{ result.episode.episode }}
           </p>
           <p class="text-2xl  text-red-700 font-bold">
               air_date :{{ result.episode.air_date }}
           </p>
           <p class="text-2xl  text-red-700 font-bold">
               created : {{ result.episode.created }}
           </p>
       </div>
        <RouterLink to="/character" class="text-3xl font-bold text-blue-400 ml-12">
           characters <small class="text-gray-600 text-sm ">(in {{ result.episode.name }})</small>
         </RouterLink>
         <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           <div  v-for="c in result.episode.characters" :key="c.id" class="p-10">  
              <router-link 
             :to="`/character/${c.id}` "

             class="max-w-sm  overflow-hidden shadow-lg  rounded-2xl ">
               <div class="relative">
                 <div 
                 :class="{
                   'bg-green-500': c.status === 'Alive',
                   'bg-red-500': c.status === 'Dead',
                   'bg-blue-700': c.status === 'unknown'
 
                 }"
                 class="inline-block  rounded-lg px-3 py-0 text-lg font-bold  mr-2 mb-2 absolute right-2 top-2 text-white">{{ c.status}}</div>
 
               <img class="w-full h-64 object-cover " :src="c.image" alt="Mountain">
               </div>
               <div class="px-6 py-4">
                 <router-link
                 :to="`/character/${c.id}` "
                 class="font-bold text-xl mb-2 hover:text-blue-500 hover:underline"> {{c.name}}</router-link>
                  
               </div>
 
               <div class="px-6 pt-4 pb-2">
                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ c.status }}</span>
 
                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ c.species }}</span>
                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ c.gender }}</span>
               </div>
           </router-link>
           </div>
         </div>  
    </div>
   <RouterView/>
</template>
   <script setup>
   import { defineProps } from 'vue';
   import gql from 'graphql-tag'
   import { useQuery } from '@vue/apollo-composable'
   import { RouterLink } from 'vue-router';
   
   const props = defineProps(['id']);
   
   const Episode_QUERY = gql`
     query GetLocation($id: ID!) {
       episode(id: $id) {
         id
         name  
         air_date
         created
         episode
         characters
         {
            id
            name
            status
            species
            gender
            image
         }
         
        
         
       }
     }
   `;
   
   const { result, loading, error } = useQuery(Episode_QUERY, { id: props.id });
   </script>