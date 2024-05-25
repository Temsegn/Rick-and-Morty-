<template>
  <div class="mt-10">
    <carousel :slides="slides"> </carousel>

    <div class="container mx-auto mt-36 px-6 py-3">
      <h1 class="text-4xl  font-bold text-white mb-4 text-center">Rick And Morty</h1>
      <p class="text-xl ">
        Rick and Morty is an American adult animated television series created by Dan Harmon and
        Justin Roiland that premiered on December 2, 2013 on Cartoon Network's Adult Swim
        programming block. In Canada, it premiered on January 10, 2016 on the Canadian version of
        Cartoon Network's Adult Swim programming block. Rick and Morty is an adult animated science
        fiction sitcom created by Justin Roiland and Dan Harmon. The show follows the misadventures
        of cynical mad scientist Rick Sanchez and his good-hearted but easily influenced grandson
        Morty Smith, who split their time between domestic family life and interdimensional
        adventures.
      </p>
      <div class="mt-10">
        <h3 class="text-xl text-gray-500">
          Created by - <span class="text-white"> Justin Roiland Dan Harmon</span>
        </h3>
        <div>
          <h2 class="text-xl text-gray-500">Stars of the show</h2>
          <ul class="text-white text-xl">
            <li class="text-white text-lg">
              Justin Roiland as the voices Of
              <ul class="ml-10 text">
                <li>Rick Sanchez</li>
                <li>Morty Smith</li>
              </ul>
            </li>
            <li class="">Chris Parnell as the voice of Jerry Smith</li>
            <li>Spencer Grammer as the voice of Summer Smith</li>
            <li>Sarah Chalke as the voice of Beth Smith</li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl">Rate</h2>

          <p class="flex">
            <svg
              class=""
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              style="fill: yellow; transform: msFilter"
            >
              <path
                d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 
    1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998
     0 0 0 .832-.586L12
     5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 
    0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              style="fill: yellow; transform: msFilter"
            >
              <path
                d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 
     1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998
      0 0 0 .832-.586L12
      5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 
     0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              style="fill: yellow; transform: msFilter"
            >
              <path
                d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 
       1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998
        0 0 0 .832-.586L12
        5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 
       0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              style="fill: yellow; transform: msFilter"
            >
              <path
                d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 
         1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998
          0 0 0 .832-.586L12
          5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 
         0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              style="fill: yellow; transform: msFilter"
            >
              <path
                d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 
           1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998
            0 0 0 .832-.586L12
            5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 
           0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              style="fill: yellow; transform: msFilter"
            >
              <path
                d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 
             1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998
              0 0 0 .832-.586L12
              5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 
             0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              style="fill: yellow; transform: msFilter"
            >
              <path
                d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 
               1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998
                0 0 0 .832-.586L12
                5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 
               0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              style="fill: yellow; transform: msFilter"
            >
              <path
                d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 
                 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998
                  0 0 0 .832-.586L12
                  5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 
                 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
              ></path>
            </svg>
          </p>
          <span>9.1/10</span>
          <p><span>Views - </span> 604K</p>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center my-6">
    <h1 class="block text-2xl my-6">Get the design and the source code</h1>

    <a
      href="https://github.com/Temsegn/Rick-and-morty-website"
      class="hover:text-blue-500 hover:underline justify-center text-3xl gap-12 font-bold my-12"
      >Github</a
    >
    <a
      href=""
      class="hover:text-blue-500 hover:underline mx-12 justify-center text-3xl gap-12 font-bold my-12"
      >Figma</a
    >
  </div>
</template>

<script>
import carousel from '../components/carousel.vue'
export default {
  name: 'homeView',
  components: { carousel },
  data() {
    return {
      slides: [
        'https://i.pinimg.com/originals/d9/f1/74/d9f174c6c96eb974336e6584948a9250.jpg',
        'https://i.pinimg.com/originals/68/5a/a5/685aa59b604b9f4ca67f5dd0c277e7fe.jpg',
        'https://i.pinimg.com/originals/33/83/5e/33835e890e14f711ee5135846411ad9c.jpg',
        'https://i.pinimg.com/originals/53/7e/4c/537e4c7d18b261d2f93827d5ef389934.jpg',
        'https://i.pinimg.com/originals/c6/0e/3c/c60e3c5218ffb5c0285405ef770df9c6.jpg',
        'https://i.pinimg.com/originals/d3/1e/bb/d31ebb10daffeeefac41ce2188545739.jpg'
      ]
    }
  }
}
</script>
