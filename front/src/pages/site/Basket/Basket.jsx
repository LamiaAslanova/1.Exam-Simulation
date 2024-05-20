import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import BasketTable from '../../../components/site/BasketTable/BasketTable'
import { Helmet } from 'react-helmet'
import './Basket.css'

const Basket = () => {
    const { basketItems } = useContext(MainContext)

    return (
        <div className='basket__section'>
            <Helmet>
                <title>Basket</title>
            </Helmet>
            <BasketTable rows={basketItems} />
        </div>
    )
}

export default Basket
