import Layout from '../components/layout'
import { useFetchProducts } from '../lib/productlist'

// todo: write addcart function
function ProductCard({ product }) {
    return (
      <>
        <div>
            <h1>{product.name}</h1>
            <img src={product.img} />
            <h3>Price: {product.price}</h3>
            <h4>Stock: {product.stock}</h4>
            <p>Details: {product.details}</p>
            <button onclick={addcart(product.id)}>Add to cart</button>
        </div>
      </>
    )
  }

function Products() {
  const { productlist, loading } = useFetchProducts()

  return (
    <Layout productlist={productlist} loading={loading}>
      <h1> Products </h1>
      <ul>
        { loading ? <>Loading...</> :
        productlist.map((product) => (
            <li><ProductCard product={product}/></li>
          ))
        }
      </ul>
    </Layout>
  )
}

export default Products