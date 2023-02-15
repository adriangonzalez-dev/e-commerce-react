import React from 'react'
import { useCart } from '../../hooks/useCart';

export const Chart = () => {
    const {cart, emptyCart, subtotal} = useCart();
  return (
    <>
      <ul className="list-group">
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          cart.map(product=><li className="list-group-item d-flex justify-content-between align-items-start row" key={product.id}>
                                <div className="ms-2 me-auto col-6">
                                    <div className="fw-bold">{product.title}</div>
                                </div>
                                <div className="ms-2 me-auto col-3">
                                    <div>${(+product.price * +product.cant).toFixed(2)}</div>
                                </div>
                                <span className="badge bg-primary rounded-pill col-auto">{+product.cant}</span>
                            </li>)
        )}
        <li className="list-group-item d-flex justify-content-end align-items-end">
          <div className="ms-2 ms-auto">
            <div className="fw-bold">Subtotal:</div>
          </div>
          <div className="ms-2 ms-auto">
            <div className="fw-bold">${+subtotal.toFixed(2)}</div>
          </div>
        </li>
      </ul>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={emptyCart}
        >
          Vaciar
        </button>
        <button type="button" className="btn btn-primary">
          Pagar!
        </button>
      </div>
    </>
  );
}
