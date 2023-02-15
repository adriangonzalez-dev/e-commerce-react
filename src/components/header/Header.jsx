import React, { useEffect, useState } from 'react'
import './header.css'
import { useTheme } from '../../hooks'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import { Chart } from '../chart/Chart'
import { Modal } from '../modal/Modal'
import { Form } from '../Form/Form'
import { useCart } from '../../hooks/useCart'
import { FormRegister } from '../formRegister/FormRegister'
export const Header = () => {
  const {cart} = useCart();
  const {mode} = useTheme();
  const styleText = mode ? 'textDark':'textlight'
  return (
      <>
        <div className={`container ${mode ? 'darkModeSection' : 'lightModeSection'}`}>
        <nav className="navbar navbar-expand-md ">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>
            <img src={logo} alt="logo"/>
          </Link>
          <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i className="navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className={`navbar-nav ms-sm-auto ${mode ? 'darkModeSection' : 'lightModeSection'}`}>
              <li className="nav-item">
                <NavLink 
                className={({isActive})=>`nav-link ${styleText} ${isActive ? 'active' : ''}`}
                to='/'
                >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                className={({isActive})=>`nav-link ${isActive ? 'active' : ''}`}
                to='/products'>Productos</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Categoria 1</a></li>
                  <li><a className="dropdown-item" href="#">Categoria 2</a></li>
                  <li><a className="dropdown-item" href="#">Categoria 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link" data-bs-toggle="modal" data-bs-target="#login">
                  Iniciar sesión
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" data-bs-toggle="modal" data-bs-target="#register">
                  Registrarse
                </button>
              </li>
              <button type="button" className="btn btn-dark d-flex align-items-center justify-content-center gap-1" data-bs-toggle="modal" data-bs-target="#chart">
                <i className='bi bi-cart'></i>
                <span className="badge bg-danger text-bg-secondary rounded-pill p-1">{cart.length}</span>
              </button>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      <Modal title='Mi Carrito' id='chart'>
        <Chart/>
      </Modal>
      <Modal title='Iniciar sesión' id='login'>
        <Form/>
      </Modal>
      <Modal title='Registrarse' id='register'>
        <FormRegister/>
      </Modal>
      </>
    )
  }
  
