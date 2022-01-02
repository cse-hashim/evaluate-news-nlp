import { postData } from "./getPost"

const handleSubmit = async (event) => {
  event.preventDefault()
  const sendPost = async (data) => {
    const response = await postData('http://localhost:8081/nlp', data);
    try {
      console.log('getWeatherDataWeb(): ', response)
      return response;
    } catch (error) {
      console.log('error', error);
    }
  };

  document.getElementById('results').innerHTML = ''
  const target = document.getElementById('name').value
  // const isUrl = (e) => {
  //   let u;
  //   try {
  //     u = new URL(e);
  //   } catch (_) {
  //     return false;
  //   }
  //   return u.protocol === "http:" || u.protocol === "https:";
  // }
  // const type = isUrl(target) ? 'url' : 'txt';
  const type = Client.checkForName(target) ? 'url' : 'txt';
  return new Promise(async (resolve, _) => {
    console.log("::: Form Submitted... :::")
    resolve(await sendPost({ target, type }));
  })
    .then(async (res) => {
      let frag = document.createDocumentFragment();
      const isString = e => (typeof e === 'string' || e instanceof String)
      let table = document.createElement('table');
      Object.keys(res).filter(k => isString(res[k])).map(e => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        td1.innerHTML = e;
        td2.innerHTML = res[e]
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
      })
      frag.appendChild(table);
      document.getElementById('results').append(frag)
      if (res.status.msg !== 'OK') document.getElementById('results').innerHTML = res.status.msg
      document.getElementById('name').value = ''
      document.getElementById('name').style.textDecoration = 'none'
      console.log("::: Server Responded :::",res)
    })
}

export { handleSubmit }
