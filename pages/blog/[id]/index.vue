<script setup lang="ts">
// import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template >
    <div>
        <h1 class="p-4 bg-red-700 " >
            Blog Single Page
        </h1>
        <p>
            {{ route.params.id }}
        </p>
    </div>
</template>