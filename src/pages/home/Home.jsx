import React, { useEffect, useState } from 'react'
import styles from './home.module.css'
import { SliderInfo } from '../../components'
import { CardProduct } from '../../components/cardProduct/CardProduct'
import { useProducts } from '../../hooks/useProducts'
import { Spinner } from '../../components/spinner/Spinner'
import { Button } from '../../components/button/Button'

import { Payments } from '../../components/payments/Payments'
import { PageLayout } from '../../layouts/pageLayout/PageLayout'

export const Home = () => {
  const {loading, products,getProducts} = useProducts();
  const [page, setPage] = useState(5);
  useEffect(()=>{
    getProducts(page)
  },[page])

  const moreProducts = () => {
    setPage(prev=>prev + 5)
  }
  return (
    <PageLayout>
      <div className={`${styles.carouselContainer} container d-flex align-items-center justify-content-center`}>
        <SliderInfo/>
      </div>
     <div className='container mt-3 d-flex flex-wrap justify-content-center'>
        {
          loading ? <Spinner/> :
          products.map((product)=><CardProduct product={product} key={product.id}/>)
        } 
     </div>

    <Button 
    handleAction={moreProducts} 
    message='Más productos'
    icon='add_circle'/>
    <Payments/>
    </PageLayout>
  )
}
