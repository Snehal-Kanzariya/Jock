import React from 'react'
import '../../App.css';
import './Information.css';

const Information = ({description, isBacgroundColor}) => {
    return (
        <div className={`container-fluid pb-5 pt-125 justify-content-center d-flex ${isBacgroundColor && "gray"}`}>
            <p className="title fscolor text-center info">
                {description}
            </p>
        </div>
    )
}

export default Information