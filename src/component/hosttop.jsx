import { ReactComponent as AirBnbLogoWhite } from "../svg/airbnblogowhite.svg";
import {React, useState,useEffect} from "react";

export default function HostTop(){
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () =>{
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
  
    useEffect(()=>{
        window.addEventListener('scroll',updateScroll);
    })
    return(
        <>
        <div className="host_top_left">
            <AirBnbLogoWhite className="host_top_logo"></AirBnbLogoWhite>
            <div className="host_top_item">
                <div style={{color:"white", fontWeight:"bold",display:"flex",justifyContent:"center",fontSize:"60px",marginTop:"35px"}}>
                    호스팅을 
                </div>
                <div style={{color: 'white', fontWeight:"bold",display:"flex",justifyContent:"center",fontSize:"60px"}}>
                    시작해보세요
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"70px"}}>
                    <button style={{width:"160px",height:"50px",color:"white",backgroundColor:"#dc0f62",fontWeight:"bold",fontSize:"15px",borderRadius:"10px"}}>
                        호스팅 시작하기
                    </button>
                </div>
            </div>
        </div>
        <div className="host_top_right">
            <video style={{width:"795px",height:"450px",backgroundColor:"black"}} loop controls>
                <source src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4" type="video/mp4"></source>
            </video>
        </div>
        
        
        <div className={scrollPosition < 450 ? "host_header":"host_header_chainge"}>
            <AirBnbLogoWhite style={{color:"black",width:"36px",height:"36px",marginTop:"17px",marginLeft:"35px"}}></AirBnbLogoWhite>
            <div style={{
                width:"270px",
                height:"40px",
                border:"2px solid #dcdcdc",
                borderRadius:"2em",
                position:"absolute",
                top:"0",
                right:"0",
                marginTop:"10px",
                marginRight:"250px"

                }}>
                <a className="host_header_btn">
                    <img src="https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg" alt="" style={{width:"30px",height:"30px",borderRadius:"70%",marginLeft:"5px",marginTop:"5px",display:"inline-block"}}/>
                    <img src="https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg" alt="" style={{width:"30px",height:"30px",borderRadius:"70%",display:"inline-block"}} />
                    <img src="https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg" alt="" style={{width:"30px",height:"30px",borderRadius:"70%",marginRight:"5px",display:"inline-block"}}/>
                    <span style={{fontSize:"14px",fontWeight:"bold",position:"absolute",marginTop:"15px"}}>슈퍼호스트에게 물어보기</span>
                </a>
            </div>
            <button style={{
                width:"160px",
                height:"50px",
                color:"white",
                backgroundColor:"#dc0f62",
                fontWeight:"bold",
                fontSize:"15px",
                borderRadius:"10px", 
                border:"0",
                position:"absolute",
                top:"0",
                right:"0",
                marginTop:"10px",
                marginRight:"40px"
                }}>호스팅 시작하기</button>
        </div>
        
        </>
    )
}