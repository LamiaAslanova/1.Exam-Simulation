import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Table from '../../../components/admin/Table/Table'
import { Helmet } from 'react-helmet'
import './Products.css'

const Products = () => {
    const {data} = useContext(MainContext)

  return (
    <div className='products__section'>
    <Helmet>
                <title>Products</title>
            </Helmet>
        <Table infos={data}/>
    </div>
  )
}

export default Products
