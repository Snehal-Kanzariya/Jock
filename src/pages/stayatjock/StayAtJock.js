import React from 'react';
import SectionHero from '../../components/sectionHero/SectionHero';
import '../../App.css';
import Information from '../../components/infodesc/Information';
import ImgGallary from '../../components/imggallary/ImgGallary';
import Layout from '../../components/layout/Layout';
import SwiperSlider from '../../components/swiperslider/SwiperSlider';
import ImgPotrait from '../../components/img-potrait/ImgPotrait';
import './StayAtJock.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const StayAtJock = () => {
    return (
        <div>
            <Layout>
                <SectionHero heroImage="/img/stayHero.jpg"
                    title="Stay at Jock"
                    isDescription="Experience an authentic, unfiltered safari like never before at our Jock Safari Lodges in Kruger National Park."
                />
                <Information
                    description={"Located in 6,000 ha of untouched African bushveld within the Kruger National Park, we invite you for a legendary, exclusive Big 5 game viewing opportunity with its exclusive riverbed traversing rights."}
                />
                {/* ....zigzag imagwith slider */}
                <div className="stayatjock">
                    <div className="stayatswiper">
                        <div className="row md:px-67 ">
                            <div className="col-md-6 col-12 mb-250">
                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper stayatjock_swiper">
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className="col-md-6 col-12 ">
                                <div className="mt-3 md:ps-114 md:pt-370">
                                    <p className="fscolor ffG fs-12">Accommodation</p>
                                    <h3 className="title tcolor tfs">Jock Main Lodge</h3>
                                    <p className="mw-484 ffG">The Main Lodge was built in the timeless style of an African safari dwelling. Elegance meets authenticity at our 12 secluded thatched suites, offering uninterrupted privacy, spectacular views of the riverbed and a private sala (outdoor daybed) providing guests with a sleep-out option. Each suite is encompassed by lush foliage and reed walls, with a private deck and plunge pool. Enjoy utter harmony with your natural surroundings and allow the Main Jock Lodge to transport you to the ultimate state of relaxation.</p>
                                    <div className="d-flex flex-row pb-3">
                                        <img src="/img/calander.svg" alt="" />
                                        <img src="/img/p&d.svg" alt="" className="p-2" />
                                        <img src="/img/wifiicon.svg" alt="" className="p-2" />
                                        <img src="/img/ACicon.svg" alt="" className="p-2" />
                                        <img src="/img/gifticon.svg" alt="" className="p-2" />
                                        <img src="/img/childrenicon.svg" alt="" className="p-2" />
                                        <img src="/img/lotusicon.svg" alt="" className="p-2" />
                                    </div>
                                    <p className="title fs-16 pb-3">From R10 110 per person per night sharing</p>
                                    <div className="d-inline-flex me-4">
                                        <button className="btn btn-color btn-medium">
                                            Explore
                                        </button>
                                    </div>
                                    <div className="btn ffG fscolor content-btn mt-3 pb-3 cool-link">MAKE A BOOKING</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stayatswiper-reversce">
                        <div className="row md:px-67">
                            <div className="col-md-6 col-12 ">
                                <div className="mt-3 md:ps-114 md:pt-370">
                                    <p className="fscolor ffG fs-12">Accommodation</p>
                                    <h3 className="title tcolor tfs">Fitzpatick’s Lodge</h3>
                                    <p className="mw-484 ffG">At Fitzpatrick’s at Jock, we provide a unique villa-style experience, perfect for small parties and families. The lodge comes with a private guide, game vehicle and chef, accommodating groups on an exclusive-use basis. Ideally located on the banks of the riverbed, it offers spacious indoor and outdoor living and dining areas, a private boma and a swimming pool. Each of the three luxurious suites’ also has an outdoor shower and bath that offer unforgettable nocturnal soaks under the stars. Childminding services are available when parents want some time alone.</p>
                                    <div className="d-flex flex-row pb-3">
                                        <img src="/img/Group (2).svg" alt="" />
                                        <img src="/img/p&d.svg" alt="" className="p-2" />
                                        <img src="/img/wifiicon.svg" alt="" className="p-2" />
                                        <img src="/img/Group.svg" alt="" className="p-2" />
                                        <img src="/img/Group (1).svg" alt="" className="p-2" />
                                        <img src="/img/Group (3).svg" alt="" className="p-2" />
                                    </div>
                                    <p className="title fs-16 pb-3">From R50 550 villa rate for up to 6 people</p>
                                    <div className="d-inline-flex me-4">
                                        <button className="btn btn-color btn-medium">
                                            Explore
                                        </button>
                                    </div>
                                    <div className="btn ffG fscolor content-btn mt-3 pb-3 cool-link">MAKE A BOOKING</div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                {/* <img src={image} alt="" className="h-100 w-100 mb-4 stayatjock_img" /> */}

                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper stayatjock_swiper">
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/openrestaurant.jpg" alt="" height={740} className="w-100" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                        </div>
                        {/* copyover */}
                    </div>
                </div>

                <ImgGallary
                    title={"Discover more about Jock Safari Lodge"}
                    subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.  "}
                    image1={"/img/babyelephant.jpg"}
                    image1Title={"Experiences"}
                    image1Description={"Jock offer one of the best Big 5 game viewing experiences in South Africa with its exclusive riverbed traversing rights."}
                    image2={"/img/leopard.jpg"}
                    image2Title={"Location"}
                    image2Description={"The lodge is an exclusive private concession, perfectly positioned in the southern part of the Kruger National Park"}
                    image3={"/img/openrestaurant.jpg"}
                    image3Title={"Offers"}
                    image3Description={"Get the most value from your safari experience with our exclusive Kruger National Park safari offers. "}
                />
                <SwiperSlider />
            </Layout>

        </div>
    )
}

export default StayAtJock