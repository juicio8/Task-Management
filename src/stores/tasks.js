import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';


export const useTasksStore = defineStore('tasks', () => {
  let tasks = reactive([{
    id: uuidv4(),
    topic: 'fix responsiveness',
    priority: 'high',
    progress: 'to do',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Animi ipsam voluptatibus dignissimos quia rem facilis molestias nostrum, nobis soluta? Neque.'
  }, {
    id: uuidv4(),
    topic: 'documentation',
    priority: 'low',
    progress: 'completed',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam voluptatibus dignissimos quia rem facilis molestias nostrum, nobis soluta? Neque.'
  },
  {
    id: uuidv4(),
    topic: 'design logo',
    priority: 'medium',
    progress: 'in progress',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam voluptatibus dignissimos quia rem facilis molestias nostrum, nobis soluta? Neque.'
  },
  {
    id: uuidv4(),
    topic: 'ci/cd pipelines',
    priority: 'high',
    progress: 'in progress',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam voluptatibus dignissimos quia rem facilis molestias nostrum, nobis soluta? Neque.'
  } 
])

  const inProgress = computed(() => tasks.filter((task) => task.progress === 'in progress'))
  const completed = computed(() => tasks.filter((task) => task.progress === 'completed'))
  const toDo = computed(() => tasks.filter((task) => task.progress === 'to do'))


  function addTask({topic, priority, summary}) {
    tasks.push({
      id: uuidv4(),
      topic: topic,
      priority: priority,
      progress: 'to do',
      summary: summary
    })
  }

  function deleteTask(id) {

    tasks.splice(tasks.findIndex((task) => task.id === id), 1)
  }

  function changeProgress(id, progress) {
    const taskIndex = tasks.findIndex((task) => task.id === id)
    tasks[taskIndex].progress = progress
  }

  return { tasks, addTask, deleteTask, inProgress, completed, toDo, changeProgress }
})
