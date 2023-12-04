import React, { useState } from "react";
import { Row } from 'antd'
import { Link } from "react-router-dom";
import './Footer.css'
import { Col } from "antd";

function Footer(props) {
    const [linkedinHover, setLinkedinHover] = useState(false);
    const [behance, setBehance] = useState(false);
    const [instagram, setInstagram] = useState(false);
    return (
        <div className="footer_container">
            <div className="footer_link">
                <div>
                    <img src="/icon.png"></img>
                </div>
                <div>
                    <ul className="footer_menu">
                        <li className="footer_menu--item">
                            <div>
                                <p><Link to="/about">ABOUT</Link></p>
                                <p><Link to="/our-work">OUR WORK</Link></p>
                            </div>
                        </li>
                        <li className="footer_menu--item">
                            <div>
                                <p><Link to="/insights">INSIGHTS</Link></p>
                                <p><Link to="/about">SHOP</Link></p>
                            </div>
                        </li>
                        <li className="footer_menu--item">
                            <div>
                                <p><Link onClick={() => {
                                    props.setMenu(false);
                                    props.setShowContactUs(true)
                                } }>CONTACT US</Link></p>
                                <p><Link>TESTIMONIALS</Link></p>
                            </div>
                        </li>
                        <li className="footer_menu--item">
                            <div>
                                <p><Link to="http://Hello@avy.me">Hello@avy.me</Link></p>
                                <p>+44 7365 536 636</p>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <Row className="footer_title--container">
                <Col span={7} className="footer_title">
                        <p style={{ margin: "auto"}}>LET'S STAY<br/>CONNECTED</p>
                </Col>
                <Col span={17} className="site_list">
                        <Link><img src={`${linkedinHover ? "/assets/img/State=Hovered.png" : "/assets/img/mdi_linkedin.png"}`} onMouseEnter={()=>setLinkedinHover(true)} onMouseLeave={()=>setLinkedinHover(false)}/></Link>
                        <Link><img src={`${behance ? "/assets/img/State=Hovered (2).png" : "/assets/img/ri_behance-fill.png"}`}  onMouseEnter={()=>setBehance(true)} onMouseLeave={()=>setBehance(false)}/></Link>
                        <Link><img src={`${instagram ? "/assets/img/State=Hovered (1).png" : "/assets/img/mdi_instagram.png"}`} onMouseEnter={()=>setInstagram(true)} onMouseLeave={()=> setInstagram(false)}/></Link>
                </Col>
            </Row>
            <div className="copywrite">
                <p>AVY© CONSULTANCY. DESIGN, BRAND & MOTION</p>
                <ul>
                    <li><Link>TERMS & CONDITIONS</Link></li>
                    <li><Link>PRIVACY POLICY</Link></li>
                </ul>
            </div>
            <div className={`popup_menu ${ props.flag ? "popup_menu--show" : "popup_menu--hidden"}`}>
                <div className="toolbar">
                    <img src="/icon.png"></img>
                    <p onClick={() => props.setMenu(false)}>
                        <span>CLOSE </span>
                        <span>X</span>
                    </p>
                </div>
                <div className="menu_list">
                    <Row>
                        <Col span={12} offset={6}>
                            <ul>
                                <li><Link to="/about">ABOUT</Link></li>
                                <li><Link to="/our-work">OUR WORK</Link></li>
                                <li><Link to="/insights">INSIGHTS</Link></li>
                                <li><Link to="/shop">SHOP</Link></li>
                                <li onClick={() => {
                                    props.setMenu(false);
                                    props.setShowContactUs(true)
                                } }><Link>CONTACT</Link></li>
                            </ul>
                            <img src="/assets/img/popup/avy-website-banner-pattern-white 1 (1).png" className="red_img"></img>
                            <img src="/assets/img/popup/unsplash_XcZ78DlXtes.png" className="avy_img"></img>
                        </Col>    
                    </Row>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;