

import { useNavigate} from "react-router-dom"
import Slider from "react-slick";
import { ReactComponent as Starlogo } from "../svg/starlogo.svg"
import {ReactComponent as TopNavLogo} from '../svg/TopNavLogo.svg'



export default function Main(props){
        const navigate = useNavigate();
        const MainItemClick = () => {
            navigate(`./maindetail/${props.title}`,{
                state : props
            });     
        }
        const NextArrow = (props) =>{
            const {className,style,onClick} = props
            return(
                <div
                  className={className}
                  style={{...style,display:"flex",justifyContent:"center",width:"28px",height:"28px",background:"#ffffff",marginRight:"5px",marginTop:"3px"}}
                  onClick={onClick}
                >
                    <div style={{marginRight:"50px",background:"#ffffff",borderRadius:"70%",width:"28px",height:"28px",border:"1px solid #dcdcdc",color:"black"}}>
                        <TopNavLogo></TopNavLogo>
                    </div>
                </div>
            )
        }
        const setting ={
            dots : true,
            infinite:true,
            speed : 500,
            arrows:true,
            slidesToShow : 1,
            slidesToScroll : 1,
            nextArrow:<NextArrow></NextArrow>,
         
        };
            
        
        if(props.category === props.maintitle){
            return(
                <>
                     <div className="main_item" >
                        <Slider {...setting} dotsClass="test-css">
                            <img src={props.img_path} onClick={MainItemClick}></img>
                            <img src={props.img_path} alt=""></img>
                            <img src={props.img_path} alt=""></img>
                            <img src={props.img_path} alt=""></img>
                            <img src={props.img_path} alt=""></img>
                        </Slider>
                        <div className="main_info" onClick={MainItemClick}>
                        <span>{props.title}</span>
                        <p className="main_grade">{props.grade}</p>
                        <div className="main_logo"><Starlogo></Starlogo></div>
                        <p className="main_location">{props.location}</p>
                        <p className="main_date">{props.date}</p>
                        <p className="main_price">&#8361;{props.price} /박</p>
                        </div>    
                    </div>
                </>
            )
        }
     
       

       
    
    
    
    
                   
        
    
}