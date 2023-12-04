import React from "react"
import { Row, Col, Input,Select, Button } from "antd";

function ReadyToWork() {
    return (
        <div className="readytowork_container">
                <div className="readytowork_title">
                    <p>ARE YOU READY TO</p>
                    <div className="dashed-line">
                        <hr/>
                        <span>WORK</span>
                        <hr/>
                    </div>
                    <div className="dashed-line">
                        <span>WITH</span>
                        <hr/>
                        <div>
                            <img src="/assets/img/us.png"></img>
                            <span style={{paddingLeft: 10}}>?</span>
                        </div>
                        
                    </div>
                </div>
                <Row className="form_container">
                    <Col span={3}>
                        <label>SUBJECT</label>
                    </Col>
                    <Col span={21}>
                    <select>
                                <option>Select</option>
                            </select>
                    </Col>
                    <Col span={3} style={{ marginTop: 60 }}>
                        <label>NAME</label>
                    </Col>
                    <Col span={9} style={{ marginTop: 60, paddingRight: 30 }}>
                    <input type="text" placeholder="Enter Your Name"/>
                    </Col>
                    <Col span={3} style={{ marginTop: 60, paddingLeft: 30 }}>
                        <label>EMAIL</label>
                    </Col>
                    <Col span={9} style={{ marginTop: 60 }}>
                    <input type="email" placeholder="Enter Your Email"/>
                    </Col>
                    <Col span={3} style={{ marginTop: 60 }}>
                        <label>PHONE</label>
                    </Col>
                    <Col span={9} style={{ marginTop: 60, paddingRight: 30 }}>
                    <input type="text" placeholder="Enter Your Phone"/>
                    </Col>
                    <Col span={3} style={{ marginTop: 60, paddingLeft: 30 }}>
                        <label>BUDGET</label>
                    </Col>
                    <Col span={9} style={{ marginTop: 60 }}>
                    <input type="text" placeholder="What did you have in mind?"/>
                    </Col>
                    <Col span={3} style={{ marginTop: 60 }}>
                        <label>Message</label>
                    </Col>
                    <Col span={21} style={{ marginTop: 60 }}>
                    <input type="text" placeholder="Tell us about you amazing idea!"/>
                    </Col>
                    <Col span={8} offset={8}>
                        <button style={{ width: "100%"}}>SEND</button>
                    </Col>
                    
                </Row>
            </div>
    );
}

export default ReadyToWork;