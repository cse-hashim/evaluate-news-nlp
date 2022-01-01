// Async POST
const postData = async (url = '', data = {}) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const json = await res.json();
    console.log('successful POST: ' + url);
    return json;
  } catch (error) {
    console.log(error);
  }
};
export {
  postData
}