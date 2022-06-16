import React from 'react'
import Information from '../../components/infodesc/Information';
import SectionHero from '../../components/sectionHero/SectionHero';
import '../../App.css';
import './Destination.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ImgPotrait from '../../components/img-potrait/ImgPotrait';
import ImgGallary from '../../components/imggallary/ImgGallary';
import Layout from '../../components/layout/Layout';
import SwiperSlider from '../../components/swiperslider/SwiperSlider';


const Destination = () => {
    return (
        <div>
            <Layout>
                <SectionHero heroImage="/img/DestinationHero.png"
                    title="Kruger National Park"
                    isDescription="The world-renowned Kruger National Park offers a wildlife experience that ranks with the best in Africa."
                />
                <Information
                    description={"Where nearly 2 million hectares of unrivalled diversity of life forms fuses with historical and archaeological sites – this is real Africa. Kruger National Park is truly the flagship of the South African National Parks"}
                />
                <ImgPotrait
                    isReverse={true}
                    image="/img/cub.jpg"
                    subtitle="Destination"
                    maintitle="South Africa’s largest national park."
                    description="Established in 1898 to protect the wildlife of the South African Lowveld, this national park of nearly 2 million hectares, SANParks – Kruger National Park is unrivalled in the diversity of its life forms and a world leader in advanced environmental management techniques and policies."
                    seconddesc="Truly the flagship of the South African National Parks, Kruger is home to an impressive number of species: 336 trees, 49 fish, 34 amphibians, 114 reptiles, 507 birds and 147 mammals. Man’s interaction with the Lowveld environment over many centuries – from bushman rock paintings to majestic archaeological sites like Masorini and Thulamela – is very evident in the Kruger National Park. These treasures represent the cultures, persons and events that played a role in the history of the Kruger National Park and are conserved along with the park’s natural assets."
                />
                <ImgPotrait
                    isReverse={false}
                    image="/img/elephantfamily.jpg"
                    subtitle="Destination"
                    maintitle="The first explorer, François de Cuiper"
                    description="The first explorer to set foot in the region was the Dutchman François de Cuiper who led a Dutch East India Company expedition to explore. However, the expedition was attacked and driven by local tribes-people near Gomondwane. Only around 1838 Voortrekker expeditions led by Louis Trichardt and Hans van Rensburg were able to successfully establish forward outposts. Hundreds of Europeans and farmers came to the Lowveld lured by rumours of gold and the great quantity of valuable commodities such as ivory and skins."
                    seconddesc="This caused the number of game to dramatically decrease due to hunting and trading of animal skins and horns. President Paul Kruger was told about the rapid destruction of wildlife in the area by hunters, after which he succeeded to persuade the Transvaal parliament to establish a protected area for the wildlife in the Lowveld region. The “Sabie Game Reserve”, bordered by the Crocodile River in the south, the Sabie River in the north, the Lebombo Mountains in the east and the Drakensberg Mountains in the west, which is now the southern part of the Kruger National Park, was established in 1898."
                />
                <ImgPotrait
                    isReverse={true}
                    image="/img/cub.jpg"
                    subtitle="Destination"
                    maintitle="The Park was opened to the public in 1927"
                    description="The reserves would eventually expand into today’s Kruger National Park. The Anglo-Boer War stopped any further development of the reserve, but the British, after winning the war, proceeded with the plan to develop the Sabie Game Reserve and gave the task to major James Stevenson-Hamilton in 1902 to protect the animals against hunters, ivory poachers and cattle farmers. "
                    seconddesc="The Park was opened to the public in 1927 for visitors to view animals and plant life in an area where they are protected. After the Anglo-Boer War, James Stevenson-Hamilton was appointed as the first park warden. He spent the next 40 years protecting what the war had destroyed. His actions are no doubt an ever-living contribution to the Kruger National Park’s current existence. In addition to his animal conservation, James Stevenson Hamilton was also responsible for acquiring another 10 000 hex acres for the reserve."
                />
                <ImgPotrait
                    isReverse={false}
                    image="/img/elephantfamily.jpg"
                    subtitle="Destination"
                    maintitle="A protected wilderness reserve"
                    description="After World War I, the Kruger National Park was protected by the government of South Africa and remains under the watchful eye of the government even today. "
                    seconddesc="The very first ranger in the reserve was Paul Bester who made his residence in a rustic rondavel (hut) which is now the site of the headquarters camp, Skukuza. Documents concerning the history of the Kruger National Park can be viewed at the Skukuza Library. Half a million years ago, the first San stone age hunters roamed the plains in search of game. The modern day bushmen have left fascinating rock paintings all over the Republic of South Africa, and, Kruger National Park contains over one hundred sites of these paintings. The Kruger National Park is a living memorial to President Paul Kruger and those who have upheld his vision of a protected wilderness reserve which will forever remind us of that which we are so dangerously close to losing."
                />
                <div className="l-gray pb-5 pt-133">
                    <div className="justify-content-center d-flex ">
                        <h1 className="tcolor fs-45 title">Points Of Interest</h1>
                    </div>
                    <p className="text-center ffG fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <Container>
                        <Row className="my-5 justify-content-center d-flex sm:mx-150 mx-4 text-capitalize">
                            {/* 1 */}
                            <Col>
                                <div className="justify-content-center d-flex">
                                    <img src="/img/footprint.svg" alt="" className="text-center" />
                                </div>
                                <div>
                                    <p className="ffG desc">Lorem ipsum dolor sit </p>
                                </div>
                            </Col>
                            {/* 2 */}
                            <Col>
                                <div className="justify-content-center d-flex">
                                    <img src="/img/durbin.svg" alt="" />
                                </div>
                                <div>
                                    <p className="ffG desc">Bird watching </p>
                                </div>
                            </Col>
                            {/* 3 */}
                            <Col>
                                <div className="justify-content-center d-flex">
                                    <img src="/img/Consectetur.svg" alt="" />
                                </div>
                                <div>
                                    <p className="ffG desc">Consectetur Adipiscing</p>
                                </div>
                            </Col>
                            {/* 4 */}
                            <Col>
                                <div className="justify-content-center d-flex">
                                    <img src="/img/camera.svg" alt="" />
                                </div>
                                <div>
                                    <p className="ffG desc">a eiusmod tempor</p>
                                </div>
                            </Col>
                            {/* 5 */}
                            <Col>
                                <div className="justify-content-center d-flex">
                                    <img src="/img/flight.svg" alt="" />
                                </div>
                                <div>
                                    <p className="ffG desc">Multiple Airports</p>
                                </div>
                            </Col>
                            {/* 6 */}
                            <Col>
                                <div className="justify-content-center d-flex">
                                    <img src="/img/wildlifefilms.svg" alt="" />
                                </div>
                                <div>
                                    <p className="ffG desc">Many wildlife films</p>
                                </div>
                            </Col>
                            {/* 7 */}
                            <Col>
                                <div className="justify-content-center d-flex">
                                    <img src="/img/bushveld.svg" alt="" />
                                </div>
                                <div>
                                    <p className="ffG desc">Jock of the bushveld</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
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

export default Destination