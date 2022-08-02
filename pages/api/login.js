import auth0 from '../../lib/auth0'

var axios = require("axios").default;

var options = {
  method: 'PATCH',
  url: 'https://dev-pg11uqii.us.auth0.com/api/v2/clients/8BnkSyAQZVi2HEdubL2ykRHkQ74em6hR',
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer API2_ACCESS_TOKEN',
    'cache-control': 'no-cache'
  },
  data: {initiate_login_uri: 'https://human-coop.vercel.app/api/login'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
