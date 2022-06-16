import React from 'react';
import ImgGallary from '../../components/imggallary/ImgGallary';
import ImgGrid from '../../components/imggrid/ImgGrid';
import Information from '../../components/infodesc/Information';
import PaginationSlider from '../../components/paginationslider/PaginationSlider';
import SectionHero from '../../components/sectionHero/SectionHero';
import Layout from '../../components/layout/Layout';
import SwiperSlider from '../../components/swiperslider/SwiperSlider';

const Experiences = () => {
    // img grid data
    const imageGridList = [
        {
            image: "/img/elephant.png",
            title: "Game Drives",
            description: "Traversing through the concession, the wildlife is sometimes staggering in its diversity."
        },
        {
            image: "/img/tourist.png",
            title: "Wilderness wav lks",
            description: "The diversity of fauna and flora in this unique concession truly comes alive when viewed on foot."
        },
        {
            image: "/img/leopardstatue.png",
            title: "leopard creek golf club",
            description: "Innovative architectural and landscaping techniques ensure that the Leopard Creek golf course is naturally protected from animals"
        },
        {
            image: "/img/relex.jpg",
            title: "Pilgrims rest retreat",
            description: "Escape to enjoy some pampering. Awaken your senses and allow us to rejuvenate body, mind and soul."
        },
        {
            image: "/img/kidsonsafari.png",
            title: "Kids on safari",
            description: "Create a lifetime of memories. Enjoy our outdoor activites such as game drives, night walks and swimming."
        },
        {
            image: "/img/trees.png",
            title: "flora & Fauna",
            description: "With the Kruger National Park being so vast it naturally has a tremendous botanic diversity."
        },
        {
            image: "/img/sparrow.png",
            title: "Bird watching",
            description: "The tranquil atmosphere at the Lodge allows for the avid birdwatcher to observe the wide diversity of birds that visit the area."
        },
    ]


    return (
        <div>
            <Layout>
                <SectionHero heroImage="/img/experiencesHero.png"
                title="Experiences at Jock"
                isDescription="Whether you’re looking for an exhilarating outdoor adventure or relaxing quality time with loved ones, Jock has something for you."
            />
            <Information
                description={"With 6 000 hectares of natural landscape offers guests one of the best Big 5 game viewing experiences in South Africa with its exclusive riverbed traversing rights."}
            />
            <div className="container-fluid my-5 py-5">
                <div className="row md:px-67">
                    {imageGridList.map(item => {
                        return <ImgGrid img={item.image} title={item.title} desc={item.description} />
                    })}
                </div>
            </div>
            {/* video slider */}
            
            <PaginationSlider slideVideoUrl1="/img/elephantvideo.jpg"
                slideVideoUrl2="/img/StaySingleSubHero.png"
                slideVideoUrl3="/img/OfferSingleHero.png"
                slideVideoUrl4="/img/videoslide1.jpg"
            />
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

export default Experiences