<script setup >
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const greaterThanLg = breakpoints.greaterOrEqual("lg")
const lg = ref(true)


watch(
    greaterThanLg ,
    () => {
        lg.value =  greaterThanLg.value
    },
    {immediate: true}
)

</script>

<template >
    <LayoutHeaderDesktop v-if="lg" />
    <LayoutHeaderMobile v-else />
</template>