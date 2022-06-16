import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import PaginationSlider from './components/paginationslider/PaginationSlider';
import StayAtJock from './pages/stayatjock/StayAtJock';
import Experiences from './pages/experiences/Experiences';
import Offers from './pages/offers/Offers';
import Destination from './pages/destination/Destination';
import OurStory from './pages/ourstory/OurStory';
import FAQ from './pages/FAQ/FAQ';
import StaySingle from './pages/staysingle/StaySingle';
import OfferSingle from './pages/offersingle/OfferSingle';
import ImgGrid from './components/imggrid/ImgGrid';
import SwiperSlider from './components/swiperslider/SwiperSlider';
import Menu from './components/menu/Menu';


function Routing() {    
    return ( 
        <>              
           <Router>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stay" element={<StayAtJock />} />      
                    <Route path="/experiences" element={<Experiences />} /> 
                    <Route path="/offers" element={<Offers />   } />  
                    <Route path="/destination" element={<Destination />  } />  
                    <Route path="ourstory" element={<OurStory /> } />
                    <Route path="faq" element={<FAQ /> } />
                    <Route path="staysingle" element={<StaySingle /> } />
                    <Route path="offersingle" element={<OfferSingle /> } />
                    <Route path="/header" element={<Header />} /> 
                    <Route path="/footer" element={<Footer />} />  
                    <Route path="imggrid" element={<ImgGrid />} />  
                    <Route path="/paginationslider" element={<PaginationSlider />} />   
                    <Route path="/slider" element={<SwiperSlider />} /> 
                    <Route path="/menu" element={<Menu />} />   
                         
               </Routes>
           </Router>
        </>
    );
}

export default Routing;