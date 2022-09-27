import {ReactComponent as Airbnblogo} from '../svg/airbnblogo.svg';
import { ReactComponent as Btnlogo } from '../svg/btnlogo.svg';
import { ReactComponent as Earthlogo } from '../svg/earth.svg';
import { ReactComponent as Linelogo } from '../svg/line.svg';
import { ReactComponent as Humanlogo } from '../svg/humanlogo.svg';
import { useNavigate} from "react-router-dom"
import styled from 'styled-components';
import { useState } from 'react';
import ActiveTop from './ActiveTop';
import { useRef } from 'react';
export default function Top(){
    const navigate = useNavigate();

    const [isClicked,setIsCliked] = useState(false);
    const ChangeHeight = useRef(null)
    const Toggle = () =>{
        ChangeHeight.current.style.height = 80+"px";
        setIsCliked(!isClicked)
    }

    
   
    return(
        <>
        <Navigation style={{height: isClicked ? 160 : 80}} ref={ChangeHeight}>
            <div className="top_wrap">
                <div className="top_content">
                    <div className="content_logo">
                        <Airbnblogo className='top_left'></Airbnblogo>
                    </div>
                </div>
                {isClicked ? (
                    <ActiveTop></ActiveTop>
                ) : (
                
                    <div className="top_content">
                        <div className='content_center' onClick={()=> setIsCliked(!isClicked)}>
                        <button className='top_center_btn'>
                            <div className='btn_css'>
                                <div className='btn_text'type="button"  >어디든지</div>
                            </div>
                        </button>
                        <button className='top_center_btn2'>
                            <div className='btn_css2'>
                                <div className='btn_text2'>언제든지 일주일</div>
                            </div>
                        </button>
                        <button className='top_center_btn3'>
                            <div className='btn_txt2'>게스트 추가</div>
                            <div className='btn_logo'>
                                <Btnlogo></Btnlogo>
                            </div>
                        </button>
                    </div>
                </div>
                
                )}
                
                <div className="top_content">
                    <div className='top_right1'>
                        <div className='top_right_content1'>
                            <div className='top_right1_div' onClick={()=>navigate("./Host")}>호스트 되기</div>
                            <button>
                                <Earthlogo></Earthlogo>
                            </button>
                        </div>    
                    </div>
                    <div className='top_right2'>
                        <div className='top_right_content2'>
                            <button>
                                <Linelogo className='top_svg'></Linelogo>
                                <Humanlogo className='top_svg2'></Humanlogo>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Navigation>
        <div className='DarkBackground' style={{display : isClicked ? "block" : "none"}} onClick={()=>{Toggle();}} >

        </div>
        </>
    );
}

const Navigation = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    border-bottom: 1px solid #dcdcdc;
    z-index : 99;
`;
