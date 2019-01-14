let API_URL = null
let BASE_URL = null

if (process.env.NODE_ENV === 'production') {
  API_URL = `https://my-statify-backend.herokuapp.com/`
  BASE_URL = `${window.location.protocol}//${window.location.hostname}`
} else {
  const API_HOST = `${window.location.protocol}//${window.location.hostname}`
  API_URL = `${API_HOST}:8082/`
  BASE_URL = `${API_HOST}:8080/`
}

export { API_URL, BASE_URL }
