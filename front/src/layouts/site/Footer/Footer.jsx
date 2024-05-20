import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h4>CONTACT US</h4>
            <div className="contact">
              <i class="fa-solid fa-location-dot"></i>
              <p>8th floor, 379 Hudson St, New York, NY 10018</p>
            </div>
            <div className="contact">
              <i class="fa-solid fa-location-dot"></i>
              <p>8th floor, 379 Hudson St, New York, NY 10018</p>
            </div>
            <div className="contact">
              <i class="fa-solid fa-location-dot"></i>
              <p>8th floor, 379 Hudson St, New York, NY 10018</p>
            </div>
            <h4 className='open'>OPENING TIMES</h4>
            <p>09:30 AM - 11:00 PM <br />Every Day</p>
          </div>
          <div className="col-4">
            <h4>LATEST TWITTER</h4>
            <div className="twit">
              <i class="fa-brands fa-twitter"></i>
              <Link to="#">@colorlib</Link>
              <p>Activello is a good option. It has a slider built into that displays the featured image in the slider.</p>
              <span>21 Dec 2017</span>
            </div>
            <div className="twit">
              <i class="fa-brands fa-twitter"></i>
              <Link to="#">@colorlib</Link>
              <p>Activello is a good option. It has a slider built into that displays the featured image in the slider.</p>
              <span>21 Dec 2017</span>
            </div>
          </div>
          <div className="col-4">
            <h4>GALLERY</h4>
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
                <div className="col-3">
                  <img width="80px" height="80px" src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>@ 2017 Colorlib. Get The Theme</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
