import React from "react";
import './Aboutus.css';

const Aboutus = () => {
    return (
        <div className="Aboutus" id="Aboutus">
            <span className="About">About Us</span>
            <div className="developers">
                <div className="person1">
                    <h2>Okeke David</h2>
                    <span>David, Age 20. When not programing, you'll probably find me playing musical instruments or watching movies</span>
                </div>

                <div className="person2">
                    <h2>Robel Yonas</h2>
                    <span>Robel, Age 21. My hobbies include programming, gaming and spending time with friends.</span>
                </div>

                <div className="person3">
                    <h2>Robert Nuhu</h2>
                    <span>Robert, Age 25, Other than programing, I have a passion for music, gym and food.</span>
                </div>

                <div className="person4">
                    <h2>Brian Oba</h2>
                    <span>Brian, Age 19, Gaming and streaming are a real passion of mine as well socializing and travelling.</span>
                </div>

                <div className="person5">
                    <h2>Dumkele Fred</h2>
                    <span>Fred, Age 22, Huge fan of football and have quite a passion for cooking and good food</span>
                </div>
                

            </div>
        </div>
    )
}

export default Aboutus