import '../Styles/global.css'
import '../Styles/OurTeam.css';
import face from '../Assets/placeholder.jpeg';
import { Link } from 'react-router-dom';
 import '../styles/global.css';

function AboutUs() {
    return (
        <div className="w-screen container flex flex-col justify-center">
            <div className="hero flex flex-col items-center justify-center">
                <div className="gradient"></div>
                <h1 className="banner-title">OUR TEAM</h1>
                <h3 className="text-s"><b className="text-(--yellow)">WHO WE ARE & WHAT WE DO</b></h3>
            </div>

            <span className="line mt-4 mb-4"></span>
            <p id="blurb" className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div className="company">
                <h3 className="pr-2 pl-2 mb-3">COMAPNY MISSION & VISION</h3>
                <span className="mobile-line"></span>
                <div className="mission-vision grid gap-20 mr-4 ml-4">
                    <div className="mission w-100">
                        <h5>OUR MISSION</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    </div>
                    <div className="vision w-100">
                        <h5>OUR VISION</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    </div>
                </div>
            </div>

            <div className="meet-our-experts flex flex-col items-center mb-10">
                <h3 className="mt-10">MEET OUR EXPERT</h3>
                <span className="line mt-4 mb-4"></span>
                <div className="experts items-center">
                    <div className="expert flex flex-col items-center w-100" id="expert1">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                </div>
            </div>

            <div className="why-us space-y-4 flex flex-col">
                <h3>WHY CHOOSE US</h3>
                <span className="line mt-4 mb-4"></span>
                <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis suscipit veritatis voluptatem, quaerat repellendus nemo. Ipsam, neque deserunt necessitatibus veniam commodi est nam? Minus porro eos voluptatum necessitatibus natus.</b></p>
            </div>

            <div className="connect mb-20">
                <h2 className="ready mt-20 mb-10 text-3xl">Ready to start your journey? Let's make it happen!</h2>
                <Link to="/contact"><button type="button" id="get-in-touch" className="transition delay-50 duration-300 ease-in-out hover:scale-110">GET IN TOUCH</button></Link>
            </div>
        </div>
    );
}

export default AboutUs;