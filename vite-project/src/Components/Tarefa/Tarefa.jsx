import React from 'react'
import S from '../Tarefa/Tarefa.module.css'

const Tarefa = ({titulo, andamento}) => {
  return (
    <div className={S.card}>
        <p>{titulo}</p>
        <p>{andamento}</p>
    </div>
  )
}

export default Tarefa