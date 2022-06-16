import React from 'react';
import '../../App.css';
import './ImgGrid.css';

const ImgGrid = ({ img, title, desc }) => {
    return (
        <div className="col-md-6 col-12">
            <img src={img} alt="" height={418} className="w-100 mb-4" />
            <div className="mt-3">
                <h3 className="title tcolor tfs">{title}</h3>
                <p className="mw-484 ffG">{desc}</p>
                <div className="btn ffG fscolor content-btn pb-3 cool-link mb-97">
                    Explore
                </div>
            </div>
        </div>
    )
}

export default ImgGrid