export {}
// import { useEffect, useReducer, useState } from 'react'

// export interface PaginationReducer {
//   state: {
//     items: Product[]
//     page: number
//   }
//   action: {
//     type: string
//     chunk?: Product[]
//     items?: Product[]
//   }
// }

// import { getEndpoint } from '@/pages/api/utils'
// import { isArrayOfObjects, isValidCategory } from '@/utils'
// import type { PaginationReducer, Product } from 'additional'

// const INITIAL_PAGE = 1
// const ITEMS_DISPLAYED = 12
// const API_SERVER_DOMAIN = 'e-commerce-store-api.onrender.com' // later refactor it

// // FIX ALL THIS
// function reducer (state: PaginationReducer['state'], action: PaginationReducer['action']): PaginationReducer['state'] {
//   switch (action.type) {
//     case 'ADDED_ITEMS': {
//       return { ...state, items: [...state.items].concat(action.chunk) }
//     }
//     case 'INCREMENTED_PAGE': {
//       return { ...state, page: state.page + INITIAL_PAGE }
//     }
//     default:
//       return state
//   }
// }

// export const useInfinitePagination = (products: Product[], category: string): Product[] => {
//   if (!isArrayOfObjects(products)) throw new Error('This hook requires a valid products as first argument.')
//   if (!isValidCategory(category)) throw new Error('This hook requires a valid category as second argument.')

//   const [{ items, page }, setPagination] = useReducer(reducer, { items: products, page: INITIAL_PAGE })
//   const [isFinal, setFinal] = useState(false)

//   const handleScroll = (): void => {
//     const { scrollTop, scrollHeight, clientHeight } = document.documentElement
//     if (!isFinal && scrollTop + clientHeight >= scrollHeight) {
//       setPagination({ type: 'INCREMENTED_PAGE' })
//     }
//   }

//   useEffect(() => {
//     if (page > INITIAL_PAGE) {
//       const getProductData = getEndpoint(`${API_SERVER_DOMAIN}/api/v1/products`)
//       getProductData(`?text=category=${category}&page=${page}&limit=${ITEMS_DISPLAYED}`).then(({ products }) => {
//         if (products.length === 0) return setFinal(true)
//         setPagination({ type: 'ADDED_ITEMS', chunk: products })
//       })
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [page, isFinal])

//   return items
// }
