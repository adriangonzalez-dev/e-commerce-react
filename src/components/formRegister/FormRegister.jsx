import React from 'react'

export const FormRegister = () => {
  return (
    <form>
      <div className="alert alert-danger" role="alert">
        Todos los datos son obligatorios
      </div>
      <div className="mb-3">
        <label htmlFor="full_name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="full_name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo Electronico
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password2" className="form-label">
          Escriba nuevamente la contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="password2"
        />
      </div>
      <div className='container d-flex justify-content-end gap-3'>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </div>
    </form>
  );
}