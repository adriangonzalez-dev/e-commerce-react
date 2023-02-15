import {useContext} from 'react'
import ProductContext from '../context/productsProvider'

export const useProducts = () => {
  return useContext(ProductContext)
}

