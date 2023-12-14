<script setup>
import { ref } from 'vue';
import { useTasksStore } from '@/stores/tasks'

const store = useTasksStore()


let props = defineProps({id: String, topic:String, summary: String, swimlane: String, priority:String})
let color
let option

const show = ref(false)
const showOption = ref(false)

function setShow(){
    console.log('kk')
    show.value = false
}
if (props.swimlane === 'in progress'){
     color = 'hover:border-blue-500'
     option="hover:text-blue-500"
}

else if (props.swimlane === 'to do'){
    color = 'hover:border-gray-500'
    option="hover:text-gray-500"

}
else{
    color = 'hover:border-green-600'
    option="hover:text-greeb-600"

}
let priorityColor = props.priority === 'high'? 'text-red-500': props.priority === 'medium'? 'text-orange-500': 'text-yellow-500'
console.log(color)

function deleteTask(id){
    store.deleteTask(id)
}

function changeLane(id, progress){
    console.log(id, progress)
    store.changeProgress(id, progress)
    showOption.value = false
    show.value = false
}
</script>

<template>
    <div :class="['border border-[text-[#1d2433cc] shadow-sm rounded-md min-h-[100px] cursor-pointer hover:border', color]">
    <div class="p-3 flex justify-between items-center"> <span>{{ topic.toUpperCase() }}</span>    <i :class="['fa-solid fa-tag text-4xl', priorityColor]"></i></div>        
    <div class="text-sm p-3 flex justify-between">
        <div>{{ summary }}</div>
        <div v-show="show"  @click.prevent="setShow" class="w-[100vw] z-50 h-[100vh] fixed top-0 left-0 right-0">
        </div>

        <div :class="['p-3 relative',option]" @click="show = true"><i class="fa-solid fa-ellipsis-vertical"></i>
            <div>
                <div v-if='show && !showOption' class="absolute top-0 z-50 -left-20 bg-white min-w-[150px] rounded-md border border-gray-500 ">
                    <div class="py-2 px-4 text-gray-600 hover:bg-red-800 hover:text-white" @click="deleteTask(id)">Remove</div>
                    <div @click="showOption = true" class="py-2 px-4 text-gray-600 hover:bg-gray-500 hover:text-white">Switch Progress</div>
                </div>
                <div v-if='show && showOption' class="absolute top-0 z-50 -left-20 bg-white min-w-[150px] rounded-md border border-gray-500 ">
                    <div class="py-2 px-4 text-gray-600 hover:bg-gray-500 hover:text-white" @click="changeLane(id, 'to do')">To Do</div>
                    <div class="py-2 px-4 text-gray-600 hover:bg-gray-500 hover:text-white" @click="changeLane(id, 'in progress')">In Progress</div>
                    <div class="py-2 px-4 text-gray-600 hover:bg-gray-500 hover:text-white" @click="changeLane(id, 'completed')">Completed</div>
                
                </div>
    
            </div>
        </div>
    </div>
</div>
</template>