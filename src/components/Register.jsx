import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../style/Register.module.scss';
import video from '../assets/video.mp4';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';
import { FaWeightScale } from 'react-icons/fa6';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        weight: '',
        dietaryGoal: ''
    });
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, formData);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setMessage('Registration successful');
            navigate('/home');
        } catch (error) {
            console.error('Error registering user:', error.response?.data || error.message);
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className={styles.registerPage + ' ' + styles.flex}>
            <div className={styles.container + ' ' + styles.flex}>
                <div className={styles.videoDiv}>
                    <video src={video} autoPlay muted loop></video>
                    <div className={styles.textDiv}>
                        <h2 className={styles.title}>Meal Prep Properly</h2>
                        <p>Healthy You is the Best You</p>
                    </div>
                    <div className={styles.footerDiv + ' ' + styles.flex}>
                        <span className={styles.text}>Have an account?</span>
                        <Link to={'/login'}>
                            <button className={styles.btn}>Login</button>
                        </Link>
                    </div>
                </div>
                <div className={styles.formDiv + ' ' + styles.flex}>
                    <div className={styles.headerDiv}>
                        <h3>Let Us Know You!</h3>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form + ' ' + styles.grid}>
                        {error && <p className={styles.showMessage}>{error}</p>}
                        {message && <p className={styles.showMessage}>{message}</p>}
                        <div className={styles.inputDiv}>
                            <label htmlFor='username'>Username</label>
                            <div className={styles.input + ' ' + styles.flex}>
                                <FaUserShield className={styles.icon} />
                                <input type='text' id='username' name='username' placeholder='Username' value={formData.username} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor='weight'>Current Weight</label>
                            <div className={styles.input + ' ' + styles.flex}>
                                <FaWeightScale className={styles.icon} />
                                <input type='text' id='weight' name='weight' placeholder='Current Weight (kg)' value={formData.weight} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor='dietaryGoal'>Dietary Goal</label>
                            <div className={styles.input + ' ' + styles.flex}>
                                <FaWeightScale className={styles.icon} />
                                <input type='text' id='dietaryGoal' name='dietaryGoal' placeholder='Dietary Goal (bulk, cut, maintain)' value={formData.dietaryGoal} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor='email'>Email</label>
                            <div className={styles.input + ' ' + styles.flex}>
                                <MdMarkEmailRead className={styles.icon} />
                                <input type='email' id='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor='password'>Password</label>
                            <div className={styles.input + ' ' + styles.flex}>
                                <BsFillShieldLockFill className={styles.icon} />
                                <input type='password' id='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
                            </div>
                        </div>
                        <button type='submit' className={styles.btn + ' ' + styles.flex}>
                            <span>Register</span>
                            <AiOutlineSwapRight className={styles.icon} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
