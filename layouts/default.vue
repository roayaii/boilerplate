<template >
    <div class=" text-slate-800 dark:text-slate-200 min-h-screen flex flex-col">
        <LayoutHeader />
        <div class="dark:bg-black dark:text-white h-full grow" >
            <slot  />
        </div>
    </div>
</template>