import React from 'react'

const Tarjeta = ({ titulo, descripcion, icono }) => {
  return (
    <>
      <article className="flex gap-3 rounded-md bg-slate-800 px-5 py-3 shadow">
        <div className="my-auto w-16 min-w-16">
          <img className="w-16" src={icono} alt="icono" />
        </div>

        <div className="flex-grow space-y-2 text-slate-200">
          <span className="text-lg font-semibold">{titulo}</span>
          <p className="text-justify leading-tight">{descripcion}</p>
        </div>
      </article>
    </>
  )
}

export default Tarjeta
