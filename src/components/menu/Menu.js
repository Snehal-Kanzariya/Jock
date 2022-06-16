import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';
import '../../App.css';

const Menu = () => {
  return (
    <div>
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

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
                  <li className="pb-23">DESTINATION</li>
                  <li className="pb-23">Location</li>
                  <li className="pb-23">OFFERS</li>
                  <li className="pb-23">RATES</li>
                  <li className="pb-23">GALLERY</li>
                  <li className="pb-23">Agent zone</li>
                  <li className="pb-23">FAQ’S</li>
                  <li className="pb-23">BLOG</li>
                  <li className="pb-23">CONTACT</li>
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
                    <button className="btn btn-color btn-medium text-end">
                      MAKE A BOOKING
                    </button>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-end flex-column mt-4">
                  <h1 className="title fs-38 dark-gray text-end">Guest Enquiry</h1>
                  <p className="text-end ffG">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod </p>
                  <div className="d-flex justify-content-end mb-5">
                    <button className="btn btn-color btn-medium text-end text-uppercase">
                    make an Enquiry
                    </button>
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
  )
}

export default Menu