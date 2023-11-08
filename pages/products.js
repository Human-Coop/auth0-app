import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// todo: don't be so hacky
// import { useFetchProducts } from '../lib/productlist'
import products from './api/allproducts.json' assert { type: 'json' };

// // todo: write addcart function
function ProductCard(product) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <h3>Price: {product.price}</h3>
          <h4>Stock: {product.stock}</h4>
          <p>Details: {product.details}</p>
        </Card.Text>
        {/* <Button variant="primary" onclick={addcart(product.id)}>Add to Cart</Button> */}
      </Card.Body>
    </Card>
  );
}

function Products() {
  const { user, loading } = useFetchUser()
  const productlist = products
  // const { productlist } = useFetchProducts()

  return (
    <Layout user={user} loading={loading}>
      <h1> Products </h1>
      <ul>
        { !productlist ? <>Loading...</> :
        productlist.map((product) => (
            <li>
              {ProductCard(product)}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export default Products