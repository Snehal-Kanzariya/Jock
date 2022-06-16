import React from 'react'
import ImgGallary from '../../components/imggallary/ImgGallary'
import ImgGrid from '../../components/imggrid/ImgGrid'
import Information from '../../components/infodesc/Information'
import Layout from '../../components/layout/Layout'
import PaginationSlider from '../../components/paginationslider/PaginationSlider'
import SectionHero from '../../components/sectionHero/SectionHero'
import SwiperSlider from '../../components/swiperslider/SwiperSlider'

const Offers = () => {
    const imageGridList = [
        {
            id: "1",
            image: "/img/opencafe.jpg",
            title: "South African Residents Rates",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
        },
        {
            id: "2",
            image: "/img/golfground.jpg",
            title: "Come for golf , stay for safari",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
        },
        {
            id: "3",
            image: "/img/longstay.jpg",
            title: "Long Stay Discount",
            description: "Receive 10% discount when booking 3 consecutive nights at any luxury lodge"
        },
        {
            id: "4",
            image: "/img/sole.jpg",
            title: "Sole Use Offer",
            description: "Book sole use (all rooms) of Main Jock for 2 nights and receive 1 room free of charge. "
        },
        {
            id: "5",
            image: "/img/earlybooking.jpg",
            title: "Early Booker Promotion",
            description: "Make a confirmed booking at any luxury lodge 6 months or more prior to arrival and receive a 10% discount. "
        },
        {
            id: "6",
            image: "/img/ani.jpg",
            title: "Honeymoon or Anniversary offer",
            description: "Receive a complimentary bottle of bubbly, welcome platter, romantic turndown and exclusive sleep out option when booking with us."
        },
    ]
    return (
        <div>
            <Layout>
                <SectionHero heroImage="/img/OfferHero.png"
                title="Offers at Jock"
                isDescription="Get the most value from your safari experience with our exclusive Kruger National Park safari offers. Please note that all our offers are subject to availability."
            />
            <Information
                description={"We want our safari adventures to be more accessible and with extra add-ons to make them that much more memorable. Keep an eye on our offers page to ensure you don’t miss out."}
            />
            <div className="container-fluid my-5 py-5">
                <div className="row md:px-67">
                    {imageGridList.map(item => {
                        return <ImgGrid img={item.image} title={item.title} desc={item.description} />
                    })}
                </div>
            </div>
            {/* ...video slider */}
            <PaginationSlider slideVideoUrl1="/img/Lioness.jpg"
                slideVideoUrl2="/img/Lake.jpg"
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

export default Offers