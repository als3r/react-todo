const LS_TASKS_STORAGE = 'taskmeister.tasks.storage'
const LS_TASKS_STORAGE_LAST_ID = 'taskmeister.tasks.lastId'
const LS_TASKLISTS_STORAGE = 'taskmeister.tasklists.storage'
const LS_TASKLISTS_STORAGE_LAST_ID = 'taskmeister.tasklists.lastId'

const mapToJson = (map) => {
  const obj = {}
  map.forEach((value, key) => {
    obj[key] = value
  })
  return JSON.stringify(obj)
}
const jsonToMap = (json) => {
  const obj = JSON.parse(json)
  const map = new Map()

  Object.entries(obj).forEach((entry) => {
    const [key, value] = entry
    map.set(parseInt(key, 10), value)
  })
  return map
}

export const dbTaskModel = {
  create(task) {
    const tasksMap = this.getTasks()
    const taskLastId = this.getTaskLastId()
    const newId = parseInt(taskLastId + 1, 10)

    task.id = newId
    tasksMap.set(newId, task)

    this.setTasks(tasksMap)
    this.setTaskLastId(newId)
    return true
  },
  retrieve(taskId) {
    const tasksMap = this.getTasks()
    const task = tasksMap.get(taskId)
    return task
  },
  retrieveAll() {
    const tasksMap = this.getTasks()
    const tasks = []
    tasksMap.forEach((item) => tasks.push(item))
    return tasks
  },
  retrieveAllForTasklist(tasklistId) {
    const tasksMap = this.getTasks()
    const tasks = []
    tasksMap.forEach((item) => {
      if (item.tasklistId === tasklistId) {
        tasks.push(item)
      }
    })
    return tasks
  },
  update(taskId, updateFields) {
    const tasksMap = this.getTasks()
    const task = tasksMap.get(taskId)

    const updateKeyValues = Object.entries(updateFields)
    if (updateKeyValues.length) {
      updateKeyValues.forEach((keyValuePair) => {
        const [key, value] = keyValuePair
        if (key === 'isDone' || key === 'description' || key === 'tasklistId') {
          task[key] = value
        }
      })
      tasksMap.set(taskId, task)
      this.setTasks(tasksMap)
    }
    return true
  },
  delete(taskId) {
    const tasksMap = this.getTasks()
    tasksMap.delete(taskId)
    this.setTasks(tasksMap)
    return true
  },
  deleteAllForTasklist(tasklistId) {
    const tasksMap = this.getTasks()
    tasksMap.forEach((item) => {
      if (item.tasklistId === tasklistId) {
        tasksMap.delete(item.taskId)
      }
    })
    this.setTasks(tasksMap)
    return true
  },
  getTasks() {
    if (localStorage.getItem(LS_TASKS_STORAGE) === null) {
      return new Map()
    }
    const json = localStorage.getItem(LS_TASKS_STORAGE)
    const tasks = jsonToMap(json)
    return tasks
  },
  setTasks(tasksMap) {
    const json = mapToJson(tasksMap)
    localStorage.setItem(LS_TASKS_STORAGE, json)
    return this.getTasks()
  },
  getTaskLastId() {
    if (localStorage.getItem(LS_TASKS_STORAGE_LAST_ID) === null) {
      return 0
    }
    let taskLastId = localStorage.getItem(LS_TASKS_STORAGE_LAST_ID)
    taskLastId = parseInt(taskLastId, 10)
    return taskLastId
  },
  setTaskLastId(id) {
    localStorage.setItem(LS_TASKS_STORAGE_LAST_ID, parseInt(id, 10))
    return this.getTaskLastId()
  },
}

export const dbTasklistModel = {
  create(tasklist) {
    // console.log('test2')
    const tasklistsMap = this.getTasklists()
    const tasklistLastId = this.getTasklistLastId()
    const newId = parseInt(tasklistLastId + 1, 10)

    // console.log(tasklistLastId)
    // console.log('test3')

    tasklist.id = newId

    // console.log(tasklistsMap)
    // console.log(tasklist)
    // console.log(newId)

    tasklistsMap.set(newId, tasklist)

    this.setTasklists(tasklistsMap)
    this.setTasklistLastId(newId)

    return true
  },
  retrieve(tasklistId) {
    const tasklistsMap = this.getTasklists()
    const tasklist = tasklistsMap.get(tasklistId)
    return tasklist
  },
  retrieveWithTasks(tasklistId) {
    const tasklistsMap = this.getTasklists()
    const tasklist = tasklistsMap.get(tasklistId)

    tasklist.tasks = dbTaskModel.retrieveAllForTasklist(tasklistId)
    // console.log(tasklist, 'retrieveWithTasks')
    return tasklist
  },
  retrieveAll() {
    const tasklistsMap = this.getTasklists()
    const tasklists = []
    tasklistsMap.forEach((item) => tasklists.push(item))
    return tasklists
  },
  retrieveAllWithTasks() {
    const tasklistsMap = this.getTasklists()
    const tasklists = []
    tasklistsMap.forEach((item) => tasklists.push(item))
    const tasklistsWithTasks = tasklists.map((item) =>
      this.retrieveWithTasks(item.id),
    )
    return tasklistsWithTasks
  },

  update(tasklistId, updateFields) {
    const tasklistsMap = this.getTasklists()
    const tasklist = tasklistsMap.get(tasklistId)

    const updateKeyValues = Object.entries(updateFields)
    if (updateKeyValues.length) {
      updateKeyValues.forEach((keyValuePair) => {
        const [key, value] = keyValuePair
        if (key === 'name') {
          tasklist[key] = value
        }
      })
      tasklistsMap.set(tasklistId, tasklist)
      this.setTasklists(tasklistsMap)
    }
    return true
  },
  delete(tasklistId) {
    const tasklistsMap = this.getTasklists()
    tasklistsMap.delete(tasklistId)
    this.setTasklists(tasklistsMap)
    return true
  },
  deleteWithTasks(tasklistId) {
    const tasklistsMap = this.getTasklists()
    tasklistsMap.forEach((item) => {
      if (item.tasklistId === tasklistId) {
        tasklistsMap.delete(item.taskId)
      }
    })
    this.setTasklists(tasklistsMap)
    dbTaskModel.deleteAllForTasklist(tasklistId)
    return true
  },
  getTasklists() {
    if (localStorage.getItem(LS_TASKLISTS_STORAGE) === null) {
      // console.log('tasklists not exist', 'LS_TASKLISTS_STORAGE')
      return new Map()
    }
    // console.log('tasklists exist', 'LS_TASKLISTS_STORAGE')
    const json = localStorage.getItem(LS_TASKLISTS_STORAGE)
    const tasklistsMap = jsonToMap(json)
    return tasklistsMap
  },
  setTasklists(tasklistsMap) {
    const json = mapToJson(tasklistsMap)
    localStorage.setItem(LS_TASKLISTS_STORAGE, json)
    return this.getTasklists()
  },
  getTasklistLastId() {
    if (localStorage.getItem(LS_TASKLISTS_STORAGE_LAST_ID) === null) {
      return 0
    }
    let tasklistLastId = localStorage.getItem(LS_TASKLISTS_STORAGE_LAST_ID)
    tasklistLastId = parseInt(tasklistLastId, 10)
    return tasklistLastId
  },
  setTasklistLastId(id) {
    localStorage.setItem(LS_TASKLISTS_STORAGE_LAST_ID, parseInt(id, 10))
    return this.getTasklistLastId()
  },
}
