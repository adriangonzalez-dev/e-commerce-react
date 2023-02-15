import React from 'react'
import styles from './button.module.css'

export const Button = ({handleAction, message,icon}) => {
  return (
    <button className={styles.button} 
    onClick={handleAction}>
        <span className="material-symbols-outlined">
            {icon}
        </span>
        {message}
    </button>
  )
}
