<template >
    <div class="bg-slate-200 py-2">
        <div class="px-4 md:container flex items-center justify-between">
            <div class="flex items-center gap-3 text-teal-900">
                <nuxt-link to="/" class="font-medium text-lg" >
                    Home
                </nuxt-link>
                <nuxt-link to="/blog" class="" >
                    Blog
                </nuxt-link>
            </div>
            <div>
                <Icon class="w-8 h-8" name="uil:github" color="#134E4A" />
            </div>
        </div>
    </div>
</template>



<script setup >
const router = useRouter()

</script>