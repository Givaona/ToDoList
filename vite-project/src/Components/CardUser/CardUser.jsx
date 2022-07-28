import React from 'react'
import Button from '../Button/Button';
import S from '../CardUser/CardUser.module.css';


const CardUser = ({name, email}) => {
  return (
    <div className={S.conteiner}>
        <h3>{name}</h3>
        <p>{email}</p>
        <Button props='ver mais'></Button>
    </div>
  )
}

export default CardUser