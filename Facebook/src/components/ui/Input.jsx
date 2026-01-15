import React from 'react'


export default function Input() {
  return (
    <div className="flex flex-col ">
      <input  className="input-field" type="text" placeholder='Numéro mobile ou e-mail'/>
      <input className="input-field" type="password" placeholder='Mot de passe' />
    </div>
  )
}
