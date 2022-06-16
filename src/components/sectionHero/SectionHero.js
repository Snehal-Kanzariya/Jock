import React, { useState } from 'react';
// import Header from '../header/Header';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import '../../App.css';
import './SectionHero.css';

const SectionHero = ({ heroImage, isVideo, videoUrl, title, title1, isDescription, isTitleWidth}) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <div className="hero-container">
        <img src={heroImage} alt="" className="w-100 h-100" />
        <div className="text-center justify-content-center d-flex flex-column w-948">
            <h1>{title}</h1>
            <h1 className="m-0">{title1}</h1>
          <div>
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                {isVideo &&
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
                }
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src={videoUrl} frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
            <div className="w-671">
              <p className="ffG fs-19 text-center text-white fw-lighter">{isDescription}</p>
            </div>
          </div>
        </div>
        <div className="bt-0">
          <ul className="d-flex justify-content-center flex-row text-center text-white">
            <li className="text-uppercase list-p title fs-13"><span>UNTAMED</span> </li>
            <li className="text-uppercase list-p title fs-13"><img src="/img/diamond-list.svg" alt="" /></li>
            <li className="text-uppercase list-p title fs-13"><span>UNTOUCHED</span> </li>
            <li className="text-uppercase list-p title fs-13"><img src="/img/diamond-list.svg" alt="" /></li>
            <li className="text-uppercase list-p title fs-13"><span>UNFORGETTABLE</span> </li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default SectionHero