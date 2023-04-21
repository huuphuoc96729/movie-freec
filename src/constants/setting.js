export const URL_API = process.env.REACT_APP_URL_API;

export const getData = async (params) => {
  try {
    return await fetch(URL_API + params)
      .then(response => {
        return response.json()
      })
  } catch (e) {
    return e
  }

}
