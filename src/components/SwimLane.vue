<script setup>
import Card from './Card.vue';
import { useTasksStore } from '@/stores/tasks'

const store = useTasksStore()



</script>

<template>
  <div class="flex justify-between gap-5">
    <div class="w-[100%] min-h-screen pb-4 border border-gray-500 rounded-md shadow-sm">
      <div  class="bg-gray-500 py-2 rounded-t-md font-medium text-white text-center">TO DO</div>
      <div class="px-4 pt-5" v-for="task in store.toDo">
        <Card :id='task.id' :summary="task.summary" :topic="task.topic" swimlane="to do" :priority="task.priority"/>
      </div>

    </div>
    <div class="w-[100%] min-h-screen border border-blue-500 pb-4 rounded-md shadow-sm">
      <div class="bg-blue-400 py-2 rounded-t-md font-medium text-white text-center">IN PROGRESS</div>
      <div class="px-4 pt-5" v-for="task in store.inProgress">
        <Card :id='task.id' :summary="task.summary" :topic="task.topic" swimlane="in progress" :priority="task.priority"/>

      </div>
    </div>
    <div class="w-[100%] min-h-screen border pb-4 border-green-600 rounded-md shadow-sm">
      <div class="bg-green-600 py-2 rounded-t-md font-medium text-white text-center">COMPLETED</div>
      <div class="px-4 pt-5" v-for="task in store.completed">
        <Card :id='task.id' :summary="task.summary" :topic="task.topic" swimlane="completed" :priority="task.priority"/>

      </div>
    </div>
    
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
