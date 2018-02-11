import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */

function parseJSON(response) {
  return new Promise((resolve, reject) => {
    if (response.ok) {
      response.json().then((json) => {
        resolve({
          status: response.status,
          ok: response.ok,
          json
        });
      });
    } else {
      reject({
        status: response.status,
        ok: response.ok,
        message: response.statusText
      });
    }
  });
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

export default function request(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(parseJSON)
      .then((response) => {
        if (response.ok) {
          return resolve(response.json);
        }
        // extract the error from the server's json
        return reject(response.json && response.json.message);
      })
      .catch((error) => reject(error));
  });
}
