import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function About() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>About</h1>
      <p>
        Information here is coming soon.
      </p>
    </Layout>
  )
}

export default About
