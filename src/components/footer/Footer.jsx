import React from 'react'
import { useTheme } from '../../hooks';
import styles from './footer.module.css'
import './footer.css'
import { DarkMode } from '../buttonDarkMode/DarkMode';
export const Footer = () => {
    const {mode} = useTheme();
    const styleText = mode ? 'textDark':'textlight'
  return (
    <footer className={`container text-center p-3 sticky-bottom ${mode ? 'darkModeSection' : 'lightModeSection'}`}>
      <nav className={`d-flex justify-content-center gap-5`}>
        <a href="" target='_blank' className={styleText}><i className='bi bi-whatsapp fs-4'></i></a>
        <a href="" target='_blank' className={styleText}><i className='bi bi-facebook fs-4'></i></a>
        <a href="" target='_blank' className={styleText}><i className='bi bi-instagram fs-4'></i></a>
      </nav>
      <small>&copy;  Hecho por adriramone90</small>
      <DarkMode />
    </footer>
  )
}

{/* <footer style={themeSection} className={styles.footer}>
      <div className={styles.contact}>
        <p>
          <i className="material-symbols-outlined">
            mail
          </i> tunegocio@gmail.com
        </p>
        <p>
          <i className="material-symbols-outlined">
            home_pin
          </i> Presidente Derqui, Buenos Aires, Argentina
        </p>
      </div>
      <div>
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-twitter"></a>
      </div>
    </footer> */}