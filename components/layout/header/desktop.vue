<template >
    <div class="bg-slate-200 dark:bg-slate-800 py-3">
        <div class="container">
            <div class="flex items-center justify-between text-teal-900 dark:text-teal-200 w-full">
                <div class="flex items-center gap-3">
                    <nuxt-link class="p-2 leading-3 font-bold">Home</nuxt-link>
                    <nuxt-link class="p-2 leading-3">About</nuxt-link>
                    <nuxt-link class="p-2 leading-3">Blog</nuxt-link>
                </div>
                <div>
                    <div class="focus:outline-none focus-visible:outline-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-75 hover:bg-slate-400 dark:hover:bg-slate-600 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover: focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">
                    <Icon @click="setLight" v-if="isDark" class="w-7 h-7" name="ph:sun" color="white" />
                    <Icon @click="setDark" v-else class="w-7 h-7" name="ph:moon" color="black" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup >
const { isDark, setDark , setLight } = useTheme()

</script>