import React from 'react'
import './Register.css'
import '../../App.scss'
import { Link } from 'react-router-dom'

import video from '../../LoginAssets/video.mp4'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'
import { FaWeightScale } from "react-icons/fa6"

const Register = () => {
    return (
        <div className='registerPage flex'>
        <div className="container flex">

                <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>   
           

                <div className="textDiv">
                    <h2 className="title">Meal Prep Properly</h2>
                    <p>Healty You is the Best You</p>
                </div>
                <div className="footerDiv flex">
                    <span className="text">Have an account?</span>
                    <Link to={'/'}>
                    <button className="btn">Login</button>
                    </Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <h3>Let Us Know You!</h3>
                </div>

                <form action='' className='form grid'>

                <div className="inputDiv">
                    <label htmlFor='username'>Username</label>
                    <div className="input flex">
                        <FaUserShield className='icon'/>
                        <input type='text' id='username' placeholder='Username'/>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor='weight'>Current Weight</label>
                    <div className="input flex">
                        <FaWeightScale className='icon'/>
                        <input type='text' id='weight' placeholder='Current Weight (kg)'/>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor='dietGoal'>Dietry Goal</label>
                    <div className="input flex">
                        <FaWeightScale className='icon'/>
                        <input type='text' id='dietGoal' placeholder='Dietry Goal (bulk, cut, maintain)'/>
                    </div>
                </div>

                

                <div className="inputDiv">
                        <label htmlFor='email'>Email</label>
                        <div className="input flex">
                            <MdMarkEmailRead className='icon'/>
                            <input type='email' id='email' placeholder='Email'/>
                        </div>
                    </div>



                    <div className="inputDiv">
                        <label htmlFor='password'>Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type='password' id='password' placeholder='Password'/>
                        </div>
                    </div>

                     <button type='submit' className='btn flex'>
                        <span>Register</span>
                        <AiOutlineSwapRight className='icon'/>
                     </button>


                </form>
            </div>

        </div>
        </div>
    )
}

export default Register