const apiUrl = 'http://127.0.0.1:8000/api/v1/'

class APIManager {


  getAll = (resource) => {
    let url = `${apiUrl}${resource}/`

    return fetch(url)
    .then(response => response.json())
    .catch(err => console.log("oops!", err))
  }

  getSingle = (resource, id, apiUrl, stateToSet) => {
    let url = `${apiUrl}${resource}/${id}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({[stateToSet]: data})
    })
  }

  create = (resource, newObj) => {
    let formData = new FormData()
    for ( let key in newObj ) {
      formData.append(key, newObj[key])
    }

    return fetch(`${apiUrl}${resource}/`, {
      method: 'POST',
      body: formData
    })
    .then( newData => newData.json())
  }


  edit = (resource, newObj, id) => {

    let formData = new FormData()
    for ( let key in newObj ) {
      formData.append(key, newObj[key])
    }

    return fetch(`${apiUrl}${resource}/${id}/`, {
      method: 'PATCH',
      body: formData
    })
    .then( newData => newData.json())
  }

  delete = (resource, id) => {

  return fetch(`${apiUrl}${resource}/${id}/`, {
    method: 'DELETE',
   })


  }



}

export default new APIManager()