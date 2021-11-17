
const createLoader = (onSuccess, onError) => () => {
  return fetch(
    'https://24.javascript.pages.academy/kekstagram/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
        throw new Error(`${response.status} ${response.statusText}`);
    })
};

export {
  createLoader
}
