<script setup>
import {ref} from 'vue'
import { useTasksStore } from '@/stores/tasks'
import Header from './components/Header.vue';
import CreateModal from './components/CreateModal.vue';
import SwimLane from './components/SwimLane.vue';

const store = useTasksStore();
const show = ref(false)

function save(props){
  store.addTask(props)
  show.value = false
}

</script>

<template>
  <Header/>
  <main class="my-[100px] px-5">
    <CreateModal @save="save" @cancel="show = false" v-if="show"/>
    <button @click="show = true" class="border border-[#1d2433cc] hover:shadow-md p-3 rounded-md mb-4">CREATE TASK</button>
    <SwimLane/>
  </main>
</template>


