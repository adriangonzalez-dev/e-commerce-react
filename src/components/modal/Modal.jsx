import React from 'react'
import { useTheme } from '../../hooks'
export const Modal = ({children, title, id}) => {
  const {mode} = useTheme()
  const theme = mode ? 'textDark' : 'textLight'
  return (
    <div className={`modal fade`} id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className={`modal-dialog `}>
      <div className={`modal-content`}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className={`modal-body`}>
            {children}
        </div>
        
      </div>
    </div>
  </div>
  )
}
