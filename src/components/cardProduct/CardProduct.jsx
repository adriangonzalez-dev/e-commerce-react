import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks'
import { Button } from '../button/Button'
import { useCart } from '../../hooks/useCart'
export const CardProduct = ({product}) => {
    const {addToCart} = useCart();
    const {mode} = useTheme();

  return (
    <div className={`card d-flex flex-column align-items-center justify-content-between m-2 ${mode ? 'darkModeSection' : 'lightModeSection'}`} >
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body d-flex flex-column align-items-center justify-content-between">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          ${product.price}
        </p>
        <div className="container-fluid d-flex justify-content-evenly">
            <Link to={`/products/${product.id}`} className="btn btn-primary text-white">
                Ver más
            </Link>
            <button className="btn btn-success" onClick={()=>addToCart(product)}><i className='bi bi-cart me-2' ></i> Agregar</button>
        </div>
      </div>
    </div>
  );
}
