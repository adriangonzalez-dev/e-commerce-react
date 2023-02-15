import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './slider.module.css'
import { Navigation } from 'swiper';

export const SliderInfo = () => {
  return (
    <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        watchSlidesProgress
        autoplay
        navigation
        style={{
          width:'100%',
        }}
      >
        <SwiperSlide>
          <div className={styles.card}>
            <i className="material-symbols-outlined">
            package
            </i>
            <b className='fs-4'>Envios a todo el país</b>
            <p className='fs-6'>Compra sin salir de tu casa</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <i className="material-symbols-outlined">
              payments
            </i>
            <b className='fs-4'>Podes pagar en cuotas</b>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card}>
            <i className="material-symbols-outlined">
              account_balance
            </i>
            <b className='fs-4'>Descuentos por transferencia</b>
            <p className='fs-6'>5% off abonando por transferencia</p>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}
