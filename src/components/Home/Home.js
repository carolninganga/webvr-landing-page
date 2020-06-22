import React from 'react';
import './style.css';

function Home() {
    return (
        <div className="container">
            <div id="HeroWrapper">
            <div id="heroImg" className="row" style={{background: 'url(https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fvr-headset-removebg.png?v=1592856275884) center / cover'}}></div>
            </div>
            <h4 className="center" id="heading">
                Katabi
            </h4>
            <div className="row">
                <div className="input-field col s12">
                <input type="text" className="eventInfo" />
                <label id="inputLabel" for="text">Enter event code</label>
            </div>
            </div>
        </div>
    )
}
export default Home;