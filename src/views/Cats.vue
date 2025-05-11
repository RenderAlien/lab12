<script setup>
    import {useCounterStore} from '../stores/store.js'
    const store = useCounterStore()
    store.GetApiData();
    //store.check()
</script>

<template>
    <div v-if="store.fetchdata && store.fetchdata.length">
        <img :src="store.fetchdata[0].url" alt="Loaded Image">
    </div>
    <div v-else>
        <div class="text">Loading...</div>
    </div>
</template>
