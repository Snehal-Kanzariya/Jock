import React from 'react';
import '../../App.css';
import './Footer.css';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';


const Footer = () => {

  return (
    <div className="bgcolor">
      <Carousel className="pt-158 pb-199 sh px-5">
        <Carousel.Item interval={1000}>
          <p className="pb-3 bgcolor text-white title fs-25 justify-content-center d-block lh-40 text-center">Our best experience of Kruger was at Jock's. You can feel the love for nature
            in the heart and soul of the wonderful owners. The rooms are practically in the wild.
            We saw elephants just passing in front of the room. Sleeping in matras under the stars (if you want), amazing food in the river bed. Will never forget this experience!
          </p>
          <p className="ffG fs-14 text-center light-white">-Jacob Yavin Vermeulen</p>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <p className="pb-3 bgcolor text-white title fs-25 justify-content-center d-block lh-40 text-center">Our best experience of Kruger was at Jock's. You can feel the love for nature
            in the heart and soul of the wonderful owners. The rooms are practically in the wild.
            We saw elephants just passing in front of the room. Sleeping in matras under the stars (if you want), amazing food in the river bed. Will never forget this experience!
          </p>
          <p className="ffG fs-14 text-center light-white">-Jacob Yavin Vermeulen</p>
        </Carousel.Item>
        <Carousel.Item interval={100}>
          <p className="pb-3 bgcolor text-white title fs-25 justify-content-center d-block lh-40 text-center">Our best experience of Kruger was at Jock's. You can feel the love for nature
            in the heart and soul of the wonderful owners. The rooms are practically in the wild.
            We saw elephants just passing in front of the room. Sleeping in matras under the stars (if you want), amazing food in the river bed. Will never forget this experience!
          </p>
          <p className="ffG fs-14 text-center light-white">-Jacob Yavin Vermeulen</p>
        </Carousel.Item>
      </Carousel>

      {/* accordion footer */}
      <div className="light-gray">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <div>
              <Accordion.Header className="title lh-40 fs-26 text-center cen">
                Sign up for our newsletter and promotions
              </Accordion.Header>
            </div>

            <Accordion.Body className="gray">
              <div className="container-fluid fc">
                <div className="row lg:ps-142">
                  <div className="col-lg-6 col-12 d-flex">
                    <div className="col-lg-3 col-sm-3 col-12">
                      <img src="/img/footerlogo.svg" alt="logo" />
                      <div className="d-flex text-center">
                        <div className="col-3">
                          <img src="/img/instagram.svg" alt="" />
                        </div>
                        <div className="col-3">
                          <img src="/img/fb.svg" alt="" />
                        </div>
                        <div className="col-3">
                          <img src="/img/youtube.svg" alt="" />
                        </div>
                        <div className="col-3">
                          <img src="/img/tumbler.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-sm-1"></div>
                    <div className="col-lg-4 col-sm-4 col-12">
                      <ul className=" tcolor">
                        <li className="pt-20 ffG fs-16">AccomModation</li>
                        <li className="pt-20 title fscolor">Main Jock Lodge</li>
                        <li className="pt-20 title fscolor">Fitzpatrick’s Lodge</li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-12">
                      <ul className="ffG tcolor fs-16">
                        <li className="pt-20">EXPERIENCES</li>
                        <li className="pt-20">CONSERVATION& Community</li>
                        <li className="pt-20">OUR STORY</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 d-flex">
                    <div className="col-lg-4 col-sm-4 col-12">
                      <ul className="ffG tcolor fs-16">
                        <li className="pt-20">DESTINATION</li>
                        <li className="pt-20">OFFERS</li>
                        <li className="pt-20">RATES</li>
                        <li className="pt-20">GALLERY</li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-12">
                      <ul className="ffG tcolor fs-16">
                        <li className="pt-20">CONTACT </li>
                        <li className="pt-20">FAQ’S</li>
                        <li className="pt-20">BLOG</li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-12 p-3">
                      <div className="btn bgcolor px-3 py-2 light-white fs-12 dummy">
                        MAKE A BOOKING
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ps-142 pt-74 gray">
                <div className="col-6 copyright d-flex flex-wrap align-items-center">
                  <p className="mb-3">
                    &copy;Jock Safari Lodge 2022. All rights reserved.
                  </p>
                </div>
                <div className="col-6 float-end pe-5">
                  <ul className="d-flex flex-wrap align-items-center copyright justify-content-end">
                    <li>Terms & Conditions</li>
                    <span className="vr"></span>
                    <li>Privacy policy</li>
                    <span className="vr"></span>
                    <li>Covid-19 Policy</li>
                    <span className="vr"></span>
                    <li>Legal</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray pt-14 pb-12 justify-content-center d-flex">
                <img src="/img/footerpartners.png" alt="partners" />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </div>


  )
}

export default Footer
