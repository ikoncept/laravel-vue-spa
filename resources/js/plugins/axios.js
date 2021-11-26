import axios from 'axios'

export default function setup () {
    axios.defaults.withCredentials = true

    // Request interceptor
    axios.interceptors.request.use(request => {
        request.url = window.config.apiUrl + request.url
        request.headers.common['Accept-Language'] = window.config.locale

        return request
    })

    // Response interceptor
    axios.interceptors.response.use(response => response, error => {
        if (!error.response) {
            return Promise.reject(error)
        }

        const { status, data } = error.response

        if (status >= 403 && status !== 422) {
            console.error({
                title: 'Something went wrong!',
                message: `${data.message} (${status})`
            })
        }

        return Promise.reject(error)
    })
}
