import React from 'react'

const ButtonModal = ({setModal}) => {

  function handleClick() {
    setModal((ativo) => !ativo)
  }
  return (
    <button onClick={handleClick}>Abrir</button>
    // <button onClick={() => setModal(true)}>Abrir</button>
  )
}

export default ButtonModal