const apiUrl = 'http://127.0.0.1:8000/api/v1/'

class APIManager {


  getAll = (resource) => {
    let url = `${apiUrl}${resource}/`

    return fetch(url)
      .then(response => response.json())
      .catch(err => console.log("oops!", err))
  }


  search = (resource, keyword) => {
    let query = `?search=${keyword}`
    this.getAll(resource, query)
  }

  create = (resource, newObj) => {
    let formData = new FormData()
    for (let key in newObj) {
      formData.append(key, newObj[key])
    }

    fetch(`${apiUrl}${resource}/`, {
        method: 'POST',
        body: formData
      })
      .then(newData => newData.json())
      .then(newData => {
        console.log("added?", newData)
        this.getAll(resource)
      })
  }
}

export default new APIManager()