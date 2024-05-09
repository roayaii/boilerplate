<template >
    <div class="bg-slate-200 dark:bg-slate-800 py-2">
        <div class="px-4 md:container flex items-center justify-between">
            <div class="flex items-center gap-3 text-teal-900 dark:text-teal-200">
                <nuxt-link to="/" class="font-medium text-lg" >
                    Home
                </nuxt-link>
                <nuxt-link to="/blog" class="" >
                    Blog
                </nuxt-link>
            </div>
            <div class="flex items-center gap-2">
                <button class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">
                  <Icon @click="setLight" v-if="isDark" class="w-7 h-7" name="ph:sun" color="white" />
                  <Icon @click="setDark" v-else class="w-7 h-7" name="ph:moon" color="black" />
                </button>
                <Icon class="w-8 h-8" name="uil:github" color="#134E4A" />
            </div>
        </div>
    </div>
</template>



<script setup >
const router = useRouter()
const { isDark, setDark , setLight } = useTheme()

</script>

<style scoped >
/*
  📣 Note: all sizes are in ems, so change the .toggle font-size to
  scale to whatever size you need.
*/

.toggle {
  font-size: 2rem; /* 👈 change this to scale */
  border: .125em solid currentColor;
  border-radius: 2em;
  cursor: pointer;
  display: block;
  height: 2em;
  position: relative;
  width: 3.75em;
}
.toggle span {
  background-color: currentColor;
  border-radius: 2em;
  display: block;
  height: 1.5em;
  left: .25em;
  overflow: hidden;
  position: absolute;
  top: .25em;
  text-indent: -9999px;
  transition: left .25s;
  width: 1.5em;
  z-index: 2;
}

.toggle::before,
.toggle::after {
  content: '';
  display: block;
  border-radius: 1em;
  position: absolute;
  z-index: 1;
}

.toggle::after {
  box-shadow: .25em .25em #5901d8;
  height: 1.125em;
  right: .9em;
  top: .125em;
  width: 1.125em;
}

.toggle::before {
  background-color: #ffc409;
  height: .625em;
  outline: .25em dotted #ffc409;
  outline-offset: .125em;
  left: .7em;
  top: .7em;
  width: .625em;
}

input:checked ~ .toggle span {
  left: 2em;
}














.sr-only {
  position: absolute;
  left: -9999px;
  opacity: 0;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color .25s;
  color: #1e1e1e;
  background: linear-gradient(to bottom right, #eefff4 25%, #a0ffd9 50%, #5c0095 75%, #01072a);
  background-size: 300% 300%;
  background-position: top left;
  transition: background-position .5s;
}
body,
html {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}


body:has(#darkmode-toggle:checked) {
  background-position: 100% 100%;
  color: #d0d0d0;
}
</style>