import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import {AllProducts, DetailProduct, Home, Login, Register} from '../pages'
import { Header, Footer } from '../components'
export const RouterApp = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
        </Route>
        <Route path='auth'>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
        </Route>
        <Route path='products'>
            <Route index element={<AllProducts/>}/>
            <Route path=':id' element={<DetailProduct/>}/>
        </Route>
        <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
