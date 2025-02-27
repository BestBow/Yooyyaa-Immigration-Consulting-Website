import '../Styles/AboutUs.css';
import face from '../Assets/placeholder.jpeg'

function AboutUs() {
    return (
        <div className="container">
            
            <div className="hero">
                <h1>ABOUT US</h1>
                <h2>WHO WE ARE & WHAT WE DO</h2>
            </div>

            <span className="line"></span>
            <p id="blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div className="mission-vision">
                <h2>COMAPNY MISSION & VISION</h2>
                <div className="mission">
                    <h3>OUR MISSION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                </div>
                <div className="vision">
                    <h3>OUR VISION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                </div>
            </div>

            <div className="meet-our-experts">
                <h2>MEET OUR EXPERTS</h2>
                <span className="line"></span>
                <div className="experts">
                    <div className="expert">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div className="expert">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div className="expert">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div className="expert">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div className="expert">
                        <img src={face} alt="one of our consultants"/>
                        <p><b>John Doe, RCIC #123456<br />
                        Senior Immigration Consultant</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                </div>
            </div>

            <div className="why-us">
                <h2>WHY CHOOSE US</h2>
                <span className="line"></span>
                <p>✅ <b>Licensed & Certified Experts – Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
                <p>🌍 <b>Global Reach – Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
                <p>📞 <b>24/7 Support – Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
                <p>⚡ <b>Fast & Reliable Service – Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></p>
            </div>

            <h2>Ready to start your journey? Let's make it happen!</h2>
            <button>GET IN TOUCH</button>
        </div>
    );
}

export default AboutUs;