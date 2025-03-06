import '../Styles/AboutUs.css';
import face from '../Assets/placeholder.jpeg';
// import '../Syles/global.css';

function AboutUs() {
    return (
        <div className="container mt-10 flex flex-col justify-center">
            <div className="hero flex flex-col items-center justify-center">
                <h1 className="mb-4 text-4xl font-extrabold">ABOUT US</h1>
                <p className="text-s"><b>WHO WE ARE & WHAT WE DO</b></p>
            </div>

            <span className="line mt-4 mb-4"></span>
            <p id="blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div className="mission-vision">
                <h3>COMAPNY MISSION & VISION</h3>
                <div className="mission-vision grid grid-cols-2 gap-4">
                    <div className="mission">
                        <h5>OUR MISSION</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    </div>
                    <div className="vision">
                        <h5>OUR VISION</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    </div>
                </div>
            </div>

            <div className="meet-our-experts flex flex-col items-center justify-center place-content-center mb-20">
                <h3>MEET OUR EXPERTS</h3>
                <span className="line mt-4 mb-4"></span>
                <div className="experts">
                    <div className="expert flex flex-col items-center" id="expert1">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div className="expert flex flex-col items-center" id="expert2">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div className="expert flex flex-col items-center" id="expert3">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div className="expert flex flex-col items-center" id="expert4">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div className="expert flex flex-col items-center" id="expert5">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                </div>
            </div>

            <div className="why-us space-y-4 flex flex-col">
                <h2>WHY CHOOSE US</h2>
                <span className="line mt-4 mb-4"></span>
                <p>✅ <b>Licensed & Certified Experts – Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
                <p>🌍 <b>Global Reach – Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
                <p>📞 <b>24/7 Support – Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
                <p>⚡ <b>Fast & Reliable Service – Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
            </div>

            <div className="connect mb-20">
                <h2 className="ready mt-20 mb-10 text-3xl">Ready to start your journey? Let's make it happen!</h2>
                <button type="button" id="get-in-touch">GET IN TOUCH</button>
            </div>
        </div>
    );
}

export default AboutUs;