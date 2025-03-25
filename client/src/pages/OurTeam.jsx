import '../Styles/global.css'
import '../Styles/OurTeam.css';
import consultant from '../Assets/consultant.png';
import { Link } from 'react-router-dom';
 import '../styles/global.css';

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function AboutUs() {
    return (
        <div className="w-screen container flex flex-col justify-center">
            <div className="hero flex flex-col items-center justify-center">
                <div className="gradient"></div>
                <h1 className="banner-title">ABOUT US</h1>
                <h3 className="text-s"><b className="text-(--yellow) text-lg">Dedicated to making your immigration journey smooth and successful</b></h3>
            </div>

            {/* <span className="line mt-4 mb-4"></span> */}
            {/* <p id="blurb" className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
            
            <div className="company mt-7">
                {/* <h3 className="pr-2 pl-2 mb-3">COMPANY MISSION & VISION</h3> */}
                {/* <span className="mobile-line"></span> */}
                <div className="mission-vision grid gap-20 mr-4 ml-4">
                    <div className="mission w-100 mt-3">
                        <h5>OUR MISSION</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    </div>
                    <div className="vision w-100 mt-3">
                        <h5>OUR VISION</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    </div>
                </div>
            </div>

            <div className="meet-our-experts flex flex-col items-center mb-15">
                <h3 className="mt-10"><b className="text-stone-950">MEET OUR EXPERT</b></h3>
                <p>Our certified immigration specialist brings years of experiene and dedication to your immigration journey</p>
                {/* <span className="line mt-4 mb-1"></span> */}
                <div className="experts">
                    <div className="expert flex flex-col w-100" id="expert1">
                        <img src={consultant} alt="Yooyyaa's experct consultant"/>
                        {/* <p><b>Jane Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p> */}
                    </div>
                    <div className="mt-15 text-left">
                        <p><b>Jane Doe, RCIC #123456</b><br /><br />                       
                            Senior Immigration Consultant. <br /><br />
                            Jane specializes in family immigration and student and work visas. She has been working for ____ years and has an incredible record. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque eius, consectetur minus sapiente porro sit voluptatibus eos sunt quisquam sed deserunt sequi odio nisi deleniti quia, animi accusamus quo? <br /> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione sunt tenetur doloribus atque ducimus enim voluptas! Adipisci voluptate qui reprehenderit voluptas facilis, dolorum dicta, recusandae ipsam modi minima architecto!
                        </p>
                    </div>
                </div>
            </div>

            <div className="why-us space-y-4 flex flex-col">
                <h4 className="mb-10"><b className="text-stone-950 text-xl">WHY CHOOSE US</b></h4>
                {/* <span className="line mb-4"></span> */}
                {/* <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis suscipit veritatis voluptatem, quaerat repellendus nemo. Ipsam, neque deserunt necessitatibus veniam commodi est nam? Minus porro eos voluptatum necessitatibus natus.</b></p> */}
                <div className="grid grid-cols-4">
                    <div>
                        <FontAwesomeIcon className="icon" icon={faAward} />
                        <p><b>Licensed and Certified</b></p>
                        <p>Our team consists of licensed immigration professionals</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="icon" icon={faGlobe} />
                        <p><b>Global Reach</b></p>
                        <p>Our team consists of licensed immigration professionals</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="icon" icon={faClock} />
                        <p><b>24/7 Support</b></p>
                        <p>Our team consists of licensed immigration professionals</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                        <p><b>24/7 Support</b></p>
                        <p>Our team consists of licensed immigration professionals</p>
                    </div>
                </div>
            </div>

            <div className="connect mb-10">
                <h2 className="ready mt-15 mb-10 text-3xl">Ready to start your journey? Let's make it happen!</h2>
                <Link to="/contact"><button type="button" id="get-in-touch" className="transition delay-50 duration-300 ease-in-out hover:scale-110">GET IN TOUCH</button></Link>
            </div>
        </div>
    );
}

export default AboutUs;