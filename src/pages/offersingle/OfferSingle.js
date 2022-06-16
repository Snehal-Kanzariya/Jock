import React from 'react'
import ImgPotrait from '../../components/img-potrait/ImgPotrait';
import Layout from '../../components/layout/Layout';
import SectionHero from '../../components/sectionHero/SectionHero';

const OfferSingle = () => {
  return (
    <div>
      <Layout>
        <SectionHero heroImage="/img/OfferSingleHero.png"
        title="South African Residents Special"
        isDescription="Valid until 31 July 2022 | Excluding: 15- 18 April 2022."
      />
      <ImgPotrait
        isReverse={false}
        image="/img/hotelrooms.jpg"
        subtitle="Offers"
        maintitle="Take advantage of our SA residents special"
        description="Escape to 6000ha’s of secluded luxury in the Kruger National Park."
        seconddesc="The Jock concession is regarded as one of the best Big Five game viewing areas in Kruger, and daily game drives and guided walks reveal an area of unbroken landscapes and thriving wildlife."
        isTabList={false}
        isBookingButton={true}
      />
      <ImgPotrait
        isReverse={true}
        image="/img/relex.jpg"
        subtitle="Offers"
        maintitle="Inclusions & Details"
        isTabList={true}
        isBookingButton={true}
      />
      <div>
        <div className="container pb-5 mb-5 mw-782">
          <p className="fscolor ffG">Offers</p>
          <h1 className="title">Terms & Conditions</h1>
          <ul className="list-style ffG ps-16">
            <li>Valid for South African Residents only. All guests to produce a valid South African identity document or a valid residence permit to confirm the booking.</li>
            <li>Valid for new bookings only and until 31 July 2022 | Excluding: 15- 18 April 2022.</li>
            <li>A minimum two-night stay is required, and bookings are for sole use/family groups only -6 adults sharing.</li>
            <li>Children between 6 and 11 will be charged at a supplementary rate and children 0 to 5 years old stay free.</li>
            <li>Must be requested at the time of booking and cannot be applied retrospectively.</li>
            <li>Subject to availability and Jock Safari Lodge reserves the right to limit the number of rooms available and to discontinue the promotion at any time.</li>
            <li>Cannot be used in conjunction with any other promotions or discounts.</li>
            <li>Only bookable through the Jock Reservations office</li>
          </ul>
        </div>
      </div>
      </Layout>
      
    </div>
  )
}

export default OfferSingle