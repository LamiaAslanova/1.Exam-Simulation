import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const BasketTableItem = ({row}) => {
    const{deleteFromBasket} = useContext(MainContext)

  return (
    <tr>
      <td><img src={row.item.image} width="100px" /></td>
      <td>{row.item.title}</td>
      <td>{row.item.description}</td>
      <td><button className='btn btn-danger' onClick={()=>deleteFromBasket(row.item)}>Delete</button></td>
    </tr>
  )
}

export default BasketTableItem
