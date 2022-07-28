import React from 'react'
import Header from '../../Components/Header/Header'
import Tarefa from '../../Components/Tarefa/Tarefa'
import S from '../Todo/Todo.module.css'

const Todo = () => {
  return (
    <div>
        <Header props='ToDoList'></Header>
        <section className={S.main}>
            <div className={S.nome}>
                <h2>Nome</h2>
            </div>
            <div className={S.lista}>
                <Tarefa titulo='Duda' andamento='a fazer' ></Tarefa>
            </div>
        </section>
    </div>
  )
}

export default Todo