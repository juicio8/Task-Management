<script setup>
import {ref} from 'vue'
const topic = ref('')
const priority = ref('')
const summary = ref('')

defineEmits(['save', 'cancel'])


</script>


<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] z-50 flex flex-col items-center justify-center">
        <div @click="$emit('cancel')" class="w-[100vw] h-[100vh] fixed top-0 backdrop-blur-sm">
            </div>
            <div class="h-[70vh] w-[80%] max-h-[350px]  relative max-w-[650px] border border-gray-500 shadow-sm rounded-md bg-white p-4">
                <!-- <span class="absolute w-5 h-5 flex justify-center items-center rounded-full bg-red-500 -top-2 -left-2">x</span> -->
                <div class="">
                    <label class="text-sm">TOPIC </label>
                    <input v-model="topic" type="text" class="my-2 focus:outline-none border border-gray-500 p-1 block rounded-md w-full" >
                </div>
                <div class="">
                    <label class="text-sm">PRIORITY </label>
                    <select v-model="priority" id="colorSelect" class="my-2 focus:outline-none border border-gray-500 py-2 block rounded-md w-full">
                        <option value="low">
                                Low
                        </option>
                        <option value="medium" class="p-2">
                                Medium
                        </option>
                        <option value="high">
                                High
                        </option>
                    </select>
                </div>
                <div class="">
                    <label class="text-sm">SUMMARY </label>
                    <textarea v-model='summary' type="text" class="my-2 focus:outline-none border border-gray-500 p-1 block rounded-md w-full" ></textarea>
                </div>

                <div class="text-sm mt-5 flex gap-3"><button @click="$emit('save', {topic, priority, summary})" class="bg-blue-700 text-white py-2 px-5 rounded-md">SAVE</button> <button @click="$emit('cancel')" class="border border-red-700 py-2 px-5 rounded-md hover:bg-red-700 hover:text-white">CANCEL</button></div>
                
            </div>

        </div>
    
</template>

