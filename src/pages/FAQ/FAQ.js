import React from 'react'
import Information from '../../components/infodesc/Information'
import SectionHero from '../../components/sectionHero/SectionHero'
import Accordion from 'react-bootstrap/Accordion'
import './FAQ.css';
import ImgGallary from '../../components/imggallary/ImgGallary';
import Layout from '../../components/layout/Layout';
import SwiperSlider from '../../components/swiperslider/SwiperSlider';
// import '../../App.css';

const FAQ = () => {
    return (
        <div className="gray">
            <Layout>
                <SectionHero 
                    heroImage="/img/FaqHero.png"
                    title="Frequently Asked Questions"
                    isDescription="Below you will find answers to the most common questions that are asked regarding your stay."
                />
                <Information
                    description={" Taking guests on a sensory journey that encapsulates history, flora, fauna, conservation, relaxation and fine South African food and wine.  Relive one of South Africa’s cultural heritages through our wonderful story."}
                // isBacgroundColor={true}
                />
                {/* accordation faq */}
                <div>
                    <div className="mb-71">
                        <h1 className="title tcolor titlefs text-center">Frequently asked questions</h1>
                        <p className="ffG fs-14 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="justify-content-center d-flex">
                        <div className="justify-content-center d-flex mx-860">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">What do I need to pack?</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
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
                                    <Accordion.Body className="ffG gray">
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
                                    <Accordion.Body className="ffG gray">
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
                                    <Accordion.Body className="ffG gray">
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
                                    <Accordion.Body className="ffG gray">
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
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6" className="text-center w-860 mt-134">
                                    <Accordion.Header className="title fs-14">What will the daily programme be?</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">What are the requirements to enter South Africa?</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">What are facilities like in South Africa?</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">Travelling to South Africa</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">Electricity</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="11" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">Driving</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6" className="text-center w-860 mt-134">
                                    <Accordion.Header className="title fs-14">People & Language</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">Health</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">Safety</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">Shopping</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">Gratuities</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="11" className="text-center w-860">
                                    <Accordion.Header className="title fs-14">Food & Water</Accordion.Header>
                                    <Accordion.Body className="ffG gray">
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

export default FAQ