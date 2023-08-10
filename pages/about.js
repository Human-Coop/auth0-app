import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function About() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>Learning programs, august 2023</h1>
      <ul>
        <li>Leetcode 30 days of pandas</li>
        <li>Udacity Intro to TensorFlow for Deep Learning Welcome Flow</li>
      </ul>
    </Layout>
  )
}

export default About
