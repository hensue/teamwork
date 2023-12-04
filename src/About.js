import React, { useState, useEffect } from "react"
import { Row, Col, Button, Input, Select } from "antd"
import Header from "./component/Header"
import Footer from "./component/Footer"
import ReadyToWork from "./component/ReadyToWork"
import PopupHeader from "./component/PopupHeader"
import Member from "./Member"
import "./Header.css"
import "./About.css"


function About({selectedMenu}) {

    const [scrollEnd, setScrollEnd] = useState(false);
    const [popup, setPopup] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);

        // Prevent scrolling during page loading
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling after a short delay
        setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 100);

        const handleScroll = () => {
            const scrollTrigger = document.getElementById("about_header");
            const triggerPosition = scrollTrigger.getBoundingClientRect().bottom;
            console.log(triggerPosition);
            if(triggerPosition < 50){
                setPopup(true);

            }
                
            else setPopup(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    console.log(selectedMenu === 1)
    return (
        <div style={{ padding: "0px 60px"}}>
            <Header showContactUs={showContactUs} setShowContactUs={setShowContactUs} selectedMenu={selectedMenu}/>
            <div id="about_header">
                <div className="about_title">
                    <p>ABOUT AVY</p>
                    <p>®</p>
                </div>
                <Row style={{  borderBottom: "1px solid black", marginTop: 60}} className="title_description">
                    <Col lg={12} sm={24} xs={24} className="title_description--text">
                        <p>
                            ALWAYS AIMING TO PUSH BOUNDARIES AND EXCEED EXPECTATIONS WITH EVERY PROJECT.
                        </p>
                        <p>
                            AVY Pruthi
                            Founder & CEO
                        </p>
                    </Col>
                    <Col lg={12} sm={24} xs={24} className="title_description--image">
                        <img src="/user.png"></img>
                    </Col>
                </Row>
                <Row className="detail_text">
                    <Col lg={12} sm={24} xs={24} style={{ fontSize: 22}}>
                        <p>
                            After a decade managing projects globally for creative agencies across four continents, the pandemic led me to a transformative decision. I bid farewell to my corporate role to wholeheartedly pursue my true passion: sparking inspiration for clients.
                        </p>
                        <p>
                            I excel in revealing a brand's unique appeal and turning concepts into reality. Building lasting connections is my philosophy.
                        </p>
                        <p>
                            My work spans various sectors, from manufacturing to fintech and luxury to transportation, and I've earned recognition with seven prestigious awards along the way.
                        </p>
                    </Col>
                    <Col lg={12} sm={24} xs={24} className="detail_contact">
                        <p>
                            Avy partners with select strategists, storytellers, designers and content creators on complex projects on a per-need basis
                        </p>
                        <button>WORK WITH US</button>
                    </Col>
                </Row>
            </div>
            {
                popup && (<PopupHeader setSmallMenu = {setSmallMenu}/>)
            }
            <Row className="philosophy_container">
                <Col span={24} className="philosophy_container--header">
                    <Row>
                        <Col lg={12} sm={0} xs={0} />
                        <Col lg={12} sm={24} xs={24}>
                            <h2>PHILOSOPHY</h2>
                        </Col>
                    </Row>
                </Col>
                <Col span={24} className="philosophy_content">
                    <Row className="philosophy_item--list">
                        <Col lg={12} sm={24} xs={24} className="philosophy_item">
                            <img src="/assets/img/Number1.png"></img>
                            <span>PASSONATE</span>
                        </Col>
                        <Col lg={12} sm={24} xs={24}className="philosophy_item--text">
                            <p>
                                We breathe life into brands through creative design, driven by our love for making a difference.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row className="philosophy_item--list">
                        <Col lg={12} sm={24} xs={24} className="philosophy_item">
                            <img src="/assets/img/Number2.png"></img>
                            <span>BE CURIOUS</span>
                        </Col>
                        <Col lg={12} sm={24} xs={24} className="philosophy_item--text">
                            <p>
                            We question, we explore, and we deliver successful outcomes fueled by our curiosity.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row className="philosophy_item--list">
                        <Col lg={12} sm={24} xs={24} className="philosophy_item">
                            <img src="/assets/img/Number3.png"></img>
                            <span>COMMUNICATE</span>
                        </Col>
                        <Col lg={12} sm={24} xs={24} className="philosophy_item--text">
                            <p>
                            We keep it straightforward, no jargon. We're always in touch.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row className="philosophy_item--list">
                        <Col lg={12} sm={24} xs={24} className="philosophy_item">
                            <img src="/assets/img/Number4.png"></img>
                            <span>GRATEFUL</span>
                        </Col>
                        <Col lg={12} sm={24} xs={24} className="philosophy_item--text">
                            <p>
                            Every opportunity to work with new clients is an honour, regardless of size.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row className="philosophy_item--list">
                        <Col lg={12} sm={24} xs={24} className="philosophy_item">
                            <img src="/assets/img/Number5.png"></img>
                            <span>USER IN MIND</span>
                        </Col>
                        <Col lg={12} sm={24} xs={24} className="philosophy_item--text">
                            <p>
                            We keep it straightforward, no jargon. We're always in touch.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row className="philosophy_item--list">
                        <Col lg={12} sm={24} xs={24} className="philosophy_item">
                            <img src="/assets/img/Number6.png"></img>
                            <span>CONSTANT LEARNING</span>
                        </Col>
                        <Col lg={12} sm={24} xs={24} className="philosophy_item--text">
                            <p>
                            We believe in the power of collaboration, shared knowledge & continuous learning.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="sayAbout_container">
                    <Row>
                        <Col lg={12} sm={0} xs={0} />
                        <Col lg={12} sm={24} xs={24}>
                            <h2>WHAT PEOPLE SAY ABOUT US</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
            <Col span={24} className="card_container">
                    <div className="card_panel">
                        <div className="card_item">
                            <div className="dashed-line">
                                <hr/>
                                <span>WEB-DESIGN</span>
                                <hr/>
                            </div>
                            <div className="card_item--text">
                                <p>K FARMAH</p>
                                <span>DENTIST / PRINCIPAL AT HOUSE OF DENTAL</span>
                                <p>
                                Great service from the team at AVY! Needed help with refreshing an old website and creating a new landing page. Nothing was too much of a hassle for them to sort out and were happy to accommodate my demanding needs. Very responsive to communication and well priced. Overall a flawless experience and will be using this agency again. Thank you to the team at AVY!
                                </p>
                            </div>
                        </div>
                        <div className="card_item">
                            <div className="dashed-line">
                                    <hr/>
                                    <span>WEB-DESIGN</span>
                                    <hr/>
                            </div>
                            <div className="card_item--text">
                                <p>K FARMAH</p>
                                <span>DENTIST / PRINCIPAL AT HOUSE OF DENTAL</span>
                                <p>
                                Great service from the team at AVY! Needed help with refreshing an old website and creating a new landing page. Nothing was too much of a hassle for them to sort out and were happy to accommodate my demanding needs. Very responsive to communication and well priced. Overall a flawless experience and will be using this agency again. Thank you to the team at AVY!
                                </p>
                            </div>
                        </div>
                        <div className="card_item">
                            <div className="dashed-line">
                                    <hr/>
                                    <span>WEB-DESIGN</span>
                                    <hr/>
                            </div>
                            <div className="card_item--text">
                                <p>K FARMAH</p>
                                <span>DENTIST / PRINCIPAL AT HOUSE OF DENTAL</span>
                                <p>
                                Great service from the team at AVY! Needed help with refreshing an old website and creating a new landing page. Nothing was too much of a hassle for them to sort out and were happy to accommodate my demanding needs. Very responsive to communication and well priced. Overall a flawless experience and will be using this agency again. Thank you to the team at AVY!
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="outTeam_header">
                    <Row>
                        <Col lg={12} sm={0} xs={0} />
                        <Col lg={12} sm={24} xs={24}>
                            <h2 className="ourTeam_header--text">OUR TEAM</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="members_list">
                <Col lg={4} sm={0} xs={0} />
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                    <Member leaveImg="/assets/img/members/doodle-ed-normal.png" hoverImg="/assets/img/members/doodle-ed-mouseover.png" />
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-kay-normal.png" hoverImg="/assets/img/members/doodle-kay-mouseover.png" />
                </Col>
                
            </Row>
            <Row style={{marginTop: 60}}>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-marlene-normal.png" hoverImg="/assets/img/members/doodle-marlene-mouseover.png" />
                    
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-sample-avy-normal.png" hoverImg="/assets/img/members/doodle-sample-avy-mouseover.png" />
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-shiraz-normal.png" hoverImg="/assets/img/members/doodle-shiraz-mouseover.png" />
                </Col>
            </Row>
            <Row style={{ marginTop: 60}}>
                <Col lg={4} sm={0} xs={0}/>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-bijo-normal.png" hoverImg="/assets/img/members/doodle-bijo-mouseover.png" />
                    
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-raka-normal.png" hoverImg="/assets/img/members/doodle-raka-mouseover.png" />
                </Col>
                
            </Row>
            <Row>
                <Col span={24} style={{backgroundColor: "lightgrey", borderBottom: "10px solid black", marginTop: 120, padding: "94px 60px"}} className="findout_container">
                    <Row>
                        <Col lg={12} sm={24} xs={24}>
                            <h2 className="findout_container--title">NOW LETS FIND OUT<br/> ABOUT YOU</h2>
                        </Col>
                        <Col lg={12} sm={24} xs={24}>
                            <h2 className="findout_container--text">Lörem ipsum</h2>
                            <h2 className="findout_container--text">Lörem ipsum</h2>
                            <h2 className="findout_container--text">Lörem ipsum</h2>
                            <button>START SURVEY</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ReadyToWork/>
            <Footer setMenu = {setSmallMenu} flag={showSmallMenu} setShowContactUs = {setShowContactUs}></Footer>
        </div>
    )
}
export default About