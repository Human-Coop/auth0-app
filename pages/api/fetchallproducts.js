// todo: pull from json file in products folder
var products = [{
    "id":1,
    "name":"test",
    "img":"../products/images/test.jpg",
    "price":"$99",
    "stock":1,
    "details":"test"
    },
    {
      "id":2,
      "name":"test2",
      "img":"../products/images/test.jpg",
      "price":"$99",
      "stock":2,
      "details":"test2"
      }]
// todo: write handleProductlist function -- eventually products might live in db
export default async function fetchallproducts(req, res) {
    try {
      fetch('./products.json')
      .then((response) => {return response.json()})
      .then((json) => console.log(json));
        //return products
        //await handleProductlist(req, res)
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }