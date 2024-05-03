import React from "react";
import './Hero.css'
import { Header } from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
    return(
        <div className="hero">
            <div className="left-h">
                <Header />

                {/* the best ad */}
                <div className="the-best-ad">
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>

                {/* Hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your </span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            I am here to shape and build your ideal physic and live up your life to the fullest
                        </span>
                    </div>
                </div>

                {/* Figures */}

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Memeber joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Fitness program</span>
                    </div>
                </div>

                {/* Hero button*/}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn more</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                {/* Hero images */}
                <img src={hero_image} alt="" className="hero-image"/>
                <img src={hero_image_back} alt="" className="hero-image-back"/>

                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>  
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero