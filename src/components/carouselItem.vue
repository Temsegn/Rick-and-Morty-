<template>
  <transition
    name="slide-in"
    v-show="currentSlide === index"
    class="carousel-item absolute top-0 bottom-0 left-0 right-0">
      
      <img :src="slide" alt="" class=" h-96 w-full mt-3 rounded object-fill " />
      
  </transition>
</template>
<script>
export default {
  props: ['slide', 'currentSlide', 'index']
}
</script>

<style scoped>

.slide-in-enter-active,
.slide-in-leave-active
{
    transition: all 1s ease-in-out;
}

.slide-in-enter-from
{
     transform: translateX(-100%);
}

.slide-in-leave-to
{
     transform: translateX(100%);
}

</style>
