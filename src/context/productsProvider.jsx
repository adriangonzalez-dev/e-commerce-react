import React,{createContext, useEffect, useState} from 'react';
import { axiosProducts } from '../config/axiosClients';

const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [loadingId, setLoadingId] = useState(true);
    const [product, setProduct] = useState({})

    const getProducts = async (cant=5) => {
        try {
            const {data} = await axiosProducts.get(`/products?limit=${cant}`);
            setProducts(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const getProductById = async (id) => {
        try {
            const {data} = await axiosProducts.get(`/products/${id}`);
            setProduct(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingId(false)
        }
    }


  return (
    <ProductContext.Provider value={{loading, products, getProducts, getProductById, loadingId, product}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
