export const store = (key, data) => new Promise(resolve => {
  localStorage.setItem(key, JSON.stringify(data))
  resolve()
})

export const get = key => new Promise(resolve => resolve(JSON.parse(localStorage.getItem(key))))
