import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./PopupHeader.css"
import { Col, Row } from "antd";

function PopupHeader(props) {
    return (
        <div>
            <div className={`popup_header`}>
                <div>
                    <Link to="/"><img src="/icon.png"></img></Link>
                    <ul>
                        <li onClick={() => {
                            props.setSmallMenu(true);
                        }}>
                            <img src="/assets/img/icons/mdi_menu.png"></img>
                        </li>
                        
                    </ul>
                </div>
                
            </div>
        </div>
        
    );
}

export default PopupHeader;