import { ReactComponent as Btnlogo } from '../svg/btnlogo.svg';
import {ReactComponent as Airbnblogo} from '../svg/airbnblogo.svg';
import { ReactComponent as Earthlogo } from '../svg/earth.svg';
import { ReactComponent as Linelogo } from '../svg/line.svg';
import { ReactComponent as Humanlogo } from '../svg/humanlogo.svg';
import { useNavigate} from "react-router-dom"
import {React, useState,useEffect} from "react";

export default function DetailHeader(){
    
    const navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () =>{
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
      window.addEventListener('scroll',updateScroll);
    })

    const BackHome =() =>{
        navigate("/")
    }
    return(
        <>
            <div className="detailheader">
            <div className={scrollPosition < 300 ? "header_fixed" :"header_fixed_chainge"}>
            <div className='header_fixed_wrap'>
                <div className='header_fixed_wrap_item'>
                    <div style={{width:"30px",height:"80px",fontSize:"14px",color:"#222222",fontWeight:"bold",marginTop:"30px"}}>사진</div>
                    <div style={{width:"60px",height:"80px",fontSize:"14px",color:"#222222",fontWeight:"bold",marginTop:"30px",marginLeft:"15px"}}>편의시설</div>
                    <div style={{width:"30px",height:"80px",fontSize:"14px",color:"#222222",fontWeight:"bold",marginTop:"30px",marginLeft:"15px"}}>후기</div>
                    <div style={{width:"30px",height:"80px",fontSize:"14px",color:"#222222",fontWeight:"bold",marginTop:"30px",marginLeft:"15px"}}>위치</div>
                </div>
                <div className='header_fixed_wrap_item2'></div>
            </div>
        </div>
            <div className="header_wrap">
                <div className="header_content">
                    <div className="content_logo" onClick={BackHome}>
                        <Airbnblogo className='top_left'></Airbnblogo>
                    </div>
                </div>
                <div className="header_content">
                    <div className='header_btn_div'>
                        <button className='header_btn'>
                                <div className='header_btn_content'>
                                    검색시작하기
                                </div>
                                <div className='header_btn_logo'>
                                <Btnlogo></Btnlogo>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="header_content">
                    <div className='header_top_right1'>
                        <div className='header_top_right_wrap'>
                            <a className='header_right_btn'>
                                <div className='header_hover'>
                                    호스트되기
                                </div>
                            </a>
                            <button className='header_right_btn2'>
                                <Earthlogo></Earthlogo>
                            </button>      
                        </div>
                    </div>
                    <div className='header_top_right2'>
                        <div className='header_top_right2_wrap'>
                            <button className='header_top_right2_btn'>
                                <Linelogo className='top_svg'></Linelogo>
                                <Humanlogo className='top_svg2'></Humanlogo>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
    )
}