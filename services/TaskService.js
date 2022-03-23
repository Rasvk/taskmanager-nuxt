import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getTasks() {
    return apiClient.get('/tasks')
  },
  getTask(id) {
    return apiClient.get('/tasks/' + id)
  },
  postTask(task) {
    return apiClient.post('/tasks', task)
  },
  deleteTask(task) {
    return apiClient.delete(`/tasks/${task.id}`)
  },
  getUser(id) {
    return apiClient.get('/users/' + id)
  }
}
