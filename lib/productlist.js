import { useState, useEffect } from 'react'

// todo: write function or fetching only products in cart for user

export async function fetchProducts() {
// todo: clean up this function
  const res = await fetch('/api/fetchallproducts')
  const json = await res.json()
  return json
}

export function useFetchProducts() {
  const [products_loading, setLoading] = useState()
  const [products, setProducts] = useState()

  useEffect(
    () => {
      if (!products_loading && products) {
        return
      }
      setLoading(true)
      let isMounted = true

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

  return { products, products_loading }
}