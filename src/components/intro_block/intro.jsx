import React from 'react';
import github from '../assests/svg/github.svg';
import mail from '../assests/svg/gmail.svg';
import linkedin from '../assests/svg/linkedin.svg';
import code1 from '../assests/images/code-quote 2.png';
import facebook from '../assests/svg/facebook.svg';
import './intro.css';



class Intro extends React.Component{

    render() {
        return(
            <>
                <div className='main-block'>
                    <div className="sub-block">
                        <p>
                            <div>
                                <h2 style={{display : "inline-block"}}>Hi, I am Shibashis Das.</h2>
                                <div className="icons-block">
                                    <img src={facebook}/>
                                    <img src={github}/>
                                    <img src={mail}/>
                                    <img src={linkedin}/>
                                </div>
                            </div>
                            I am a tech enthusiast. I like to build and explore new things.<br/>
                            I love programming, swimming, badminton and travelling and reading books.<br/>
                            I am currently a undergraduate student at IIT Kharagpur doing my <br/>
                            B.Tech in Engineering and a minor in Mathematics and Computing.<br/>
                            I have experience in Frontend and Backend Development and writing web apps.<br/>
                        </p>
                    </div>
                    <div className="image-block">
                        <img className="image-quote" src={code1} alt="There was an image here"/>
                    </div>
                </div>
            </>
        )
    }
}

export default Intro;