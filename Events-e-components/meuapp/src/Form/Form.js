import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <Input />
      <label htmlFor="mail">Email</label>
      <Input />
      <Button />
    </form>
  )
}

export default Form