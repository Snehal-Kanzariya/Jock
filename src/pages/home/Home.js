import React from 'react';
import '../../App.css';
import SectionHero from '../../components/sectionHero/SectionHero';
import './Home.css';

import PaginationSlider from '../../components/paginationslider/PaginationSlider';
import ImgGrid from '../../components/imggrid/ImgGrid';
import ImgPotrait from '../../components/img-potrait/ImgPotrait';
import ImgGallary from '../../components/imggallary/ImgGallary';
import Layout from '../../components/layout/Layout';
import SwiperSlider from '../../components/swiperslider/SwiperSlider';

const Home = () => {

  const imageGridList = [{
    image: "/img/JockMainLodge.png",
    title: "Jock Main Lodge",
    description: "A secluded paradise overlooking serene riverbeds, Jock Main Lodge has 12 thatched suites offering privacy and uninterrupted views."
  },
  {
    image: "/img/Fitzpatrick.png",
    title: "Fitzpatrick’s Lodge",
    description: "A secluded paradise overlooking serene riverbeds, Jock Main Lodge has 12 thatched suites offering privacy and uninterrupted views."
  }
  ]

  return (
    <div>
      <Layout>
        <SectionHero heroImage="/img/HomeHero.png"
          isVideo={true}
          title="Unearth the place"
          title1={"of legend"}
          videoUrl="https://www.youtube.com/embed/YMtgjRLfR-U?autoplay=1&showinfo=0&controls=0"
        // isDescription="Experience an authentic, unfiltered safari like never before at our Jock Safari Lodges in Kruger National Park."
        />
        <>
          <div className="container-fluid my-5 mt-195">
            <div className="row md:px-142">
              <div className="col-md-6 md:pe-20 d-flex justify-content-sm-center sm:px-5">
                <h1 className="title fscolor titlefs">The Original Private Safari Lodge in Kruger National Park</h1>
              </div>
              <div className="col-md-6 md:ps-20 d-flex justify-content-sm-center flex-column sm:mt-3 sm:px-5">
                <p className="ffG">As the legend goes, deep in the heart of the Kruger National Park lies a place so spectacular that it inspired bedtime tales told all across the globe. Today, this legend continues at Jock Safari Lodge. We invite you to step back into a simpler time and onto the pages of the classic African tale Jock of the Bushveld by Sir Percy Fitzpatrick, a story of courage and love between man and man's best friend. </p>
                <p className="ffG">For your Big 5 safari adventure, choose between the private thatched suites on the riverbed or the exclusive-use Fitzpatrick at Jock camp, perfect for your family holiday or adventure with friends. Take it a step further by trading your bed for an outdoor sala one night, drifting off to the soundtrack of the nightlife.  </p>
                <div className="btn ffG fscolor content-btn cool-link">
                  Explore accomodation
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className="container-fluid my-5 py-5">
            <div className="row md:px-67">
              {imageGridList.map(item => {
                return <ImgGrid img={item.image} title={item.title} desc={item.description} />
              })}
            </div>
          </div>
        </>

        <>
          <ImgPotrait
            isBacgroundColor={true}
            isReverse={false}
            image="/img/WhereTwoRiversMeet.jpg"
            subtitle="Location"
            maintitle="Where Two Rivers Meet"
            description={"As the very first private concession granted within Kruger National Park, Jock Safari Lodge is the original safari legend. Located in Kruger's southern region, where the Mitomeni and Biyamiti rivers meet to become one, it will feel like you're stepping back to South Africa's gold rush era. As you stare out at the untamed wild surrounding you, you'll envision Fitzpatrick and Jock's legendary quest across the wide-open African plains. This location and the history behind it are what make Jock Safari Lodge shine. We invite you to a Big 5 safari that's more authentic, immersive, and impactful than any other."}
            button={"Explore Our Location"}
          />
        </>
        {/* video slider  */}
        <>
          <PaginationSlider slideVideoUrl1="/img/videoslide1.jpg"
            slideVideoUrl2="/img/StaySingleSubHero.png"
            slideVideoUrl3="/img/OfferSingleHero.png"
            slideVideoUrl4="/img/videoslide1.jpg"
          />
        </>
        <>
          <ImgPotrait
            isReverse={true}
            image="/img/uninterruptNature.jpg"
            subtitle="Experiences"
            maintitle="Uninterrupted Adventure Awaits"
            description="When you come to Jock Safari Lodge, you're really coming to see the wild spaces and wildlife surrounding our lodge. If you're hungry for exploration, for deeply immersing yourself and learning about the bush's delicate balance and fascinating stories, this is the place for you."
            seconddesc="As the  Top Environmental Concession within Kruger National Park, our active involvement in conservation programmes is a testimony to this. As our guest, you can learn more about what this means and how you can make a difference."
            button="Explore Our Experiences"
          />
        </>
        <>
          <ImgPotrait
            isReverse={false}
            image="/img/safariwithHeart.jpg"
            subtitle="Conservation & Community"
            maintitle="Safari with Heart"
            description="A safari is so much more memorable when you know you've treaded lightly and helped preserve it. At Jock Safari Lodge, we believe in protecting our fascinating wildlife and landscapes by following only the most stringent eco-management criteria in South Africa. Our lodge was also built with sustainability in mind, and we continue with this approach in everything we do. "
            seconddesc="As the  Top Environmental Concession within Kruger National Park, our active involvement in conservation programmes is a testimony to this. As our guest, you can learn more about what this means and how you can make a difference."
            button={"Explore Conservation & community"}
          />
        </>
        {/* img slider */}
        <SwiperSlider />

        <>
          <ImgGallary
            title={"Uncover our stories from the wilderness"}
            subTitle={"Read all about what’s happening at our lodge to inspire your stay, feed your nostalgia, or simply leave you daydreaming about Africa and her mysterious stories."}
            button={"Explore all blogs"}
            image1={"/img/Giraffe.jpg"}
            image1Title={"Giraffe"}
            image1Description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
            image2={"/img/GuestHouse.jpg"}
            image2Title={"Torburnlea Guest House"}
            image2Description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
            image3={"/img/Gracious.jpg"}
            image3Title={"Gracious! It’s a G-NU!"}
            image3Description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
          />
        </>
      </Layout>


    </div>
  );
}

export default Home