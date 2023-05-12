import { useEffect, useReducer, useState } from "react"

import { getEndpoint } from "@/pages/api/utils"
import { isArrayOfObjects, isValidCategory } from "@/utils"
import type { PaginationReducer, Product } from "additional"

const INITIAL_PAGE = 1
const ITEMS_DISPLAYED = 12
const VALID_DOMAIN = 'jlm022-4000.csb.app' // later remove it

function reducer (state: PaginationReducer['state'], action: PaginationReducer['action']): PaginationReducer['state'] {
  switch (action.type) {
    case 'ADDED_ITEMS': {
      return { ...state, items:[...state.items].concat(action.chunk!) }
    }
    case 'INCREMENTED_PAGE': {
      return { ...state, page: state.page + INITIAL_PAGE }
    }
    default:
      return state
  }
}

export const useInfinitePagination = (products: Product[], category: string) => {
  if (!isArrayOfObjects(products)) throw new Error('This hook requires a valid products as first argument.')
  if (!isValidCategory(category)) throw new Error('This hook requires a valid category as second argument.')

  const [{items, page}, setPagination] = useReducer(reducer, { items: products, page: INITIAL_PAGE })
  const [isFinal, setFinal] = useState(false)

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (!isFinal && scrollTop + clientHeight >= scrollHeight) {
      setPagination({ type: 'INCREMENTED_PAGE'  })
    }
  }

  useEffect(() => {
    if (page > INITIAL_PAGE) {
      const getProductData = getEndpoint(`${VALID_DOMAIN}/api/v1/products`)
      getProductData(`?text=category=${category}&page=${page}&limit=${ITEMS_DISPLAYED}`).then(({ products }) => {
         if (products.length === 0) return setFinal(true)
         setPagination({ type: 'ADDED_ITEMS', chunk: products })
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page, isFinal])
  
  return items
}
