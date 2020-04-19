const _apiHost = 'https://jsonplaceholder.typicode.com';

async function request(url, params, method = 'GET') {
  const options = {
    method,
    header: {
      'Content-Type': 'application/json'
    }
  };

  if (params) {
    if (method === 'GET') {
      url += '?' + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params); // body should match Content-Type in headers option
    }
  }

  const response = await fetch(_apiHost + url, options);

  if (response.status !== 200) {
    return generateErrorResponse('The server responded with an unexpected status.');
  }

  const result = await response.json();

  return result;
}

function objectToQueryString(obj) {
  return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

function generateErrorResponse(message) {
  return {
    status : 'error',
    message
  };
}

function get(url, params) {
  return request(url, params);
}

function create(url, params) {
  return request(url, params, 'POST');
}

 function update(url, params) {
  return request(url, params, 'PUT');
}

function remove(url, params) {
  return request(url, params, 'DELETE');
}

export default {
  get,
  create,
  update,
  remove
};


