const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}
let server = ''

function addBearer(token) {
  headers['Authorization'] = 'Bearer ' + token
}

function addServer(baseUrl) {
  server = baseUrl
}

async function fetchUrl(url, method, body) {
  const response = await fetch(server + url, {
    method,
    headers,
    body: JSON.stringify(body),
  })
  return response.json()
}

async function post(url, body = {}) {
  return await fetchUrl(url, 'POST', body)
}

async function put(url, body = {}) {
  return await fetchUrl(url, 'PUT', body)
}

export default { addBearer, addServer, post, put }
