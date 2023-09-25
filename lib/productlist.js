import { useState, useEffect } from 'react'

// todo: write function or fetching only products in cart for user

export async function fetchProducts(cookie = '') {
// todo: clean up this function
  if (typeof window !== 'undefined' && window.__user) {
    return window.__user
  }

  const res = await fetch(
    '/api/fetchallproducts',
    cookie
      ? {
          headers: {
            cookie,
          },
        }
      : {}
  )

  if (!res.ok) {
    delete window.__user
    return null
  }

  const json = await res.json()
  if (typeof window !== 'undefined') {
    window.__products = json
  }
  return json
}

export function useFetchProducts({ required } = {}) {
  // const [loading, setLoading] = useState(
  //   () => !(typeof window !== 'undefined' && window.__user)
  // )
  const [products, setProducts] = useState(() => {
    if (typeof window === 'undefined') {
      return null
    }
    return window.__products || null
  })

  useEffect(
    () => {
      // if (!loading && user) {
      //   return
      // }
      // setLoading(true)
      // let isMounted = true

      fetchProducts().then((products) => {
        // Only set the user if the component is still mounted
        if (isMounted) {
          // When the user is not logged in but login is required
          if (products) {
            window.location.href = '/api/fetchallproducts'
            return
          }
          setProducts(products)
        }
      })

      return () => {
        isMounted = false
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return { products }
}