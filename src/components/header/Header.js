import React, { useState } from 'react'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import ImgGrid from '../imggrid/ImgGrid';


const Header = () => {
  const imageGridList = [{
    image: "/img/JockMainLodge.png",
    title: "Jock Main Lodge"
  },
  {
    image: "/img/Fitzpatrick.png",
    title: "Fitzpatrick’s Lodge"
  }
  ]

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div id='hide' className="row">
            <div className="col-lg-2 col-6 justify-content-start d-flex">
              {/* logo */}
              <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
                <img src="../img/logo.png" alt="logo" className="ps-58" />
              </Link>
            </div>
            <div className="col-lg-7">
              {/* menulist */}
              <ul id="hide" className={click ? 'nav-menu active' : 'nav-menu mt-4 ps-0'}>
                <li className='nav-item ffG'>
                  <Link to='' id="hover-menu" className='nav-links' onClick={closeMobileMenu}>
                    <span id="hover-menu" className="">Accommodation</span>
                    <div class="dropdown-content">
                      <div className="row">
                        {imageGridList.map(item => {
                          return <ImgGrid img={item.image} title={item.title} />
                        })}
                      </div>
                    </div>
                  </Link>
                </li>
                <li className='nav-item ffG'>
                  <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                    <span className="">Conservation & Community</span>
                  </Link>
                </li>
                <li className='nav-item ffG'>
                  <Link to='/experiences' className='nav-links' onClick={closeMobileMenu}>
                    <span className="">Experiences</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <div className="mt-4">
                {/* button */}
                <div id="hide" className="">
                  {button && <Button buttonStyle='btn--outline'>MAKE A BOOKING</Button>}
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-12">
              <div className="pe-69 mt-4">
                {/* toggle menu */}
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <img src="/img/toggle.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div id="show" className="row">
            <div className="col-md-6 col-6 justify-content-start d-flex">
              {/* logo */}
              <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
                <img src="../img/logo.png" alt="logo" className="ps-58" />
              </Link>
            </div>
            <div className="col-md-6 col-6 d-flex justify-content-end pe-69">
              {/* toggle menu */}
              <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <img src="/img/toggle.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="menu-icon ms-41" onClick={handleClick}>

            <div className="offcanvas offcanvas-end w-1440" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="row p-0">
                <div className="col-md-6 col-12 mw-787">
                  <img src="/img/Elephantchild.jpg" alt="" className="w-100 h-100" />
                  <div className="img-contains">
                    <Link to="/"><img src="../img/logo.png" alt="logo" /></Link>
                    <Link to="/" className="links"><h1 className="pt-200 title fs-50">Accommodation</h1></Link>
                    <Link to="/experiences" className="links"> <h1 className="title fs-50">Experiences</h1></Link>
                    <Link to="/" className="links"><h1 className="title fs-50">Conservation & Community</h1></Link>
                    <Link to="/ourstory" className="links"><h1 className="title fs-50">Our Story</h1></Link>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="offcanvas-header menu-title">
                    <div id="offcanvasRightLabel">
                      <div className="btn ffG bgcolor px-4 py-2 light-white fs-12 dummy" typeof='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRights" aria-controls="offcanvasRight">
                        MAKE A BOOKING
                      </div>
                    </div>
                    <button type="button" className="ms-4 btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="d-flex justify-content-end flex-column pe-165">
                      <ul className="mx-653 text-uppercase ffG fs-16 tcolor text-end">
                        <li className="pb-23">
                          <Link to="/" className="link tcolor">DESTINATION</Link>
                        </li>
                        <li className="pb-23">
                          <Link to="/" className="link tcolor">Location</Link>
                        </li>
                        <li className="pb-23">
                          <Link to="/offers" className="link tcolor">OFFERS</Link>
                        </li>
                        <li className="pb-23">
                          <Link to="/" className="link tcolor">RATES</Link>
                        </li>
                        <li className="pb-23">
                          <Link to="/" className="link tcolor">GALLERY</Link>
                        </li>
                        <li className="pb-23">
                          <Link to="/" className="link tcolor">Agent zone</Link>
                        </li>
                        <li className="pb-23">
                          <Link to="/faq" className="link tcolor">FAQ’S</Link>
                        </li>
                        <li className="pb-23">
                          <Link to="/" className="link tcolor">BLOG</Link>
                        </li>
                        <li className="pb-23">
                          <Link to="/" className="link tcolor">CONTACT </Link>
                        </li>
                      </ul>
                      <div className="title fs-15 dark-gray text-end ">
                        <span>+27 (0) 13 010 0019</span>  <br />
                        <span>reservations @jocksafarilodge.com</span>
                        <div className="row">
                          <div className="col-6"></div>
                          <div className="col-6">
                            <div className="row">
                              <div className="col-6"></div>
                              <div className="col-6">
                                <div className="d-flex text-center">
                                  <div className="col-3 py-3">
                                    <img src="/img/instagram.svg" alt="" />
                                  </div>
                                  <div className="col-3 py-3">
                                    <img src="/img/fb.svg" alt="" />
                                  </div>
                                  <div className="col-3 py-3">
                                    <img src="/img/youtube.svg" alt="" />
                                  </div>
                                  <div className="col-3 py-3">
                                    <img src="/img/tumbler.svg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          {/* submenu */}
          <div className="offcanvas offcanvas-end w-1440" tabindex="-1" id="offcanvasRights" aria-labelledby="offcanvasRightLabel">
            <div className="row p-0">
              <div className="col-md-6 col-12 mw-787">
                <img src="/img/Lion.jpg" alt="" className="w-100 h-100" />
              </div>
              <div className="col-md-6 col-12">
                <div className="offcanvas-header menu-title">
                  <button type="button" className="ms-4 btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <div className="pe-165">
                    <div className="d-flex justify-content-end flex-column">
                      <h1 className="title fs-38 dark-gray text-end">Make a Direct Booking</h1>
                      <p className="text-end ffG">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod </p>
                      <div className="d-flex justify-content-end mb-5">
                        <Link to="/">
                          <button className="btn btn-color btn-medium text-end">
                            MAKE A BOOKING
                          </button>
                        </Link>

                      </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-end flex-column mt-4">
                      <h1 className="title fs-38 dark-gray text-end">Guest Enquiry</h1>
                      <p className="text-end ffG">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod </p>
                      <div className="d-flex justify-content-end mb-5">
                        <Link to="/faq">
                          <button className="btn btn-color btn-medium text-end text-uppercase">
                            make an Enquiry
                          </button>
                        </Link>

                      </div>
                    </div>
                    <div className="title fs-15 dark-gray text-end">
                      <span>+27 (0) 13 010 0019</span>  <br />
                      <span>reservations @jocksafarilodge.com</span>
                      <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6">
                          <div className="row">
                            <div className="col-6"></div>
                            <div className="col-6">
                              <div className="d-flex text-center">
                                <div className="col-3 ps-2 py-3">
                                  <img src="/img/instagram.svg" alt="" />
                                </div>
                                <div className="col-3 ps-2 py-3">
                                  <img src="/img/fb.svg" alt="" />
                                </div>
                                <div className="col-3 ps-2 py-3">
                                  <img src="/img/youtube.svg" alt="" />
                                </div>
                                <div className="col-3 ps-2 py-3">
                                  <img src="/img/tumbler.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header