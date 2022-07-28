import React from 'react'
import Header from '../../Components/Header/Header.jsx'
import CardUser from '../../Components/CardUser/CardUser.jsx'

const Users = () => {
  return (
    <div>
        <Header props="Users"></Header>
        <CardUser name='Jovana' email='ashavag@.com'></CardUser>
    </div>
  )
}

export default Users