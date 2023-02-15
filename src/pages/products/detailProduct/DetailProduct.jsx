import React, { useEffect, useState } from 'react'
import './detail.css'
import { useTheme } from '../../../hooks';
import { Payments } from '../../../components/payments/Payments';
import { useProducts } from '../../../hooks/useProducts';
import { Link, useParams } from 'react-router-dom';
import { Spinner } from '../../../components/spinner/Spinner';
import { PageLayout } from '../../../layouts/pageLayout/PageLayout';
import { useCart } from '../../../hooks/useCart';


export const DetailProduct = () => {
  const {id} = useParams()
  const {mode} = useTheme();
  const {addToCart} = useCart()
  const {getProductById, loadingId, product} = useProducts();
  const [cant, setCant] = useState(0);
  const getCant = (e) => {
    setCant(+e.target.value);
  }
  const sendToCart = (e) => {
    e.preventDefault();

    addToCart(product, +cant)
  }
  useEffect(()=>{
    getProductById(id)
  },[id])
  return (
    <PageLayout>
      {loadingId ? (
        <Spinner />
      ) : (
        <>
          <div className="container d-md-flex justify-content-center p-3 gap-1 fs-6 d-none">
            <Link to="/">Home</Link> / <Link to="/">{product.category}</Link> /{" "}
            <p>{product.title}</p>
          </div>
          <section className="row w-100 container mt-3">
            <article className="col-12 col-md-6 d-flex flex-column align-items-center">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={product.image}
                      className="d-block"
                      alt={product.title}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <p className="fs-6 text-center mt-3">{product.title}</p>
            </article>

            <article className="col-12 col-md-6 text-center d-flex flex-column justify-content-between">
              <h1 className="fs-2">{product.title}</h1>
              <h2 className="fs-3">${product.price}</h2>
              <p>{product.description}</p>
              <p>5% off pagando con transferencia</p>
              <form className="row g-3 d-flex justify-content-center"onSubmit={sendToCart}>
                <div className="col-auto">
                  <label htmlFor="cant" className="visually-hidden">
                    Elige la cantidad
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="cant"
                    placeholder="Cantidad"
                    min={0}
                    onChange={getCant}
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3">
                    <i className='bi bi-cart'></i> Agregar al carrito
                  </button>
                </div>
              </form>
            </article>
          </section>
          <Payments/>
        </>
      )}
    </PageLayout>
  );
}

      {/* {loadingId ? (
        <Spinner />
      ) : (
        <section className={styles.productContainer}>
          <article>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={styles.mySwiper}
              style={{
                width:'200px',
                height: '200px'
              }}
            >
              
              <SwiperSlide 
              className={styles.swiper_slide}
              style={{
                width:'200px',
                height:'200px'
              }}
              >
                <img src={product.image} alt={product.title} />
              </SwiperSlide>
              <SwiperSlide 
              className={styles.swiper_slide}
              style={{
                width:'200px',
                height:'200px'
              }}
              >
                <img src={product.image} alt={product.title} />
              </SwiperSlide>
            </Swiper>
            <h4>{product.title}</h4>
          </article>

          <article>
            <div className={styles.linkContainer}>
              <Link to='/'>Home</Link> / <Link to='/'>{product.category}</Link> / <p>{product.title}</p>
            </div>
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
            <p>5% off pagando con transferencia</p>
          <form className={styles.form}>
            <span>Elige la cantidad</span>
            <InputNumber/>
            <Button icon='shopping_cart' message='Agregar al carrito'/>
          </form>
          </article>
        </section>
      )}
      <Payments />
    </PageLayout> */}