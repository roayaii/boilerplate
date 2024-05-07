<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>


<script setup >
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My boilerPlate' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  htmlAttrs : {
    class: "transition-all duration-500"
  }
})


</script>
