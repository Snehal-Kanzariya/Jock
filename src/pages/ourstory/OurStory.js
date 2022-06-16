import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import ImgPotrait from '../../components/img-potrait/ImgPotrait'
import ImgGallary from '../../components/imggallary/ImgGallary'
import Information from '../../components/infodesc/Information'
import Layout from '../../components/layout/Layout'
import PaginationSlider from '../../components/paginationslider/PaginationSlider'
import SectionHero from '../../components/sectionHero/SectionHero'
import SwiperSlider from '../../components/swiperslider/SwiperSlider'
import './OurStory.css'

const OurStory = () => {
    return (
        <div>
            <Layout>
                <SectionHero heroImage="/img/OurStoryHero.png"
                    title="The story of Jock"
                    isDescription="Located within 6, 000 ha of pristine bushveld, Relive one of South Africa’s cultural heritages through our story."
                />
                <Information
                    description={"Steeped in history, Jock Safari Lodge was the first private concession granted within the Kruger National Park and is named after local legend, Jock of the Bushveld, the canine hero of Sir Percy FitzPatrick."}
                />
                <ImgPotrait
                    isReverse={true}
                    image="/img/jeep.jpg"
                    subtitle="Our Story"
                    maintitle="A story of courage and loyalty"
                    description="The lure of gold brought men from all corners of the world to Southern Africa. Sir Percy Fitzpatrick, renowned South African author, was one of these.The gold-rich capital of Thula Mela, situated on a hill at the fork of the Limpopo and Lebuvu Rivers 200 km north of Jock Safari Lodge, served as the trading centre of Southern Africa.The prospectors passed through some of Africa’s most scenic, untamed wilderness. It is in this area that Jock Safari Lodge is based, with our Southern Boundary being the old Voortrekker road from Delagoa Bay (now Maputo) to the goldfields of the interior at Pilgrims Rest."
                />
                {/* video slider */}
                <PaginationSlider slideVideoUrl1="/img/elephantsride.jpg"
                    slideVideoUrl2="/img/Lake.jpg"
                    slideVideoUrl3="/img/OfferSingleHero.png"
                    slideVideoUrl4="/img/videoslide1.jpg"
                />

                <ImgPotrait
                    isReverse={false}
                    image="/img/guesthouse.jpg"
                    subtitle="Our Story"
                    maintitle="Africa’s most scenic, untamed wilderness. "
                    description="Today, the wilderness experience we offer is unchanged from those early times and is an area noted for its diversity in game, particularly the BIG FIVE. In 1982, the Niven Family built a fence around the camp, which helped in preserving all the trees from destruction by visiting elephants. "
                    seconddesc="The conservation-conscious Niven family also planted indigenous trees within the fenced area, which has grown to create a canopied ambience of shade different to the exposed wilderness just outside of the lodge.Nestled at the confluence of the Mitomeni and Biyamiti rivers at the southern tip of the KNP, the legend of an intrepid explorer, Sir Percy Fitzpatrick and his trusted dog, Jock, lives on."
                    button="EXPLORE COMMUNITY & CONSERVATION"
                />
                <ImgPotrait
                    isReverse={true}
                    image="/img/animalchild.jpg"
                    subtitle="Our Story"
                    maintitle="Africa’s most scenic, untamed wilderness. The Legend of Jock"
                    description="The concept was born by the descendants of Sir Percy Fitzpatrick – the Niven family.They used the trust funds of Sir Fitzpatrick to build a lodge in the area close to where the story of Sir Percy Fitzpatrick and his dog Jock took place. Sir Fitzpatrick was educated at Downside Abbey, near Bath (England), and later at St. Aidan’s College, Grahamstown. On his father’s death in 1880, he left college in order to support his mother and her family."
                    seconddesc="In 1884, he went to the Eastern Transvaal goldfields, where he worked as a storeman, prospector’s hand, journalist and transport-rider, travelling from Lourenco Marques to Lydenburg and Barberton by ox-wagon. At the latter place, he became editor of the Gold Fields News."
                />
                <ImgPotrait
                    isReverse={false}
                    image="/img/guesthouse.jpg"
                    subtitle="Our Story"
                    maintitle="Jock of the Bushveld, a South African classic."
                    description="Sir Fitzpatrick’s adventures during the pioneering days in the Bushveld are vividly described in Jock of the Bushveld, now a South African classic. At bedtime, he used to recount his experiences with his dog, Jock, to his four children. Rudyard Kipling, an intimate friend, took part in these story-telling evenings and persuaded Fitzpatrick to collect the stories in book form. "
                    seconddesc="When he had done this, the author searched for a suitable artist to illustrate the book and came across Edmund Caldwell. He brought him to South Africa to see the Bushveld and make the drawings on the spot.The book appeared in 1907 and had an enthusiastic reception, being reprinted four times in that year. It has remained a special favourite in South Africa and has been widely read abroad, appearing in several forms and languages.The Caleo Foundation is proud to own this property and is guided by the philosophy of Quality, Excellence and Distinction. The pleasure is ours… make the experience yours!"
                    button="EXPLORE COMMUNITY & CONSERVATION"
                />
                {/* map image */}
                <div>
                    <h1 className="title fstitle tcolor text-center my-5">Discover our other property</h1>
                    <div className="discoverbg row">
                        <div className="col-lg-6 col-12 pt-290 ps-78 pb-5">
                            <img src="/img/sanbona_footerlogo 2.svg" alt="" />
                            <p className="ffG fs-14 text-white mx-438 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <Link to="/">
                                <button className="btn btn--outline text-uppercase ffG fs-10 text-white">Visit sanbona <img src="/img/mapclick.svg" alt="" /> </button>
                            </Link>

                        </div>
                        <div className="col-lg-6 col-12 pt-270 justify-content-end d-flex pe-76 pb-83">
                            <img src="/img/Group 696.svg" alt="" />
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

export default OurStory