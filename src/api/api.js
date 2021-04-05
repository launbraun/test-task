import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://reqres.in/'
})

export const userAPI = {
    getUsers(page = 2){
        return instance.get(`/api/users?page=${page}`)
            .then(response => response.data)
    }
}
