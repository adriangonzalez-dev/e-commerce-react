import React,{createContext, useEffect, useState} from 'react';
import { axiosProducts } from '../config/axiosClients';
import { useProducts } from '../hooks/useProducts';
import Swal from 'sweetalert2';

const ChartContext = createContext()

export const ChartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0)

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

    const addToCart = (product, cantProducts=1) => {
        const newProduct = cart.find(item=>product.id === item.id);
        if(!newProduct){
            setCart([
                ...cart,
                {
                    ...product,
                    cant: +cantProducts
                }
            ])
            Toast.fire({
                icon : 'success',
                title : `Producto agregado al carrito`
            });
            return;
        }
        

        const newCart = cart.map(item=>{
            if(item.id === product.id){
                item.cant = +item.cant + +cantProducts;
                return item;
            }

            return item;
        })

        setCart(newCart);
        Toast.fire({
            icon : 'success',
            title : `Producto agregado al carrito`
        });
    }

    const totalPrice = () => {
        const values = cart.map(product=>product.price*product.cant);
        const total = values.reduce((prev,acum)=>{
            return prev+acum
        },0);
        setSubtotal(total);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const deleteToCart = (id) => {
        const newCart = cart.filter(product=>product.id!==id);
        setCart(newCart)
    }

    useEffect(()=>{
        totalPrice()
        
    },[cart])

  return (
    <ChartContext.Provider value={{addToCart, cart, emptyCart, subtotal}}>
        {children}
    </ChartContext.Provider>
  )
}

export default ChartContext
