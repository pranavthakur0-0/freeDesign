
import './Home.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Marquee from "react-fast-marquee";
import blurcircle from "../img/blackblur.svg"
import target from "../img/target.svg"
import pinkblur from "../img/pinkblur.svg"
import blueblur from "../img/blueblur.svg"
import { IoLockClosed } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import Carousel from './Reactcoursel';
import Video from './Video.jsx'

function Home() {
  return (
    <>
            <Navbar></Navbar>
            <div className="main-landing">
                <div className="main-home">
                    <img className='pink-blur' src={pinkblur} alt="pink-blur"></img>
                    <img className='blue-blur' src={blueblur} alt="blue-blur"></img>
                    <Video className="video-class"></Video>
                    <div className="landing">
                            <h1>Simple And Effective</h1>
                            <div className="glass-wrapper">
                                    <div className="text">Security</div>
                             </div>
                             <div className="glass-wrapper1">
                                    <div className="text1">Protection</div>
                             </div>
                            <h1>Data Security and Protection</h1>
                            <div className="circlelock">
                            <div className="lock-out">
                                    <div className="lock-wrap">
                                        <div className="img">
                                        </div>
                                    </div>
                                    </div>
                                <div className="inner-">
                                        <Marquee className="circular-marquee" speed={30}  gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={40} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={30} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={30} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={10} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={15} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={23} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={27} gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={16} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={30} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={20} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={18} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={30} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={12} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={16} gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={25} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={21} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={13} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={23} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={28} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={18} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>                                    
                                    <Marquee className="circular-marquee" speed={20} gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={25} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={31} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={21} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={26} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={14} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={13} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={24} gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={19} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>      
                                </div>
                            </div>
                    </div>
                </div>
                <div className="main-about">
                <h3>About Us</h3>
                    <h1>Delivering world-class design, build and run services.</h1>
          
                    <div className="wrapper">
                        <div className='img'></div>
                        <div className="text-wrapper">
                       <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus deleniti necessitatibus optio molestias ipsum.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos omnis esse minima corporis commodi adipisci, iusto possimus, odio eveniet iste amet explicabo quidem id molestias fuga, tempore numquam perferendis enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque deserunt dolore non vel perspiciatis quia ipsa optio accusamus est saepe officiis, accusantium ipsum nulla aut harum ducimus atque consequuntur.</p>
                        <button className='about-button'>Read More</button>
                        </div>

                    </div>
                </div>
                    
                    </div>
            <div className="main-home-container">
                <div className="main-home-line">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>



                    <div className="home-how-it-works">
                            <div className="heading">
                                <h2>HOW IT WORKS</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque nemo enim animi quasi dolor temporibus sint porro,  inventore ad.</p>
                            </div>
                            <div className="wrapper">
                                    <div className='how-it-works-one'>
                                        <div className="number">
                                        <ul>
                                            <li>01</li>
                                            <li>02</li>
                                            <li>03</li>
                                        </ul>
                                    </div>
                                    <div className="line"></div>
                                    <div className="shape-wrapper">
                                    <img className="main-spotter-one" src={target} alt="target" />
                                    <img className="main-spotter-two" src={target} alt="target" />
                                    <div className="shape-searching-for-keys">
                                        Searching For Keys
                                    </div>
                                    <div className="shape-searching-vulnerability">
                                        Testing for vulnerability
                                    </div>
                                    <div className="shape">
                                    <div className="shape-container">
                               
                                    <Marquee className="circular-marquee" speed={30}  gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={40} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={30} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={30} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={10} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={15} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={23} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={27} gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={16} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={30} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={20} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={18} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={30} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={12} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={16} gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={25} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={21} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={13} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={23} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={28} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={18} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>                                    
                                    <Marquee className="circular-marquee" speed={20} gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={25} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={31} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={21} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={26} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={14} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={13} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={24} gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={19} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={29} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={17} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={10} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={15} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={13} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={20} gradient={false} direction="left" >
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={30} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={23} gradient={false}  direction="right">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={14} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>
                                    <Marquee className="circular-marquee" speed={30} gradient={false}  direction="left">
                                    01000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 0110010101000101 01111000 01100001 01101101 01110000 01101100 01100101
                                    </Marquee>   </div>
                                    
                                    </div>
                                    </div>
                                     </div>
                                    <div className='how-it-works-sperator'></div>
                                    <div className='how-it-works-two'>
                                        <div className="cards">
                                            <div className="card-heading">
                                                <h2>01</h2>
                                                <h3>Discover</h3>
                                            </div>
                                            <div className="card-text">Build detection rules across your apps and clouds.</div>
                                        </div>
                                        <div className="cards">
                                            <div className="card-heading">
                                                <h2>02</h2>
                                                <h3>Classify</h3>
                                            </div>
                                            <div className="card-text">High accuracy machine learning classification for any sensitive data, including PIl, credentials, keys, secrets, and more</div>
                                        </div>
                                        <div className="cards">
                                            <div className="card-heading">
                                                <h2>03</h2>
                                                <h3>Protect</h3>
                                            </div>
                                            <div className="card-text">Real-time alerts and remediation with Skulight's central console.</div>
                                        </div>
                                    </div>
                            </div>
                    <img className='blackblur' src={blurcircle} alt="blur" />
                    </div>

                    <div className="home-built-for-section">
                        <div className="heading">
                        Built for Privacy Compliance <br /> and Security
                        </div>
                        <div className="built-wrapper">
                            <div className="content-wrapper">
                        <div className="content">
                        <div className="layer">
                                <div className="icon"></div>
                                <div className="textual-content">
                                    <h3>Pre-heading</h3>
                                    <h1>Heading</h1>
                                </div>
                            </div>
                        </div>
                       
                       <div className="content">
                        <div className="layer">
                                <div className="icon"></div>
                                <div className="textual-content">
                                    <h3>Code-Repositories</h3>
                                    <h1>Protect Credentials And Secret</h1>
                                </div>
                            </div>
                        </div>
                       
                       <div className="content">
                        <div className="layer">
                                <div className="icon"></div>
                                <div className="textual-content">
                                    <h3>Pre-heading</h3>
                                    <h1>Heading</h1>
                                </div>
                            </div>
                        </div>
                       
                       <div className="content">
                        <div className="layer">
                                <div className="icon"></div>
                                <div className="textual-content">
                                    <h3>Pre-heading</h3>
                                    <h1>Heading</h1>
                                </div>
                            </div>
                        </div>
                       
                       <div className="content">
                        <div className="layer">
                                <div className="icon"></div>
                                <div className="textual-content">
                                    <h3>Pre-heading</h3>
                                    <h1>Heading</h1>
                                </div>
                            </div>
                        </div>
                       
                       </div>
                    <div className="built-display">
                        <div className="built-display-inner">

                        <div className="header">
                            <div className="close">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="url">
                          <IoLockClosed></IoLockClosed>  CYBRIDGE.com
                            </div>
                            <div className="add">
                                <AiOutlinePlus></AiOutlinePlus>
                            </div>
                        </div>
                        <div className='display-sperator' ></div>
                        <ol className='list' type='number'><li>if not-Params. STD then</li>
                        <li>assert(loadstring(config.get("LUA.LIBS.STD*))) ()</li>
                        <li>if not _params. table_ext then</li>
                        <li>assert(loadstring(config.get("LUA.LIBS.table_ext*)))()</li>
                        <li>if not_LIB_FLAME_PROPS_LOADED_ then</li>
                        <li>LIB FLAME PROPS_LOADED_ == true</li>
                        <li>flane_props = ()</li>
                        <li>if not-Params. STD then</li>
                        <li>assert(loadstring(config.get("LUA.LIBS.STD*))) ()</li>
                        <li>if not _params. table_ext then</li>
                        <li>assert(loadstring(config.get("LUA.LIBS.table_ext*)))()</li>
                        <li>if not_LIB_FLAME_PROPS_LOADED_ then</li>
                        <li>LIB FLAME PROPS_LOADED_ == true</li>
                        <li>flane_props = ()</li>
                        <li>if not-Params. STD then</li>
                        <li>assert(loadstring(config.get("LUA.LIBS.STD*))) ()</li>
                        <li>if not _params. table_ext then</li>
                        <li>assert(loadstring(config.get("LUA.LIBS.table_ext*)))()</li>
                        <li>if not_LIB_FLAME_PROPS_LOADED_ then</li>
                        <li>LIB FLAME PROPS_LOADED_ == true</li>
                        <li>flane_props = ()</li>
                        <li>if not-Params. STD then</li>
                        <li>assert(loadstring(config.get("LUA.LIBS.STD*))) ()</li>
                        <li>if not _params. table_ext then</li>
                        <li>assert(loadstring(config.get("LUA.LIBS.table_ext*)))()</li>
                        <li>if not_LIB_FLAME_PROPS_LOADED_ then</li>
                        <li>LIB FLAME PROPS_LOADED_ == true</li>
                        <li>flane_props = ()</li></ol>
                    </div>
                       </div>
                    </div>
                    </div>
                    
                    <Carousel/>

                    <div className="main-home-action">
                        <div className="home-action-line-wapper">
                        <div className="action-line-1">
                            <div className='box'></div>
                            <div className='line'></div>
                        </div>
                          <div className="action-line-text">
                                Get Started In Mintues, Not Months
                        </div>

                        <div className="action-line-2">
                        <div className='line'></div>
                        <div className='box'></div>
                        </div>
                        </div>
                        <div className="home-action-text">
                            SEE CYBRIDGE IN <br /> ACTION
                        </div>

                    </div>

            </div>
            <Footer></Footer>
    </>
  );
}

export default Home;
