import axios from 'axios'

export default axios.create({

    baseURL: 'http://localhost:8000/api',
})

axios.interceptors.response.use(undefined, error => {
    if(error.response.status === 400) {
        throw error.response
    }
})

axios.interceptors.request.use(function (config: any) {
  
    //  removing trailing slash from end of url
    //  this little slash (which seems its called trailing), causes CORS error
  
    config.url = config.url.replace(/\/$/, "");
    
    return config;
});