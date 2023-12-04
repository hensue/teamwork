import React, { useState } from "react"
import { Link } from "react-router-dom"
import './header.css';
import { Button, Dropdown, Row, Col } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';


function Header({ type, showContactUs, setShowContactUs }) {


    const items = [
        {
            key: '1',
            label: (
                <Link className="header-item" style={{ display: "inline", padding: "0 24px" }} to="/about">ABOUT</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link className="header-item" style={{ display: "inline", padding: "0 24px" }} to="/our-work">OUR WORK</Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link className="header-item" style={{ display: "inline", padding: "0 24px" }} to="/insights">INSIGHTS</Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link className="header-item" style={{ display: "inline", padding: "0 24px" }} to="/shop">SHOP</Link>
            ),
        },
    ];
    return (
        <div>
            {
                type ? <div id="header_section" style={{ padding: "24px 60px 0px 60px", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#DBDDE2" }}>
                    <img src="/icon.png"></img>
                    <ul style={{ listStyleType: "none", margin: 0 }}>
                        <Link className="header-item" style={{ display: "inline", padding: "0 24px" }} to="/about">ABOUT</Link>
                        <Link className="header-item" style={{ display: "inline", padding: "0 24px" }} to="/our-work">OUR WORK</Link>
                        <Link className="header-item" style={{ display: "inline", padding: "0 24px" }} to="/insights">INSIGHTS</Link>
                        <Link className="header-item" style={{ display: "inline", padding: "0 24px" }} to="/shop">SHOP</Link>
                    </ul>
                    <ul style={{ listStyleType: "none", margin: 0 }}>
                        <Link className="header-item" tyle={{ display: "inline", padding: "0 24px" }}onClick={()=> setShowContactUs(true)}>CONTACT US</Link>

                    </ul>
                </div> :
                    <div className="sticky-top"  id="header_section" style={{ padding: "24px 60px 0px 60px", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "white" }}>
                        <img src="/icon.png"></img>
                        <ul style={{ listStyleType: "none", margin: 0 }}>

                        </ul>
                        <ul style={{ listStyleType: "none", margin: 0 }}>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottomRight"
                            >
                                <Button icon={<UnorderedListOutlined/>}></Button>
                            </Dropdown>
                        </ul>
                    </div>
            }
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
            <div className={`overlay ${ showContactUs ? "overlay-show" : "overlay-hidden"}`} onClick={() => {
                setShowContactUs(false);
            }}>
            </div>
        </div>
    )
}

export default Header;