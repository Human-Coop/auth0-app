import products from './products.json' assert { type: 'json' };
// todo: write handleProductlist function -- eventually products might live in db
export default async function fetchallproducts(req, res) {
    try {
        console.log(products);
        return products
        //await handleProductlist(req, res)
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }