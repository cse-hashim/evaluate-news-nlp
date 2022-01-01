/**
 * @type {{id:{}}}
 */
let projectData = {}

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

console.log(fetch)

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 8081
const _path = require('path')
const { FormData } = require('formdata-node');
const mockAPIResponse = require('./mockAPI.js')

console.log(FormData)


require('dotenv').config()

const [API_KEY, app] = [process.env.API_KEY, express()]

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.listen(port, () => {
  console.log(`Hashim Hossam <computetional.h@gmail.com>: welcome to my server;\nserver: i am running on localhost:${port}`);
  console.log(`Your API key is ${process.env.API_KEY}`);
})

app.get('/', (req, res) => {
  res.sendFile(_path.resolve('src/client/views/index.html'))
})

app.get('/test', (req, res) => {
  console.group('server /test')
  console.log('req=', req, 'res=', res)
  res.send(mockAPIResponse)
})

app.post('/nlp', async (req, res) => {
  const { type, target } = req.body
  const {
    createHash
  } = await import('crypto');
  const hash = createHash('sha512');
  hash.update('' + type + target);
  const key = hash.digest('hex')
  console.log(key);
  if (projectData[key]) {
    res.status(200).send(projectData[key]);
  } else {
    const formdata = new FormData();
    formdata.append("key", API_KEY);
    formdata.append(type, target);
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...
    console.log(formdata)
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
      .then(async response => ({
        status: await response.status,
        body: await response.json()
      }))
      .then(async ({ status, body }) => {
        console.log(status, body)
        projectData = {
          ...projectData,
          [key]: await body
        }
        res.status(200).send(body);

      })
      .catch(error => console.log('error', error));
    console.log(response);
  }
})

app.post('/addEntry', (req, res) => {
  projectData = req.body;
  console.log(req.body)
  res.status(200).send(req.body);
});

