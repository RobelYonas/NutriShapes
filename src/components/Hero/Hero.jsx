import React from "react";
import './Hero.css'
import { Header } from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import rice from "../../assets/rice.png";
import shrimp from "../../assets/shrimp.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'

const Hero = () => {

    const transition = {type: 'spring', duration: 3}
    return(
        <div className="hero" id='home'>
            <div className="left-h">
                <Header />

                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{left: '238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>The best Nuttition website available</span>
                </div>

                {/* Hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Achieve </span>
                        <span>Your </span>
                    </div>
                    <div>
                        <span>Dream Physique</span>
                    </div>
                    <div>
                        <span>
                            Achieve your dream physique with NutriShape
                        </span>
                    </div>
                </div>

                {/* Figures */}

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Meal Plans</span>
                    </div>
                    <div>
                        <span>+10</span>
                        <span>recommendations</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Fitness program</span>
                    </div>
                </div>


            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={rice} alt="" />
                    <img src={shrimp} alt="" />
                </div>

                {/* Hero images */}
                <img src={hero_image} alt="" className="hero-image"/>
            

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