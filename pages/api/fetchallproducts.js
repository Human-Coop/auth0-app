// todo: pull from json file in products folder
var products = [{
    "id":1,
    "name":"test",
    "img":"images/test.jpg",
    "price":"$99",
    "stock":1,
    "details":"test"
    }]
// todo: write handleProductlist function
export default async function fetchallproducts(req, res) {
    try {
        return products
        //await handleProductlist(req, res)
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }