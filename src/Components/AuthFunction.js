import axios from 'axios'

export const login = user =>{
    return axios
    .post('http://127.0.0.1:8000/api/login',{
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('token', res.data.token)
        return res.data
    })
    .catch(err => {
        console.log(err)        
    })
}
