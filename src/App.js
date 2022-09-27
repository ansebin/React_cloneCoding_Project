
import Top from "./component/top";
import TOPNav from "./component/topnav";
import Footer from "./component/footer";
import {topitem} from './topitemdummy';
import { mainItem } from "./maindummy";
import { ReactComponent as FillterLogo } from '../src/svg/fillterlogo.svg'
import Main from "./component/main";
import {React, useState,useEffect} from "react";
import Slider from "react-slick";
import { ReactComponent as LeftArrowLogo } from "../src/svg/LeftArrowLogo.svg";
import {ReactComponent as TopNavLogo} from '../src/svg/TopNavLogo.svg'

function App() {


  
  
  const [maintitle, setMainTitle] = useState("기상천외한 숙소");

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () =>{
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }

  useEffect(()=>{
      window.addEventListener('scroll',updateScroll);
  })

  
  const NextArrow = (props) =>{
    const {className,style,onClick} = props
    return(
        <div
          className={className}
          style={{...style,display:"flex",justifyContent:"center", border:"1px solid #dcdcdc",borderRadius:"70%",width:"28px",height:"28px",display:"flex",background:"#ffffff",marginRight:"5px",marginTop:"3px"}}
          onClick={onClick}
        >
          <div className="slider_logo">
            <TopNavLogo></TopNavLogo>
          </div>
        </div>
    )
}
const BackArrow = (props) =>{
  const {className,style,onClick} = props
  return(
    <div
      className={className}
      style={{...style,display:"flex",justifyContent:"center", border:"1px solid #dcdcdc",borderRadius:"70%",width:"28px",height:"28px",background:"#ffffff",marginRight:"5px",marginTop:"3px"}}
      onClick={onClick}
    >
          <div className="slider_logo2">
            <LeftArrowLogo ></LeftArrowLogo>
          </div>
    </div>
  )
}



  const setting ={
    className:"slider variable-width",
    dots : false,
    infinite:true,
    speed : 500,
    arrows:true,
    slidesToShow : 11,
    slidesToScroll : 11,
    variableWidth:true,
    nextArrow:<NextArrow></NextArrow>
};

  return (
    <> 
      <Top/>
      <div className={scrollPosition < 100 ? "main_top":"main_top_chainge"}>
        <div  className={scrollPosition < 100 ?"main_top_wrap":"main_top_wrap_chainge"}>
          <Slider {...setting} className= "slider">
              {
                topitem.result.map((topitem) => {
                  return(
                    <TOPNav
                      setMainTitle = {setMainTitle}
                      title = {topitem.title}
                      img_path = {topitem.img_path}
                    />
                  )
                })
              }
               
          </Slider>
            <button className={scrollPosition < 100 ?"top_nav_btn":"top_nav_btn_chainge"}>
              <FillterLogo className="top_nav_btn_logo"></FillterLogo>
              <span className={scrollPosition < 100 ? "top_nav_span":"top_nav_span_chiange"}>필터</span>
            </button>
        </div>

      </div>
      
      <div className="main">
        <div className="main_wrap">
        {
          mainItem.results.map((mainitem) => {
            return(
              <Main
                category={mainitem.category}
                img_path={mainitem.img_path}
                img_path2 ={mainitem.img_path2}
                title ={mainitem.title}
                grade = {mainitem.grade}
                location = {mainitem.location}
                date = {mainitem.date}
                price ={mainitem.price}
                maintitle={maintitle}
              />
            )
          })
        }
          </div>
        </div>
        <Footer>
        </Footer>
       
      </>

  );
  
}

export default App;
