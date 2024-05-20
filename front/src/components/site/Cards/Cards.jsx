import React, { useContext } from 'react'
import Card from '../Card/Card'
import './Cards.css'
import MainContext from '../../../context/context'

const Cards = ({ cards }) => {
    const {search, setSearch, sort, setSort} = useContext(MainContext)

    return (
        <div className="cards__section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                        <div className="sort__buttons">
                            <button onClick={() => setSort({ field: "title", asc: true })}>A-Z</button>
                            <button onClick={() => setSort({field: "title", asc: false})}>Z-A</button>
                            <button onClick={() => setSort(null)}>Default</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        cards.map((card, index) => {
                            return (
                                <Card key={index} card={card} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards
