import React, {useState} from "react"
import { Link } from 'react-router-dom'
import "./Header.css"
import { Button, Col, Row } from "antd";

function Header({showContactUs, setShowContactUs, setSelectedMenu, selectedMenu}) {

    const [showSmallMenu, setSmallMenu] = useState(false);
    
    return (
        <div>
            <div className={`small_header--menu  ${ showSmallMenu ? "small_header--menu-show" : "small_header--menu-hidden"}`}>
                <p style={{ padding: "0px 20px"}}>
                    <span style={{ float: "right", cursor: "pointer"}} onClick={(e) => setSmallMenu(false)}>X</span>
                    <p style={{ clear: "right"}}></p>
                </p>
                <ul>
                    <li><Link to="/about" style={{color: selectedMenu === 1 ? "#ff3600" : "black"}}>ABOUT</Link></li>
                    <li><Link to="/our-work" style={{color: selectedMenu === 2 ? "#ff3600" : "black"}}>OUR WORK</Link></li>
                    <li><Link to="/insights" style={{color: selectedMenu === 3 ? "#ff3600" : "black"}}>INSIGHTS</Link></li>
                    <li><Link to="/shop" style={{color: selectedMenu === 4 ? "#ff3600" : "black"}}>SHOP</Link></li>
                </ul>
                <ul>
                    <li onClick={() => {
                        setShowContactUs(true);
                    }}><Link>CONTACT US</Link></li>
                    
                </ul>

            </div>
            <div className={`overlay ${ showSmallMenu || showContactUs ? "overlay-show" : "overlay-hidden"}`} onClick={() => {
                setSmallMenu(false);
                setShowContactUs(false);
            }}>
            </div>
            <div className="lg_header">
                <Link to="/"><img src="/icon.png"></img></Link>
                <ul>
                <li><Link to="/about" style={{color: selectedMenu === 1 ? "#ff3600" : "black"}}>ABOUT</Link></li>
                    <li><Link to="/our-work" style={{color: selectedMenu === 2 ? "#ff3600" : "black"}}>OUR WORK</Link></li>
                    <li><Link to="/insights" style={{color: selectedMenu === 3 ? "#ff3600" : "black"}}>INSIGHTS</Link></li>
                    <li><Link to="/shop" style={{color: selectedMenu === 4 ? "#ff3600" : "black"}}>SHOP</Link></li>
                </ul>
                <ul>
                    <li onClick={() => {
                        setShowContactUs(true);
                    }}><Link>CONTACT US</Link></li>
                    
                </ul>
            </div>
            <div className={`small_header`}>
                <Link to="/"><img src="/icon.png"></img></Link>
                <ul>
                    <li onClick={() => {
                        setSmallMenu(!showSmallMenu);
                    }}>
                        <img src="/assets/img/icons/mdi_menu.png"></img>
                    </li>
                    
                </ul>
            </div>

            <div className={`contact_us--container ${ showContactUs? "contact_us--container-show" : "contact_us--container-hidden"}`}>
                <div className="contact_us--title">
                    <p>LET'S <br></br>GET IN TOUCH</p>
                    <Button danger size="large" shape="round" onClick={()=> setShowContactUs(false)}>CLOSE</Button>
                </div>
                <div className="contact_us--form">
                    <Row className="form_item">
                        <Col span={4}>
                            <label>SUBJECT</label>
                        </Col>
                        <Col span={20}>
                            <select>
                                <option>Select</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className="form_item">
                        <Col span={4}>
                            <label>NAME</label>
                        </Col>
                        <Col span={20}>
                            <input type="text" placeholder="Enter Your Name"/>
                        </Col>
                    </Row>
                    <Row className="form_item">
                        <Col span={4}>
                            <label>EMAIL</label>
                        </Col>
                        <Col span={20}>
                        <input type="email" placeholder="Enter Your Email"/>
                        </Col>
                    </Row>
                    <Row className="form_item">
                        <Col span={4}>
                            <label>PHONE</label>
                        </Col>
                        <Col span={20}>
                        <input type="text" placeholder="Enter Your Phone"/>
                        </Col>
                    </Row>
                    <Row className="form_item">
                        <Col span={4}>
                            <label>BUDGET</label>
                        </Col>
                        <Col span={20}>
                        <input type="text" placeholder="What did you have in mind?"/>
                        </Col>
                    </Row>
                    <Row className="form_item">
                        <Col span={4}>
                            <label>MESSAGE</label>
                        </Col>
                        <Col span={20}>
                        <input type="text" placeholder="Tell us about you amazing idea!"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6}>
                            <Button type="primary" danger size="large" shape="round" style={{ width: "100%"}}>
                                SEND
                            </Button>
                        </Col> 
                    </Row>
                </div>
            </div>
            
            
        </div>
        
    )
}

export default Header;