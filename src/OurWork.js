import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Button } from "antd"
import Header from "./component/Header";
import ReadyToWork from "./component/ReadyToWork";
import Footer from "./component/Footer";
import "./OurWork.css"
import PopupHeader from "./component/PopupHeader";

function OurWork({ selectedMenu }) {

    const [imgNum, setImgNum] = useState(1);
    const [imgDetai, setImgDetail] = useState(false);
    const [contactus, setContactUs] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();
    const img5 = useRef();
    const [popup, setPopup] = useState(false);
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
            const scrollTrigger = document.getElementById("our_work--header");
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
    return (
        <div style={{ padding: "0px 60px"}}>
            <Header showContactUs={showContactUs} setShowContactUs={setShowContactUs} selectedMenu={selectedMenu}/>
            <div id="our_work--header">
            <div className="ourwork_title">
                <p>OUR WORK</p>
            </div>
            <div className="ourwork_img">
                <div className={`img_item ${ imgNum === 1 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
                    setImgNum(1)  
                    setImgDetail(true)
                    
                }}>
                    <img src="/assets/img/Number1.png"></img>
                    <div ref={img1}>
                        <p>BLK PIZZA</p>
                        <p>BRANDING</p>
                    </div>
                    
                </div>
                <div className={`img_item ${ imgNum === 2 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
                    setImgNum(2)  
                    setImgDetail(true);
                }}>
                    <img src="/assets/img/Number2.png"></img>
                    <div ref={img2}>
                        <p>SAMPLEY & SONS</p>
                        <p>BRANDING</p>
                    </div>
                </div>
                <div className={`img_item ${ imgNum === 3 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
                    setImgNum(3)  
                    setImgDetail(true)
                }}>
                    <img src="/assets/img/Number3.png"></img>
                    <div ref={img3}>
                        <p >LITTLE BOBBINS BOUTIQUE</p>
                        <p>BRANDING</p>
                    </div>
                </div>
                <div className={`img_item ${ imgNum === 4 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
                    setImgNum(4)  
                    setImgDetail(true);
                }}>
                    <img src="/assets/img/Number4.png"></img>
                    <div ref={img4}>
                        <p >LOREM IPSUM</p>
                        <p>BRANDING</p>
                    </div>
                </div>
                <div className={`img_item ${ imgNum === 5 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
                    setImgDetail(true)
                    setImgNum(5)
                }}>
                    <img src="/assets/img/Number5.png"></img>
                    <div ref={img5}>
                        <p>LOREM IPSUM</p>
                        <p>BRANDING</p>
                    </div>
                </div>
            </div>
            </div>
            {
                popup && (<PopupHeader setSmallMenu = {setSmallMenu}/>)
            }
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
                            <button style={{border: "none", fontSize: 18, fontWeight: 500, padding: "18px 36px", backgroundColor: "#FF3600",  borderRadius: 30, color: "white", cursor: "pointer", marginTop: 40, }}>START SURVEY</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ReadyToWork />
            <Footer setMenu = {setSmallMenu} flag={showSmallMenu} setShowContactUs = {setShowContactUs}></Footer>
            <div className={`img_item--detail ${imgDetai ? "img_item--detail-show" : "item_item--detail-hidden"}`}>
                <div className="img_detail--header">
                    <div>
                    <p className="img_detail--header-title">BLK PIZZA</p>
                    <p className="img_detail--header-description">BRANDING</p>
                    </div>
                    <Button size="large" danger shape="round" onClick={(e) => setImgDetail(false)}>CLOSE</Button>
                </div>
                <div className="img_detail--content">
                    <div className="project_container">
                        <div className="project">
                            <p>PROJECT</p>
                            <p>CLIENT: LOREM IPSUM</p>
                            <p>YEAR: 2023</p>
                        </div>
                        <div className="service">
                            <p>SERVICE</p>
                            <p>BRANDING</p>
                        </div>
                    </div>
                    <div className="challenge_container">
                        <p>CHALLENGE</p>
                        <p>Lörem ipsum demödade märk-dna: pensionärskuvös än aras ovina. Trumpifiering intraskade nende i tuspeska tekagon. Reskapet aberen vyr agnostigen, i ter. Pegt giganösm elykovament. </p>
                    </div>
                    <div className="img_list">
                        <div className="main_img">
                            <img src={`/assets/img/${imgNum}.png`} />
                        </div>
                        <div className="sub_img">
                            <img  src={`/assets/img/${imgNum}.png`}></img>
                            <img  src={`/assets/img/${imgNum}.png`}></img>
                        </div>
                    </div>
                    <div className="approach_container">
                        <p>APPROACH</p>
                        <p>Lörem ipsum demödade märk-dna: pensionärskuvös än aras ovina. Trumpifiering intraskade nende i tuspeska tekagon. Reskapet aberen vyr agnostigen, i ter. Pegt giganösm elykovament. </p>
                    </div>
                    <div>
                        <img src={`/assets/img/${imgNum}.png`} style={{ width: "100%", marginTop: 60}}/>
                    </div>
                    <div className="result_container">
                        <p>RESULT</p>
                        <p>Lörem ipsum demödade märk-dna: pensionärskuvös än aras ovina. Trumpifiering intraskade nende i tuspeska tekagon. Reskapet aberen vyr agnostigen, i ter. Pegt giganösm elykovament. </p>
                    </div>
                    <div className="site">
                        <p>BLKPIZZA.COM</p>
                    </div>
                </div>
            </div>
            {/* <div className={`contactus_overlay ${contactus ? "contactus_overlay--show" : "contactus_overlay--hidden"}`}>
                <div className="img_detail--header">
                    <div>
                    <p className="img_detail--header-title">LET'S</p>
                    <p className="img_detail--header-title">GET IN TOUCH</p>
                    </div>
                    <Button size="large" danger shape="round">CLOSE</Button>
                </div>
            </div> */}
            <div className={`overlay ${imgDetai ? "overlay-show" : "overlay-hidden"}`} onClick={() => {
                setImgDetail(false);
            }}></div>
        </div>
    );
}

export default OurWork;
