import React, {useState} from 'react';
import '../../App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import './PaginationSlider.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const PaginationSlider = ({ slideVideoUrl1,  slideVideoUrl2, slideVideoUrl3, slideVideoUrl4 }) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div className="ps-5 gray pb-5 py-3">
      <Swiper
        pagination={{
          type: "fraction",
          formatFractionCurrent: function (number) {
            return ('  ' + number + ' ' + '_' + '_' + ' ');
          },
          formatFractionTotal: function (number) {
            return ('' + number + ' ');
          },
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
              '' +
              '<span class="' + totalClass + '"></span>';
          }
        }}
        slidesPerView={1.1}
        spaceBetween={36}
        loop={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide  >
          <img src={slideVideoUrl1} alt="" className="w-100" height={612} />
          <div className="slidervideo">
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="mt-46 pl-114">
            <p className="m-0 ffG fscolor">Description of video and image ipsum dolor sit amet</p>
          </div>
        </SwiperSlide>

        <SwiperSlide   >
          <img src={slideVideoUrl2} alt="" className="w-100" height={612} />
          <div className="slidervideo">
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="mt-46 pl-114">
            <p className="m-0 ffG fscolor">Description of video and image ipsum dolor sit amet</p>
          </div>
        </SwiperSlide>

        <SwiperSlide  >
          <img src={slideVideoUrl3} alt="" className="w-100" height={612} />
          <div className="slidervideo">
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="mt-46 pl-114">
            <p className="m-0 ffG fscolor">Description of video and image ipsum dolor sit amet</p>
          </div>
        </SwiperSlide>

        <SwiperSlide  >
          <img src={slideVideoUrl4} alt="" className="w-100" height={612} />
          <div className="slidervideo">
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="mt-46 pl-114">
            <p className="m-0 ffG fscolor">Description of video and image ipsum dolor sit amet</p>
          </div>
        </SwiperSlide>

        <SwiperSlide  >
          <img src={slideVideoUrl4} alt="" className="w-100" height={612} />
          <div className="slidervideo">
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="mt-46 pl-114">
            <p className="m-0 ffG fscolor">Description of video and image ipsum dolor sit amet</p>
          </div>
        </SwiperSlide>

        <SwiperSlide  >
          <img src={slideVideoUrl4} alt="" className="w-100" height={612} />
          <div className="slidervideo">
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="mt-46 pl-114">
            <p className="m-0 ffG fscolor">Description of video and image ipsum dolor sit amet</p>
          </div>
        </SwiperSlide>

        <SwiperSlide  >
          <img src={slideVideoUrl4} alt="" className="w-100" height={612} />
          <div className="slidervideo">
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="mt-46 pl-114">
            <p className="m-0 ffG fscolor">Description of video and image ipsum dolor sit amet</p>
          </div>
        </SwiperSlide>

        <SwiperSlide  >
          <img src={slideVideoUrl4} alt="" className="w-100" height={612} />
          <div className="slidervideo">
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="mt-46 pl-114">
            <p className="m-0 ffG fscolor">Description of video and image ipsum dolor sit amet</p>
          </div>
        </SwiperSlide>

        <SwiperSlide  >
          <img src={slideVideoUrl4} alt="" className="w-100" height={612} />
          <div className="slidervideo">
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="mt-46 pl-114">
            <p className="m-0 ffG fscolor">Description of video and image ipsum dolor sit amet</p>
          </div>
        </SwiperSlide>

        <SwiperSlide  >
          <img src={slideVideoUrl4} alt="" className="w-100" height={612} />
          <div className="slidervideo">
            {values.map((v, idx) => (
              <Button key={idx} className="me-2 mb-2 bg-transparent" onClick={() => handleShow(v)}>
                  <div className='justify-content-center d-flex border rounded-circle p-2'>
                    <img className="p-3 text-center" src="/img/PlayBtn.svg" alt="" />
                  </div>
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton />
              <Modal.Body className="model-popup" closeButton>
                <iframe className="w-100 h-100" src="https://www.youtube.com/embed/jj30NFfy10s?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div className="mt-46 pl-114">
            <p className="m-0 ffG fscolor">Description of video and image ipsum dolor sit amet</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default PaginationSlider

