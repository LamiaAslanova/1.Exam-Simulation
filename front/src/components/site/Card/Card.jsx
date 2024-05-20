import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ card }) => {

    return (
        <div className="col-4">
                <div class="card" width="18rem">
            <Link to={`details/${card._id}`}>
                    <img src={card.image} class="card-img-top" alt="..." />
            </Link>
                    <div class="card-body">
                        <h5 class="card-title">{card.title}</h5>
                        <p class="card-text">{card.description}</p>
                    </div>
                    <Link to='#'>LEARN MORE <i class="fa-solid fa-arrow-right"></i></Link>
                </div>
        </div>
    )
}

export default Card
