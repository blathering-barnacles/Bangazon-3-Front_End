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


}

export default new APIManager()