const {
  REACT_APP_API,
  REACT_APP_KEY,
} = process.env;

let timeoutID;

export const toJson = (res) => res.json();

export const getVideo = (searchValue) => {
  const url = `${REACT_APP_API}q=${searchValue}&maxResults=10&part=snippet&key=${REACT_APP_KEY}`;
  return fetch(url, {
    headers: new Headers()
  })
    .then(toJson);
};

export const streamGet = (fn,  value) => {
  const resp = () => getVideo(value).then(({items}) => fn(items));
  if (timeoutID) {
    clearTimeout(timeoutID);
  }
  timeoutID = setTimeout(resp, 1000);

};