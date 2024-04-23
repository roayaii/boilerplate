<script setup lang="ts">
// import { seRoute } from 'vue-router';

const route = useRoute()
</script>

<template >
    <div>
        <h1>
            Blog Single Page
        </h1>
        <p>
            {{ route.params.id }}
        </p>
    </div>
</template>