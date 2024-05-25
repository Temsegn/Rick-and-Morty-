<template>
  <div class="carousel flex justify-center">
    <div class="carousel-inner relative overflow-hidden  object-cover">
      <carouselItem
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        :slide="slide"
        :index="index"
        :current-slide="currentSlide"
      >
      </carouselItem>
      <carouselControl @prev="prev" @next="next"> </carouselControl>
    </div>
  </div>
</template>

<script>
import carouselItem from './carouselItem.vue'
import carouselControl from './carouselControl.vue'

export default {
  props: ['slides'],
  components: { carouselItem, carouselControl },
  data() {
    return {
      currentSlide: 0,
      slideInterval: null
    }
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index
    },
    prev() {
      const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1
      this.setCurrentSlide(index)
    },
    next() {
      const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0
      this.setCurrentSlide(index)
    }
  },
  mounted() {
    this.slideInterval = setInterval(() => {
      this.next()
    }, 5000)
  },
  beforeMount() {
    clearInterval(this.slideInterval)
  }
}
</script>

<style scoped>
.carousel-inner {
    width:70%;
    height:400px
    
}
</style>
