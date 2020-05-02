import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-6e424.firebaseio.com/'
})