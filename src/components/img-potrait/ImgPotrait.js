import React from 'react'
import './ImgPotrait.css';
import '../../App.css';
import '../header/Header.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const ImgPotrait = ({ isBacgroundColor,
    isSwiper,
    image,
    subtitle,
    maintitle,
    description,
    seconddesc,
    button,
    isList1,
    isTabList,
    isBookingButton,
    isReverse,
    isimgslider
}) => {
    return (
        <div className={`container-fluid py-128 ${isBacgroundColor && "gray"}`}>
            <div className="row md:px-67">
                <div className={`col-md-6 col-12 ${isReverse && "reverce-order"}`}>
                    <img src={image} alt="" className="h-100 w-100 mb-4 stayatjock_img" />
                    {isimgslider &&
                        <>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper stayatjock_swiper">
                                <SwiperSlide>
                                    <img src="/img/openrestaurant.jpg" alt="" className="h-100 w-100" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/img/openrestaurant.jpg" alt="" className="h-100 w-100" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/img/openrestaurant.jpg" alt="" className="h-100 w-100" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/img/openrestaurant.jpg" alt="" className="h-100 w-100" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/img/openrestaurant.jpg" alt="" className="h-100 w-100" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/img/openrestaurant.jpg" alt="" className="h-100 w-100" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/img/openrestaurant.jpg" alt="" className="h-100 w-100" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/img/openrestaurant.jpg" alt="" className="h-100 w-100" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/img/openrestaurant.jpg" alt="" className="h-100 w-100 mb-4" />
                                </SwiperSlide>
                            </Swiper>
                        </>
                    }
                </div>
                <div className="col-md-6 col-12 ">
                    <div className="mt-3 md:ps-114 md:pt-370">
                        <p className="fscolor ffG fs-12">{subtitle}</p>
                        <h3 className="title tcolor tfs">{maintitle}</h3>
                        <p className="mw-484 ffG">{description}</p>
                        <p className="mw-484 ffG">{seconddesc}</p>
                        {isList1 &&
                            <ul className="list-style ffG ps-1">
                                <li>Air conditioning</li>
                                <li>Private minibar</li>
                                <li>Hairdryer</li>
                                <li>Tea and coffee making facilities</li>
                                <li>Private plunge pool and private decks</li>
                                <li>International dial telephone</li>
                                <li>Electronic safe</li>
                                <li>Ceiling fan</li>
                                <li>En-suite bathroom, with outdoor shower</li>
                                <li>Sala (outdoor day bed) overlooking the river</li>
                                <li>Personally selected books</li>
                                <li>Relaxation Retreat with sauna and exercise room</li>
                                <li>Gift boutique</li>
                                <li>In and outdoor dining facilities</li>
                                <li>Library with television and DVD player</li>
                                <li>Pool with deck</li>
                                <li>Complimentary Wi-Fi</li>
                            </ul>
                        }
                        {isTabList &&
                            <>
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                                            type="button" role="tab" aria-controls="pills-home" aria-selected="true">Includes</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                                            type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Excludes</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="detail-content w-100">
                                            <ul className="ps-16 list-style ffG">
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Consectetur adipiscing elit, sed do eiusmod.</li>
                                                <li>Incididunt ut labore et dolore magna aliqua.</li>
                                                <li>Quis nostrud exercitation</li>
                                                <li>Ea commodo</li>
                                                <li>Quis nostrud exercitation</li>
                                                <li>Duis aute irure dolor in reprehenderit it voluptat.</li>
                                                <li>Quis nostrud exercitation</li>
                                                <li>Ea commodo</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="detail-content">
                                            <ul className="ps-16 list-style ffG">
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Consectetur adipiscing elit, sed do eiusmod.</li>
                                                <li>Incididunt ut labore et dolore magna aliqua.</li>
                                                <li>Quis nostrud exercitation</li>
                                                <li>Ea commodo</li>
                                                <li>Quis nostrud exercitation</li>
                                                <li>Duis aute irure dolor in reprehenderit it voluptat.</li>
                                                <li>Quis nostrud exercitation</li>
                                                <li>Ea commodo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p className="title">From R10 110 per person per night sharing</p>
                            </>
                        }
                        {isBookingButton &&
                            <div className="d-inline-flex me-4">
                                <button className="btn btn-color btn-medium">
                                    MAKE A BOOKING
                                </button>
                            </div>
                        }
                        <div className="btn ffG fscolor content-btn mt-3 pb-3 cool-link">
                            {button}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgPotrait