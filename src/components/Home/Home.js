import React from 'react';
import './style.css'

function Home() {
    return (
        <div className="container">
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