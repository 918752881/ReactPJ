import Axios from "axios"
//配置
Axios.defaults.baseURL ='https://www.easy-mock.com/mock/5c2e9b8b7096eb383e0cc291/example';
//Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;//token
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//该格式需要qs插件转换



//拦截器
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
export default Axios