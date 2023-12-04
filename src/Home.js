import React, { useState } from "react"
import Header from "./component/home/Header";
import { ArrowRightOutlined, UnorderedListOutlined } from '@ant-design/icons';
import './home.css';
import Footer from "./component/Footer"
import ReadyToWork from "./component/ReadyToWork"
import PopupHeader from "./component/PopupHeader";
import { useEffect, useRef } from "react";

function Home({ selectedMenu }) {
    const homeRef = useRef(null)
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
        const handleScroll = (e) => {
            const scrollTrigger = document.getElementById("hero_section");
            const triggerPosition = scrollTrigger.getBoundingClientRect().bottom;
            if(triggerPosition <= 0){
                setPopup(true);

            }
                
            else setPopup(false);
        }
        window.addEventListener("scroll", handleScroll);

        var heroHeight = document.getElementById("hero_section").getBoundingClientRect().height;
        var headerHeight = document.getElementById("header_section").getBoundingClientRect().height;
        console.log("main-title height", heroHeight - headerHeight)
        document.getElementsByClassName("main-title")[0].style.height = `${heroHeight - headerHeight}px`;
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        }
    }, [])
    console.log("//////////////////", selectedMenu)
    return (
        <div ref={homeRef}>
            <div className="main" >

                <div style={{ backgroundColor: "hsl(223, 11%, 87%)", display:"flex", flexDirection:"column" , height: "100vh"}} id="hero_section">
                    <Header type={true} showContactUs={showContactUs} setShowContactUs={setShowContactUs}></Header>
                    <div className="main-title" style={{display:"flex", flexDirection: "column", justifyContent: "space-between"}}>
                        
                        <div>
                        <p style={{  fontSize:"10vw", fontWeight: 713, margin: 0, lineHeight: 1 }}>WE ARE <br></br>AVY<span style={{ fontSize: "4vw", fontWeight: 712, verticalAlign: "top"}}>®</span></p>
                        <p style={{ width: "40%", padding: "0,60px", color: '#727272', fontSize: "1vw", fontWeight: "712" }}>We ignite collaboration with ambitious brands & businesses, marketers, and executives, crafting. Jaw-dropping creative solutions across industries</p>
                        </div>
                        <div>
                            <img src="/assets/img/bg-vector.png" style={{ height: "90%", bottom: "0", zIndex: "0", position: "absolute", right: "20px", bottom: "0px" }}></img>
                        </div>
                        
                        <div className="services" style={{width: "50%" }}>
                            <h2 style={{ padding: "0,60px", color: '#727272', margin: 0, padding: "0.5vw 0vw", fontSize: "1vw", fontWeight: "712",  borderBottom: "solid" }}>CORE SERVICES :</h2>
                            <p style={{ fontWeight: "700", color: '#1A1A1A', margin: 0, padding: "0.5vw 0vw", borderBottom: "solid", borderColor: "#727272",  fontSize: "1vw" }}>Design<span style={{ float: "right", color: "red" }}>01</span></p>
                            <p style={{ fontWeight: "700", color: '#1A1A1A', margin: 0, padding: "0.5vw 0vw", borderBottom: "solid", borderColor: "#727272",  fontSize: "1vw" }}>Brand Strategy <span style={{ float: "right", color: "red" }}>02</span></p>
                            <p style={{ fontWeight: "700", color: '#1A1A1A', margin: 0, padding: "0.5vw 0vw", borderBottom: "solid", borderColor: "#727272",  fontSize: "1vw" }}>Motion Design & Animation<span style={{ float: "right", color: "red" }}>03</span></p>
                        </div>
                        <div>
                            <img src="/assets/img/man.png" style={{ height: "90%", bottom: "0", zIndex: "2000", position: "absolute", right: "20px", bottom: "0px", zIndex: "0" }}></img>
                        </div>
                    </div>
                </div>
                {
                    popup && (<PopupHeader setSmallMenu = {setSmallMenu}/>)
                }

                <div className="begin" style={{ marginTop: "40px", padding: "0 60px" }}>
                    <div style={{ textAlign: "right", padding: "48px", paddingRight: "10vw", backgroundColor: "hsl(223, 11%, 87%)", borderBottom: "10px solid" }}>
                        <p style={{ fontWeight: "700", fontSize: "70px", margin: 0 }}>LEL'S BEGIN</p>

                    </div>
                    <div className="difference" style={{ marginTop: "60px" }}>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <p style={{ fontWeight: "700", fontSize: "48px", margin:0 }}>"THE DIFFERENCE <br></br>BETWEEN ORDINARY <br></br>AND EXTRAORDINARY <br></br>IS THAT LITTLE EXTRA."</p>
                            <p style={{ fontSize: 22, color: "grey"}}>- JIMMY JOHNSON</p>
                        </div>
                        <div style={{ width: "50%", display: "inline-block", verticalAlign:"top", fontSize: 22, }}>
                            <p style={{lineHeight: 1.5}}>We transform your ideas into reality through cutting-edge design, branding, and motion. We're not just experts; we're passionate strategists and visionary storytellers committed to excellence.
                                <br></br><br></br>
                                Our collaborative ethos thrives in today's creative landscape, serving startups and enterprises.
                                <br></br><br></br>
                                Let's embark on your creative journey to happiness together.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: "left", backgroundColor: "hsl(223, 11%, 87%)", borderBottom: "10px solid", marginTop: "120px", padding: "40px" }}>
                        <div style={{ width: "50%", display: "inline-flex" }}></div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: "0px", height: "80px" }}>HOW</p>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: "0px", height: "80px" }}>WE THINK</p>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: 0,  height: "80px" }}>LOREM IPSUM</p>
                        </div>
                    </div>


                    <div style={{ display: "flex", flexWrap: "nowrap", marginTop: "60px", overflowY: "scroll" }}  id="think_div">
                        <div style={{ flex: "0 0 50%", padding: 24, boxSizing: "border-box", border: "1px solid black" }} className="lorem_element">
                            <div>
                                <p style={{ width: "60px", height: "60px", backgroundColor: "#FF3600", borderRadius: "50%", color: "white", fontSize: "32px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>01</p>
                                <h1>Lörem ipsum rilåning ångerrösta teraning, i rerina mudöl: fasade. Du kan vara drabbad?</h1>
                                <span style={{ fontSize: 18, color: "grey" }}>Lorem Ipsum</span><br></br><br></br>
                                <span style={{ fontSize: 18, color: "black" }}>Client</span><br></br>
                                <span style={{ fontSize: 18, color: "black" }}>Lorem Ipsum</span>
                            </div>
                        </div>
                        <div style={{ flex: "0 0 50%", padding: 24, boxSizing: "border-box", border: "1px solid" }}className="lorem_element">
                            <div>
                                <p style={{ width: "60px", height: "60px", backgroundColor: "#FF3600", borderRadius: "50%", color: "white", fontSize: "32px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>02</p>
                                <h1>Lörem ipsum rilåning ångerrösta teraning, i rerina mudöl: fasade. Du kan vara drabbad?</h1>
                                <span style={{ fontSize: 18, color: "grey" }}>Lorem Ipsum</span><br></br><br></br>
                                <span style={{ fontSize: 18, color: "black" }}>Client</span><br></br>
                                <span style={{ fontSize: 18, color: "black" }}>Lorem Ipsum</span>
                            </div>
                        </div>
                        <div style={{ flex: "0 0 50%", padding: 24, boxSizing: "border-box",border: "1px solid" }}className="lorem_element">
                            <div>
                                <p style={{ width: "60px", height: "60px", backgroundColor: "#FF3600", borderRadius: "50%", color: "white", fontSize: "32px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>03</p>
                                <h1>Lörem ipsum rilåning ångerrösta teraning, i rerina mudöl: fasade. Du kan vara drabbad?</h1>
                                <span style={{ fontSize: 18, color: "grey" }}>Lorem Ipsum</span><br></br><br></br>
                                <span style={{ fontSize: 18, color: "black" }}>Client</span><br></br>
                                <span style={{ fontSize: 18, color: "black" }}>Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ paddingTop: "40px", display: "flex", justifyContent: "center" }}>
                        <button>Contractor Listing Website</button>
                    </div>

                    <div style={{ textAlign: "left", backgroundColor: "hsl(223, 11%, 87%)", borderBottom: "10px solid", marginTop: "120px", paddingRight: "48px", paddingTop: "40px" }}>
                        <div style={{ width: "50%", display: "inline-flex" }}></div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: "0px", height: "80px" }}>SERVICES</p>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: "0px", height: "80px" }}>THAT</p>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: 0, marginBottom: 40, height: "80px" }}>WE OFFER</p>
                        </div>
                    </div>

                    <div style={{ borderBottom: "1px solid", borderBottomColor: "rgb(173 166 166)", marginTop: "60px" }}>
                        <div style={{ width: "50%", display: "inline-flex", verticalAlign: "top" }}>
                            <p style={{ margin: "0px", width: "60px", height: "60px", backgroundColor: "#FF3600", borderRadius: "50%", color: "white", fontSize: "32px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>01</p>
                            <p style={{ fontFamily: "Montserrat", fontSize: "50px", fontWeight: "700", margin: "0px", marginLeft: "25px" }}>DESIGN</p>
                        </div>
                        <div style={{ width: "50%", display: "inline-block", boxSizing: "border-box", borderLeft: "1px solid", paddingLeft: "40px" }}>
                            <h1>EXHIBITION STAND DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                        </div>
                    </div>

                    <div style={{ borderBottom: "1px solid", borderBottomColor: "rgb(173 166 166)", marginTop: "60px" }}>
                        <div style={{ width: "50%", display: "inline-flex", verticalAlign: "top" }}>
                            <p style={{ margin: "0px", width: "60px", height: "60px", backgroundColor: "#FF3600", borderRadius: "50%", color: "white", fontSize: "32px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>02</p>
                            <p style={{ fontFamily: "Montserrat", fontSize: "50px", fontWeight: "700", margin: "0px", marginLeft: "25px" }}>BRANDING</p>
                        </div>
                        <div style={{ width: "50%", display: "inline-block", boxSizing: "border-box", borderLeft: "1px solid", paddingLeft: "40px" }}>
                            <h1>EXHIBITION STAND DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                        </div>
                    </div>

                    <div style={{ borderBottom: "1px solid", borderBottomColor: "rgb(173 166 166)", marginTop: "60px" }}>
                        <div style={{ width: "50%", display: "inline-flex", verticalAlign: "top" }}>
                            <p style={{ margin: "0px", width: "60px", height: "60px", backgroundColor: "#FF3600", borderRadius: "50%", color: "white", fontSize: "32px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>03</p>
                            <p style={{ fontFamily: "Montserrat", fontSize: "50px", fontWeight: "700", margin: "0px", marginLeft: "25px" }}>MOTION</p>
                        </div>
                        <div style={{ width: "50%", display: "inline-block", boxSizing: "border-box", borderLeft: "1px solid", paddingLeft: "40px" }}>
                            <h1>EXHIBITION STAND DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            <br></br>
                            <h1>POWERPOINT PRESENTATION DESIGN</h1>
                            <p>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                        </div>
                    </div>

                    <div style={{ textAlign: "left", backgroundColor: "hsl(223, 11%, 87%)", borderBottom: "10px solid", marginTop: "120px", paddingRight: "48px", paddingTop: "40px" }}>
                        <div style={{ width: "50%", display: "inline-flex" }}></div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: "0px", height: "80px" }}>HOW</p>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: "0px", height: "80px" }}>WE DO</p>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: 0, marginBottom: 40, height: "80px" }}>THINGS</p>
                        </div>
                    </div>

                    <div style={{ marginTop: "60px", display: "flex", overflowY: "scroll", alignItems:"center" }}>

                        <div style={{ width: "30vw" }}>
                            <div style={{ width: "30vw", height: "30vw", border: "1px solid", textAlign: "center" }}>
                                <img src="/assets/img/Research.svg" style={{ marginTop: "30px", width: "65%" }}></img>
                                <p style={{ marginBottom: "0px", fontWeight: "700", fontSize: "30px", marginTop: "10px" }}>RESEARCH</p>
                            </div>
                            <div style={{ width: "30vw", textAlign: "center", fontSize: 22}}>
                                <p style={{ padding: "0px 48px"}}>Lörem ipsum diska ehysade.ska ehysade. Bedåv köktigt. Såna ska ehysade. Bedåv köktigt. Såna  Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            </div>
                        </div>
                            <img src="/assets/img/line.png" style={{ margin: "0px 20px"}}></img>
                        <div style={{ width: "30vw" }}>
                            <div style={{ width: "30vw", height: "30vw", border: "1px solid", textAlign: "center" }}>
                                <img src="/assets/img/Research.svg" style={{ marginTop: "30px", width: "65%" }}></img>
                                <p style={{ marginBottom: "0px", fontWeight: "700", fontSize: "30px", marginTop: "10px" }}>RESEARCH</p>
                            </div>
                            <div style={{ width: "30vw", textAlign: "center", fontSize: 22 }}>
                                <p style={{ padding: "0px 48px"}}>Lörem ipsum diska ehysade.ska ehysade. Bedåv köktigt. Såna ska ehysade. Bedåv köktigt. Såna  Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            </div>
                        </div>
                            <img src="/assets/img/line.png" style={{ margin: "0px 20px"}}></img>
                        <div style={{ width: "30vw" }}>
                            <div style={{ width: "30vw", height: "30vw", border: "1px solid", textAlign: "center" }}>
                                <img src="/assets/img/Research.svg" style={{ marginTop: "30px", width: "65%" }}></img>
                                <p style={{ marginBottom: "0px", fontWeight: "700", fontSize: "30px", marginTop: "10px" }}>RESEARCH</p>
                            </div>
                            <div style={{ width: "30vw", textAlign: "center", fontSize: 22}}>
                                <p style={{ padding: "0px 48px"}}>Lörem ipsum diska ehysade.ska ehysade. Bedåv köktigt. Såna ska ehysade. Bedåv köktigt. Såna  Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: "left", backgroundColor: "hsl(223, 11%, 87%)", borderBottom: "10px solid", marginTop: "120px", paddingRight: "48px", paddingTop: "40px" }}>
                        <div style={{ width: "50%", display: "inline-flex" }}></div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: "0px", height: "80px" }}>CLIENTS</p>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: "0px", height: "80px" }}>WE HAVE</p>
                            <p style={{ fontWeight: "700", fontSize: "70px", margin: 0, marginBottom: 40, height: "80px" }}>WORKED WITH</p>
                        </div>
                    </div>

                    <div className="difference" style={{ marginTop: "60px", display: "flex" }}>
                        <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div>
                                <p style={{ fontWeight: "700", fontSize: "48px", margin: "0px 0px 0px 0px" }}>WHO WE'VE</p>
                                <p style={{ fontWeight: "700", fontSize: "48px", margin: "0px 0px 0px 0px" }}>DONE IT FOR</p>
                            </div>
                            <div style={{ paddingRight: "20px", bottom: "0px", paddingBottom: "50px" }}>
                                <p style={{ color: "rgb(119 117 117)" }}>
                                    INDUSTRIES:
                                </p>
                                <p style={{ color: "rgb(119 117 117)", fontWeight: "700", fontSize: "32px", wordSpacing: "17px", lineHeight: "2" }}>
                                    MANUFACTURING F&B TECH <br></br>FINTECH FINANCE GAMING <br></br>HVAC WATER, GAS, & UTILITIES, <br></br>EDUCATION TRANSPORTATION
                                </p>
                            </div>
                        </div>
                        <div style={{ width: "50%", display: "inline-block", marginLeft: "50px" }}>
                            <p style={{ fontWeight: "700", fontSize: "30px", marginTop: "0px" }}>XXXXXX</p>
                            <p style={{ fontWeight: "700", fontSize: "30px", marginTop: "0px" }}>XXXXXX</p>
                            <p style={{ fontWeight: "700", fontSize: "30px", marginTop: "0px" }}>XXXXXX</p>
                            <p style={{ fontWeight: "700", fontSize: "30px", marginTop: "0px" }}>XXXXXX</p>
                            <p style={{ fontWeight: "700", fontSize: "30px", marginTop: "0px" }}>XXXXXX</p>
                            <p style={{ fontWeight: "700", fontSize: "30px", marginTop: "0px" }}>XXXXXX</p>
                            <p style={{ fontWeight: "700", fontSize: "30px", marginTop: "0px" }}>XXXXXX</p>
                            <p style={{ fontWeight: "700", fontSize: "30px", marginTop: "0px" }}>XXXXXX</p>
                            <p style={{ fontWeight: "700", fontSize: "30px", marginTop: "0px" }}>XXXXXX</p>
        
                            <button style={{ marginTop: 40}}>WORK WITH US</button>
                        </div>
                    </div>

                    <div style={{ marginTop: "120px" }}>
                        <p style={{ fontWeight: "700", fontSize: "70px" }}>INSIGHTS</p>
                        <div style={{ borderBottom: "1px solid", height: "100px" }}>
                            <div style={{ width: "20%", height: "100%", display: "inline-flex", justifyContent: "center", flexDirection: "column" }}>
                                <p style={{ margin: "0px" }}>30 June 2023</p>
                            </div>
                            <div style={{ width: "65%", borderRight: "1px solid", display: "inline-flex", height: "100px", overflow: "hidden", alignItems: "center" }}>
                                <p style={{ margin: "0px", fontWeight: "700", fontSize: "25px", textOverflow: "ellipsis", overflow: "hidden", textWrap: "nowrap" }}>MANUFACTURING F&B TECH FINTECH FINANCE MANUFACTURING F&B TECH FINTECH FINANCE CAMING HVAC WATER, GAS</p>
                            </div>
                            <div style={{ width: "14.8%", display: "inline-flex", alignItems: "center" }}>
                                <ArrowRightOutlined style={{ marginLeft: "40%", fontSize: "30px" }} />
                            </div>
                        </div>
                        <div style={{ borderBottom: "1px solid", height: "100px" }}>
                            <div style={{ width: "20%", height: "100%", display: "inline-flex", justifyContent: "center", flexDirection: "column" }}>
                                <p style={{ margin: "0px" }}>30 June 2023</p>
                            </div>
                            <div style={{ width: "65%", borderRight: "1px solid", display: "inline-flex", height: "100px", overflow: "hidden", alignItems: "center" }}>
                                <p style={{ margin: "0px", fontWeight: "700", fontSize: "25px", textOverflow: "ellipsis", overflow: "hidden", textWrap: "nowrap" }}>MANUFACTURING F&B TECH FINTECH FINANCE MANUFACTURING F&B TECH FINTECH FINANCE CAMING HVAC WATER, GAS</p>
                            </div>
                            <div style={{ width: "14.8%", display: "inline-flex", alignItems: "center" }}>
                                <ArrowRightOutlined style={{ marginLeft: "40%", fontSize: "30px" }} />
                            </div>
                        </div>
                        <div style={{ borderBottom: "1px solid", height: "100px" }}>
                            <div style={{ width: "20%", height: "100%", display: "inline-flex", justifyContent: "center", flexDirection: "column" }}>
                                <p style={{ margin: "0px" }}>30 June 2023</p>
                            </div>
                            <div style={{ width: "65%", borderRight: "1px solid", display: "inline-flex", height: "100px", overflow: "hidden", alignItems: "center" }}>
                                <p style={{ margin: "0px", fontWeight: "700", fontSize: "25px", textOverflow: "ellipsis", overflow: "hidden", textWrap: "nowrap" }}>MANUFACTURING F&B TECH FINTECH FINANCE MANUFACTURING F&B TECH FINTECH FINANCE CAMING HVAC WATER, GAS</p>
                            </div>
                            <div style={{ width: "14.8%", display: "inline-flex", alignItems: "center" }}>
                                <ArrowRightOutlined style={{ marginLeft: "40%", fontSize: "30px" }} />
                            </div>
                        </div>
                        <div style={{ borderBottom: "1px solid", height: "100px" }}>
                            <div style={{ width: "20%", height: "100%", display: "inline-flex", justifyContent: "center", flexDirection: "column" }}>
                                <p style={{ margin: "0px" }}>30 June 2023</p>
                            </div>
                            <div style={{ width: "65%", borderRight: "1px solid", display: "inline-flex", height: "100px", overflow: "hidden", alignItems: "center" }}>
                                <p style={{ margin: "0px", fontWeight: "700", fontSize: "25px", textOverflow: "ellipsis", overflow: "hidden", textWrap: "nowrap" }}>MANUFACTURING F&B TECH FINTECH FINANCE MANUFACTURING F&B TECH FINTECH FINANCE CAMING HVAC WATER, GAS</p>
                            </div>
                            <div style={{ width: "14.8%", display: "inline-flex", alignItems: "center" }}>
                                <ArrowRightOutlined style={{ marginLeft: "40%", fontSize: "30px" }} />
                            </div>
                        </div>
                        <div style={{ textAlign: "center", marginTop: "58px" }}>
                            <button>READ MORE</button>
                            
                        </div>

                    </div>

                    <div style={{ textAlign: "left", backgroundColor: "hsl(223, 11%, 87%)", borderBottom: "10px solid", marginTop: "120px", padding: "94px 60px"}}>
                        <div style={{ width: "50%", display: "inline-flex", verticalAlign: "top", boxSizing: "border-box", padding: "0px 20px" }}>
                            <p style={{ fontWeight: "700", fontSize: "40px", margin: "0px" }}>NOW LETS FIND OUT ABOUT YOU</p>
                        </div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <p style={{ fontWeight: "700", fontSize: "40px", margin: "0px" }}>Lörem ipsum</p>
                            <p style={{ fontWeight: "700", fontSize: "40px", margin: "0px" }}>Lörem ipsum</p>
                            <p style={{ fontWeight: "700", fontSize: "40px", margin: 0, marginBottom: "20px" }}>Lörem ipsum</p>
                            
                            <button style={{ marginTop: 0}}>START SURVEY</button>
                        </div>
                    </div>
                    <ReadyToWork></ReadyToWork>
                    <Footer setMenu = {setSmallMenu} flag={showSmallMenu} setShowContactUs = {setShowContactUs}></Footer>
                </div>

            </div>
        </div>
    )
}
export default Home;