import React from 'react'
import S from '../Header/Header.module.css';

const Header = ({props}) => {
  return (
    <div>
        <h1 className={S.conteiner}>{props}</h1>
    </div>
  )
}

export default Header