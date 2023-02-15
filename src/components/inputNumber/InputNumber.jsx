import React from 'react'
import styles from './input.module.css'
export const InputNumber = () => {
  return (
    <input 
    type="number" name="text" 
    className={styles.input} 
    pattern="\d+" 
    placeholder="Numbers only or shake"/>
  )
}
