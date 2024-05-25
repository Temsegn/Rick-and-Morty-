<template>
     <button class="carousel-control bg-gray-900 inline-block absolute h-16 w-16 rounded-full top-36 cursor-pointer hover:bg-gray-600 hover:p-1 " left @click="$emit('prev')">
      prev
     </button>
     <button class="carousel-control bg-slate-900 inline-block absolute h-16 w-16 rounded-full top-36 cursor-pointer right-1 hover:bg-gray-600 hover:p-1" left  @click="$emit('next')">
        next
    </button>
</template>

<script>
export default
{
     emits:['prev','next']
}

</script>