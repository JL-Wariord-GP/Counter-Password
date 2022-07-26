import React from 'react'

const Formulario = ({typeInput, pass, sumCount, restCount, reseAll, count}) => {
  return (
    <div className='box-all-f-c' >    
        <div>
            <h2>Formulario</h2>
            <div>
                <div className='box-son-pass'>
                    <label htmlFor="">Contraseña</label>
                    <input type={typeInput} name="" id="" />
                </div>
                <button className='btn' onClick={pass}>
                {typeInput === 'password' ? 'Show' : 'Hide'} Password</button>
            </div>
        </div>

        <div>
            <h2>Contador</h2>
            <div>{count}</div>
                <button onClick={sumCount}>+</button>
                <button onClick={restCount}>-</button>
                <button onClick={reseAll}>reset</button>
                <p>Nota: "Al dar Click <span>+</span> se cambiara el fondo, compruebalo"</p>
         </div>
    </div>
  )
}

export default Formulario