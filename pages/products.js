import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import { useFetchProducts } from '../lib/productlist'

// // todo: write addcart function
// function ProductCard({ product }) {
//     return (
//       <>
//         <div>
//             <h1>{product.name}</h1>
//             <img src={product.img} />
//             <h3>Price: {product.price}</h3>
//             <h4>Stock: {product.stock}</h4>
//             <p>Details: {product.details}</p>
//             <button onclick={addcart(product.id)}>Add to cart</button>
//         </div>
//       </>
//     )
//   }

function Products() {
  const { user, loading } = useFetchUser()
  const { productlist } = useFetchProducts()

  return (
    <Layout user={user} loading={loading}>
      <h1> Products </h1>
      <ul>
        { !productlist ? <>Loading...</> :
        productlist.map((product) => (
            <li>
                <div>
                    <h1>{product.name}</h1>
                    <img src={product.img} />
                    <h3>Price: {product.price}</h3>
                    <h4>Stock: {product.stock}</h4>
                    <p>Details: {product.details}</p>
                    {/* <button onclick={addcart(product.id)}>Add to cart</button> */}
                </div>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export default Products