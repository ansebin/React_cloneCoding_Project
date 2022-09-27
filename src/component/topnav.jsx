import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



import {React, useState,useEffect,useRef} from "react";
import styled from "styled-components";

export default function TOPNav({img_path,title,setMainTitle}){
    const [change,setChange] = useState(false)
    const ChangeSpan = useRef(null);
    const SpanToggle = () =>{
        setChange(!change)
    }
    useEffect(()=>{
        ChangeSpan.current.style.borderBOttom = "2px solid black"
    },[change])

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () =>{
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
  
    useEffect(()=>{
        window.addEventListener('scroll',updateScroll);
    })


    function handleClick(e){
       setMainTitle(title)
    }



    return(
        <> 
            <div className={scrollPosition < 100 ? "top_item":"top_item_chainge"} style={{width:"95px"}} onClick={handleClick}>                   
                <button className="top_item_button" onClick={()=> {SpanToggle();}}>
                    <img src={img_path} alt=""  className="top_item_img"/>  
                </button>
               
                <span className = "top_item_span" ref={ChangeSpan}>
                    {title}
                </span> 

                  
            </div> 
        </>             
    )
};

