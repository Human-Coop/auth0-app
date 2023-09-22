import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function Products() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1> Products </h1>
      <ul>
        <li>Todo: create single product component that loads image, name, price, link to cart </li>
        <li>Todo: add folder for images and json file of all products</li>
      </ul>
    </Layout>
  )
}

export default Products