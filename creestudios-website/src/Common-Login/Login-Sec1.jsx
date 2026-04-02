import React, { useState } from 'react';
import '../Common-Login/Login-Sec1.css';
import Logincounter from './Logincounter';
import LoginLogo from "../Assets/Login Logo.png";
import appleLogo from "../Assets/App Store Login Icon.png";
import googleLogo from "../Assets/PlayStore Login Icon.png";
import LineWaves from '../Common-Login/LineWaves .jsx';
import Video from '../Assets/Background Video.mp4';
import showIcon from "../Assets/Shown Icon.png";   // eye open
import hideIcon from "../Assets/Hidden Icon.png";   // eye closed

const LoginSec1 = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className='body'>

            <LineWaves
                className="lineWavesBg"
                speed={0.1}
                innerLineCount={32}
                outerLineCount={36}
                warpIntensity={1}
                rotation={-45}
                edgeFadeWidth={0}
                colorCycleSpeed={1}
                brightness={0.2}
                color1="#0f571e"
                color2="#3d644c"
                color3="#191919"
                enableMouseInteraction
                mouseInfluence={3}
            />


            <section className='sec1left'>

                <section className='sec1left1top'>
                    <video
                        className='BackgroundVideo'
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={Video}
                    />
                    <img src={LoginLogo} alt="Logo" className='loginlogo' />
                </section>


                <section className='sec1left1bottom'>
                    <section className='sec1leftbottomtop'>
                        <h1 className='LoginLeftTitle'>
                            Join The<br />
                            <span className="LoginleftTitleSpan">
                                Digital Revolution
                            </span>
                        </h1>

                        <button className='LoginLeftButton'>Get The App</button>

                        <section className='LoginLeftBottomText'>
                            <h1 className='LoginLeftTextFont'>Available On:</h1>

                            <section className='LoginLeftBottomTextLogos'>
                                <img className="LoginIcons" src={appleLogo} alt="Apple" />
                                <img className="LoginIcons" src={googleLogo} alt="Google" />
                            </section>
                        </section>
                    </section>

                    <section className='sec1leftbottombottom'>
                        <Logincounter heading="Active Users" subtitle="21,997" />
                        <Logincounter heading="Linked Friends" subtitle="16,486" />
                        <Logincounter heading="Total Users" subtitle="77,664" />
                    </section>

                </section>

            </section>




<section className='sec1right'>

<section className='sec1righttop'>
    <h1 className='sec1righttitle'>WELCOME  <span className="LoginRightTitleSpan"> BACK! </span></h1>
    <p className='sec1rightsubtitle'>Enter your e-mail and password to<br/>access your account</p>
    </section>

<section className='sec1rightform'>
    <label className='formField'>
        <span className='formLabel'>Email</span>
        <input
            type='email'
            className='formInput'
            placeholder='Enter your email'
            autoComplete='email'
        />
    </label>

    <label className='formField'>
        <span className='formLabel'>Password</span>
        <div className='passwordWrapper'>
            <input
                type={showPassword ? 'text' : 'password'}
                className='formInput'
                placeholder='Enter your password'
                autoComplete='current-password'
            />
<button
    type='button'
    className='passwordToggle'
    onClick={() => setShowPassword(prev => !prev)}
    aria-label={showPassword ? 'Hide password' : 'Show password'}
>
    <img
        src={showPassword ? showIcon : hideIcon}
        alt="toggle password visibility"
        className="passwordIcon"
    />
</button>
        </div>
    </label>

    <button type='button' className='LoginRightSubmit'>Sign In</button>
</section>








</section>



        </main>
    );
};

export default LoginSec1;