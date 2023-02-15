import React from 'react'

export const Form = () => {
  return (
    <form>
      <div className="alert alert-danger" role="alert">
        Email o contraseña incorrecta
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo Electronico
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
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
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="remember" />
        <label className="form-check-label" htmlFor="remember">
          Recuerdame
        </label>
      </div>
      <div className='container d-flex justify-content-end gap-3'>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
}
