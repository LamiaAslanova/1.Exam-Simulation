import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="col-4">
                <div className="header__left">
                    <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" alt="" />
                </div>
            </div>
            <div className="col-4">
                <div className="header__middle">
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='#'>MENU</Link></li>
                        <li><Link to='#'>RESERVATION</Link></li>
                        <li><Link to='#'>GALLERY</Link></li>
                        <li><Link to='#'>ABOUT</Link></li>
                        <li><Link to='#'>BLOG</Link></li>
                        <li><Link to='#'>CONTACT</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-4">
                <div className="header__right">
                    <Link to='basket'><i class="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </div>
        </header>
    )
}

export default Header
