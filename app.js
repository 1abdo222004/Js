const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const n = req.query.nam;
  const url = 'https://ibiza.ooredoo.dz/api/v1/mobile-bff/users/mgm/info/apply';
  const payload = { mgmValue: "5Q7K83N744" }
  const headers = {
    'Authorization': `Bearer `,
    'language': 'EN',
    'request-id': '14a32040-b8e8-4831-a255-8a7dce786dca',
    'flavour-type': 'gms',
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': '50',
    'Host': 'ibiza.ooredoo.dz',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip',
    'User-Agent': 'okhttp/4.9.3'
};

async function postData() {
    try {
        const response = await axios.post(url, payload, { headers });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

postData();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});