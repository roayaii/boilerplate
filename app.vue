<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>


<script setup >
const {theme} = useTheme()
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My boilerPlate' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  htmlAttrs: {
    class: 'dark'
  }

})


</script>
