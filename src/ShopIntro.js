import React, {useEffect, useState} from "react";
import Header from "./component/Header";
import "./ShopIntro.css"
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import Footer from "./component/Footer";
import PopupHeader from "./component/PopupHeader";

function ShopIntro({selectedMenu}) {
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
            const scrollTrigger = document.getElementById("shop_header");
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
            <div className="shop_detail">
                <div className="shop_intro--img" id="shop_header">
                    <img src="/assets/img/shops/shop1_detail.png" width={"100%"}/>
                    <p className="shop_description">AVY Pruthi, Nuneaton business owner – Coventry & Warwickshire Chamber workshops</p>
                    <div className="sub_detail">
                        <ul>
                            <li>30 June 2021</li>
                            <li>Business</li>
                        </ul>
                        <div className="links">
                            <span>Share: </span>
                            <Link><img src="/assets/img/icons/fa6-brands_square-x-twitter.png"></img></Link>
                            <Link><img src="/assets/img/icons/mdi_facebook.png"></img></Link>
                            <Link><img src="/assets/img/icons/mdi_linkedin.png"></img></Link>
                            <Link><img src="/assets/img/icons/mdi_share-variant.png"></img></Link>
                        </div>
                    </div>
                </div>
                {
                    popup && (<PopupHeader setSmallMenu = {setSmallMenu}/>)
                }
                <div className="shop_detail--text">
                    <p>
                    New and small business owners in Nuneaton and Bedworth can benefit from a series of free clinics.<br></br>
                    The clinics, presented by Coventry and Warwickshire Chamber of Commerce are fully funded and aim to help people who want to start a business and micro business owners who have started one in the last 24 months.<br></br>
                    One Nuneaton based business owner who has gained is Avy Pruthi, who has set up a design and digital experiences company called Avy Consultancy.
                    <br></br>
                    <br></br>
                    Through the sessions and access to a wide programme of masterclasses and workshops, he is now director of a business that helps bring businesses to life using creative design for all touch-points.<br></br>
                    The business continues to grow and is pushing forward with plans for further growth. <br></br>Avy was introduced to the Coventry & Warwickshire Chamber of Commerce’s Start-Up Programme in February after deciding to resign from full-time employment to pursue his dream of starting his own business.<br></br>
                    Avy felt it was time to act on his passion for design and dream of being a business owner and explained:.
                    </p>
                </div>
                <div className="latest_insights">
                    <p>LATEST INSIGHTS</p>
                    <Row className="latest_list">
                        <Col span={8} className="latest_item">
                            <img src="/assets/img/shops/shop (2).png"></img>
                            <p>Daily Logo Challenge for 50 days</p>
                            <ul>
                                        <li>30 June 2021</li>
                                        <li>Design</li>
                                        <li>Logo Identity</li>
                                    </ul>
                        </Col>
                        <Col span={8} className="latest_item">
                            <img src="/assets/img/shops/shop (3).png"></img>
                            <p>Bringing a Business to Life: Chamber of Commerce, AVY Pruthi</p>
                            <ul>
                                        <li>30 June 2021</li>
                                        <li>Business</li>
                                    </ul>
                        </Col>
                        <Col span={8} className="latest_item">
                            <img src="/assets/img/shops/shop (4).png"></img>
                            <p>Our new Trustpilot partnership, and how it’ll help your business</p>
                            <ul>
                                        <li>30 June 2021</li>
                                        <li>Business</li>
                                        <li>Patners</li>
                                    </ul>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer setMenu = {setSmallMenu} flag={showSmallMenu} setShowContactUs = {setShowContactUs}></Footer>
        </div>
    );
}
export default ShopIntro;