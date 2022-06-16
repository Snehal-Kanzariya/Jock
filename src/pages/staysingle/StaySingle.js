import React from 'react'
import SectionHero from '../../components/sectionHero/SectionHero';
import '../../App.css';
import './StaySingle.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ImgPotrait from '../../components/img-potrait/ImgPotrait';
import ImgGallary from '../../components/imggallary/ImgGallary';
import PaginationSlider from '../../components/paginationslider/PaginationSlider';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import Accordion from 'react-bootstrap/Accordion'
import Layout from '../../components/layout/Layout';

const StaySingle = () => {
    return (
        <div>
            <Layout>
                <SectionHero heroImage="/img/StaySingleSubHero.png"
                    isVideo={true}
                    title="Jock Main Lodge"
                    videoUrl="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0"
                    isDescription="The ultimate place to be in the Kruger"
                />
                <Container>
                    <Row className="my-5 justify-content-center d-flex mx-260">
                        {/* 1 */}
                        <Col>
                            <div className="justify-content-center d-flex">
                                <img src="/img/secluded.svg" alt="" className="text-center" />
                            </div>
                            <div>
                                <p className="ffG desc">12 secluded thatched suites</p>
                            </div>
                        </Col>
                        {/* 2 */}
                        <Col>
                            <div className="justify-content-center d-flex">
                                <img src="/img/pool &decks.svg" alt="" />
                            </div>
                            <div>
                                <p className="ffG desc">Private plunge
                                    pool and decks
                                </p>
                            </div>
                        </Col>
                        {/* 3 */}
                        <Col>
                            <div className="justify-content-center d-flex">
                                <img src="/img/wifi.svg" alt="" />
                            </div>
                            <div>
                                <p className="ffG desc">Complimentary wifi</p>
                            </div>
                        </Col>
                        {/* 4 */}
                        <Col>
                            <div className="justify-content-center d-flex">
                                <img src="/img/AC.svg" alt="" />
                            </div>
                            <div>
                                <p className="ffG desc">air Conditioning</p>
                            </div>
                        </Col>
                        {/* 5 */}
                        <Col>
                            <div className="justify-content-center d-flex">
                                <img src="/img/Gift.svg" alt="" />
                            </div>
                            <div>
                                <p className="ffG desc">Gift Boutique</p>
                            </div>
                        </Col>
                        {/* 6 */}
                        <Col>
                            <div className="justify-content-center d-flex">
                                <img src="/img/Kids.svg" alt="" />
                            </div>
                            <div>
                                <p className="ffG desc">Kids Safari program</p>
                            </div>
                        </Col>
                        {/* 7 */}
                        <Col>
                            <div className="justify-content-center d-flex">
                                <img src="/img/Relaxation.svg" alt="" />
                            </div>
                            <div>
                                <p className="ffG desc">Relaxation retreat</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ImgPotrait
                    isReverse={true}
                    image="/img/outdoorroom.jpg"
                    subtitle="Jock Main Lodge"
                    maintitle="A secluded paradise that overlooks serene riverbeds."
                    description="Main Jock Lodge ensures guests will experience a stay of seclusion and in pure harmony with the natural surroundings. Twelve secluded thatched suites, offering utter privacy, are veiled with lush trees and reed walls. Each leads on to a private deck with plunge pool and a Sala, an outdoor day bed, all with a spectacular view of the riverbed. Main Jock Lodge will help your soul capture the essence of finding your inner peace amidst the calls of the wild."
                    button="enquire now"
                    isBookingButton={true}
                />
                <ImgPotrait
                    isReverse={true}
                    image="/img/hotelrooms.jpg"
                    subtitle="Jock Main Lodge"
                    maintitle="Details & Amentities"
                    description="All 12 rooms can sleep a maximum of 2 adults per room"
                    button="enquire now"
                    isList1={true}
                    isBookingButton={true}
                />
                {/* video slider */}
                <PaginationSlider slideVideoUrl1="/img/Lake.jpg"
                    slideVideoUrl2="/img/OfferSingleHero.png"
                    slideVideoUrl3="/img/videoslide1.jpg"
                    slideVideoUrl4="/img/Lake.jpg"
                />
                <ImgPotrait
                    isReverse={true}
                    image="/img/outside.jpg"
                    subtitle="Jock Main Lodge"
                    maintitle="Rates, Includes & Excludes"
                    description=""
                    button="View Full Rates"
                    isTabList={true}
                    isBookingButton={true}
                />
                {/* images slider */}
                <div className="d-md-flex mb-221">
                    <div className="ps-70 pe-110 md:py-5">
                        <h2 className="title fscolor titlefs">Discover our current offers for Jock Main Lodge</h2>
                        <p className="ffG fs-14 tcolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        <img src="/img/swiper-previous.svg" className="me-3" alt="" />
                        <img src="/img/swiper-next.svg" alt="" />
                    </div>
                    <Swiper
                        slidesPerView={"1.2"}
                        spaceBetween={33}
                        // pagination={{
                        //     clickable: false
                        // }}
                        modules={[Pagination]}
                        className="mySwiper d-flex mw-842"
                    >

                        <SwiperSlide  >
                            <img src="/img/opencafe.jpg" alt="" className="w-100" height={357} />
                            <h2 className="title tcolor mt-44">South African Residents Rates</h2>
                            <p className="ffG">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="btn ffG fscolor content-btn pb-3 cool-link">Explore</div>
                        </SwiperSlide>
                        <SwiperSlide   >
                            <img src="/img/golfground.jpg" alt="" className="w-100" height={357} />
                            <h2 className="title tcolor mt-44">Come for golf , stay for safari</h2>
                            <p className="ffG">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="btn ffG fscolor content-btn pb-3 cool-link">Explore</div>
                        </SwiperSlide>
                        <SwiperSlide  >
                            <img src="/img/bird.png" alt="" className="w-100" height={357} />
                            <h2 className="title tcolor mt-44">South African Residents Rates</h2>
                            <p className="ffG">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="btn ffG fscolor content-btn pb-3 cool-link">Explore</div>
                        </SwiperSlide>
                        <SwiperSlide  >
                            <img src="/img/hotel-room.png" alt="" className="w-100" height={357} />
                            <h2 className="title tcolor mt-44">South African Residents Rates</h2>
                            <p className="ffG">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="btn ffG fscolor content-btn pb-3 cool-link">Explore</div>
                        </SwiperSlide>
                        <SwiperSlide  >
                            <img src="/img/bird.png" alt="" className="w-100" height={357} />
                            <h2 className="title tcolor mt-44">South African Residents Rates</h2>
                            <p className="ffG">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="btn ffG fscolor content-btn pb-3 cool-link">Explore</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* ..faq */}
                <div className="mb-71">
                    <h1 className="title fscolor titlefs text-center">Frequently asked questions</h1>
                    <p className="ffG fs-14 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="justify-content-center d-flex stayaccord">
                    <div className="Abgcolor justify-content-center d-flex mx-860">
                        <Accordion defaultActiveKey="0" flush className="Abgcolor">
                            <Accordion.Item eventKey="0" className="text-center w-860 Abgcolor">
                                <Accordion.Header className="title fs-14 Abgcolor">
                                    What do I need to pack?
                                </Accordion.Header>
                                <Accordion.Body className="ffG Abgcolor">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="text-center w-860">
                                <Accordion.Header className="title fs-14">What is the climate like?</Accordion.Header>
                                <Accordion.Body className="ffG">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="text-center w-860">
                                <Accordion.Header className="title fs-14">What can my children do at Jock Safari Lodge?</Accordion.Header>
                                <Accordion.Body className="ffG">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className="text-center w-860">
                                <Accordion.Header className="title fs-14">Can I take my toddler on a game drive?</Accordion.Header>
                                <Accordion.Body className="ffG">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className="text-center w-860">
                                <Accordion.Header className="title fs-14">What is the best time of year for game viewing?</Accordion.Header>
                                <Accordion.Body className="ffG">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className="text-center w-860">
                                <Accordion.Header className="title fs-14">How do I get to Jock Safari Lodge?</Accordion.Header>
                                <Accordion.Body className="ffG">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <>
                    <div className="container-fluid my-5 py-5 gray">
                        <h1 className="title titlefs fscolor py-5 ps-71">Explore our other lodge</h1>
                        <div className="row md:px-67">
                            <div className="col-md-6 col-12">
                                <img src="/img/Fitzpatrick.png" alt="" height={457} className="w-100 mb-4" />
                            </div>
                            <div className="col-md-5 col-12 ms-auto d-flex justify-content-center flex-column">
                                <h3 className="title tcolor tfs">Fitzpatick’s Lodge</h3>
                                <p className="mw-484 ffG">The intimate Fitzpatrick’s Lodge is stylishly appointed to offer the ultimate private villa experience, accommodating small parties and families on an exclusive-use basis, complete with private guide, vehicle and chef. Children staying at Fitzpatrick’s at Jock are able to take part in the Kids on Safari programme offered.</p>
                                <div className="d-flex flex-row pb-3">
                                    <img src="/img/footprinticon.svg" alt="" className=""/>
                                    <img src="/img/p&d.svg" alt="" className="p-2" />
                                    <img src="/img/wifiicon.svg" alt="" className="p-2" />
                                    <img src="/img/Group.svg" alt="" className="p-2" />
                                    <img src="/img/Group (1).svg" alt="" className="p-2" />
                                    <img src="/img/Group (3).svg" alt="" className="p-2" />
                                </div>
                                <p className="title fs-16 pb-3">From R50 550 villa rate for up to 6 people</p>
                                <div className="d-inline-flex me-4">
                                    <button className="btn btn-color btn-medium text-uppercase">
                                        EXPLORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
                {/* ...Explore our other lodge */}
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
            </Layout>

        </div>
    )
}

export default StaySingle