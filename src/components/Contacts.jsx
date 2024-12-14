import React from "react";

export default function Contacts(info) {
    console.log(info)
    return (
        <article>
            <img className="profile-pic" src={info.img} alt="profile-pic" />
            <div className="window">
                <h2>{info.name}</h2>
                <div className="number">
                    <img src="public/img/phone.png" alt="phone"></img>
                    <p>{info.number}</p>
                </div>
                <div className="contact-info">
                    <div className="location">
                        <img className="marker" src="/img/marker.png" alt="marker" />
                        <span>{info.location}</span>
                    </div>
                </div> 
            </div>
        </article>
    );
}