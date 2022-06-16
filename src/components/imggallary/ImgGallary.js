import React from 'react';
import './ImgGallary.css';
import '../../App.css';

const ImgGallary = ({title, subTitle, button, image1, image1Title, image1Description, image2, image2Title, image2Description, image3, image3Title, image3Description,}) => {
    return (
        <div className="container-fluid mt-321 mb-245">
            <h1 className="title fscolor titlefs text-center">{title}</h1>
            <div className="justify-content-center d-flex">
                <p className="text-center tcolor ffG mw-658">{subTitle}</p>
            </div>
            <div className="btn ffG fscolor text-center content-btn pb-3 ps-43 cool-link">
                <span>{button}</span>
            </div>
            <div className="row mx-3 justify-content-center">
                <div className="col-md-4 col-12">
                    <img src={image1} alt="img" className="w-100" />
                    <h2 className="title tcolor mt-44">{image1Title}</h2>
                    <p className="ffG">{image1Description}</p>
                    <div className="btn ffG fscolor content-btn pb-3 cool-link">Explore</div>
                </div>
                <div className="col-md-4 col-12">
                    <img src={image2} alt="img" className="w-100" />
                    <h2 className="title tcolor mt-44">{image2Title}</h2>
                    <p className="ffG">{image2Description}</p>
                    <div className="btn ffG fscolor content-btn pb-3 cool-link">Explore</div>
                </div>
                <div className="col-md-4 col-12">
                    <img src={image3} alt="img" className="w-100" />
                    <h2 className="title tcolor mt-44">{image3Title}</h2>
                    <p className="ffG">{image3Description}</p>
                    <div className="btn ffG fscolor content-btn pb-3 cool-link">Explore</div>
                </div>
            </div>
        </div>
    )
}

export default ImgGallary
