<script setup>
    import {useCounterStore} from '../stores/store.js'
    const store = useCounterStore()
    //store.check()
</script>
<template>

    <div class="form_container">

        <div class="form_row">
            <label for="firstname">First name</label>
            <input id="firstname" type="text" v-model="store.firstname" placeholder="Введите ваше имя" required>
        </div>

        <div class="form_row">
            <label for="secondname">Second name</label>
            <input id="secondname" type="text" v-model="store.secondname" placeholder="Введите вашу фамилию" required>
        </div>

        <div class="form_row">
            <button type="submit" @:click="store.send()">Send message</button>
        </div>

    </div>

</template>
