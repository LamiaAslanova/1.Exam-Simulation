import React from 'react'
import { Link } from 'react-router-dom'
import '../../site/Header/Header.css'

const Header = () => {
  return (
    <header>
            <div className="col-4">
                <div className="header__middle">
                    <ul>
                        <li><Link to='/admin'>DASHBOARD</Link></li>
                        <li><Link to='products'>PRODUCTS</Link></li>
                        <li><Link to='add'>ADD</Link></li>
                    </ul>
                </div>
            </div>
        </header>
  )
}

export default Header
