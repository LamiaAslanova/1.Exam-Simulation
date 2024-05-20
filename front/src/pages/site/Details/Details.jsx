import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet'
import './Details.css'

const Details = () => {
    const [item, setItem] = useState({})
    const { addToBasket } = useContext(MainContext)
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8080/practise4/${id}`)
            .then(res => {
                console.log(res.data);
                setItem(res.data)
            })
    }, [])

    return (
        <div className='details__section'>
            <Helmet>
                <title>{`${item.title}`}</title>
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img width="600px" src={item.image} alt="" />
                    </div>
                    <div className="col-6">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <button onClick={() => addToBasket(item)}>Add to basket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
