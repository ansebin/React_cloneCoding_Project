import { ReactComponent as Starlogo } from "../svg/starlogo.svg"
import { ReactComponent as Sharelogo} from "../svg/sharelogo.svg"
import { ReactComponent as Heartlogo } from "../svg/heartlogo.svg"
import { ReactComponent as Designlogo } from "../svg/designlogo.svg"
import { ReactComponent as Booklogo } from "../svg/booklogo.svg"
import { ReactComponent as Calander } from "../svg/calander.svg"
import { ReactComponent as Transperatelogo } from "../svg/transperatelogo.svg"
import { ReactComponent as RightArrowlogo } from "../svg/rightarrowlogo.svg"
import { ReactComponent as Bedlogo } from "../svg/bedlogo.svg"
import { ReactComponent as Sopalogo } from "../svg/sopalogo.svg"
import { ReactComponent as Kitchenlogo } from "../svg/kitchenlogo.svg"
import { ReactComponent as WiFilogo } from "../svg/wifilogo.svg"
import {ReactComponent as WorkLogo} from "../svg/worklogo.svg"
import {ReactComponent as CarLogo} from "../svg/carlogo.svg"
import {ReactComponent as PoolLogo} from "../svg/poollogo.svg"
import {ReactComponent as AircondionalLogo} from "../svg/airconditional.svg"
import {ReactComponent as BalconyLogo} from "../svg/balconylogo.svg"
import {ReactComponent as FlowerLogo} from "../svg/flowerlogo.svg"
import {ReactComponent as CoLogo} from "../svg/cologo.svg"
import {ReactComponent as FireLogo} from "../svg/firelogo.svg"
import { ReactComponent as BottomArrowLogo } from "../svg/bottomarrow.svg"
import {React, useState,useEffect} from "react";
import { ReactComponent as FlagLogo } from "../svg/flaglogo.svg"

export default function DetailMain({title,grade,img_path,price}){
   
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () =>{
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
      window.addEventListener('scroll',updateScroll);
    })
   
    return(
        <>
        <div className="detail_main_top">
            <div className="detail_main_top_wrap">
                <div className="detail_main_top_content">
                    <h1>아우라 하우스 2비즈 에코 대나무 하우스, 수영장, 리버뷰</h1>
                </div>
                <div className="detail_main_top_content2">
                    <Starlogo ></Starlogo>
                    <span style={{marginLeft:"5px"}}>{grade}</span>
                    <span style={{marginLeft:"5px"}}>&#183;</span>
                    <a style={{marginLeft:"5px",fontSize:"14px",textDecoration:"underline",marginTop:"2PX",fontWeight:"bold"}}>후기 145개</a>
                    <span style={{marginLeft:"5px"}}>&#46;</span>
                    <span aria-hidden="true" style={{marginLeft:"5px"}}>󰀃</span>
                    <span style={{fontSize:"14px",marginLeft:"7px",marginTop:"2px"}}>슈퍼 호스트</span>
                    <span style={{marginLeft:"10px"}}>&#46;</span>
                    <a style={{marginLeft:"10px",textDecoration:"underline",fontSize:"14px",color:"#222222",marginTop:"2px",fontWeight:"bold"}}>{title}</a>

                    <div className="content2_right">
                        <Sharelogo></Sharelogo>
                        <span style={{borderBottom:"1px solid black",fontWeight:"bold", fontSize:"14px",marginLeft:"5px"}}>공유하기</span>
                    </div>
                    <div className="content2_right2">
                        <Heartlogo></Heartlogo>
                        <span style={{borderBottom:"1px solid black",fontWeight:"bold",marginLeft:"5px",fontSize:"14px"}}>저장</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="detail_main_img">
            
            <div className="detail_main_img_container">
                <div className="grid_item">
                    <img src={img_path} alt="이미지" style={{width:"560px",height:"324px"}}/>
                </div>
                <div className="grid_item">
                    <img src="" alt="이미지" />
                </div>
                <div className="grid_item">
                <img src="" alt="이미지" />
                </div>
                <div className="grid_item">
                    <img src="" alt="이미지" />
                </div>
                <div className="grid_item">
                    <img src="" alt="이미지" />
                </div>
                
            </div>
        </div>


        <div className="detail_main">
            <div className="detail_main_wrap">
                <div className="detail_main_content">
                    <div style={{
                        width:"650px",
                        height:"128px",
                        margin:"0 auto",
                        display:"flex",
                        
                    }}>
                        <div style={{
                            width:"581px",
                            height:"56px",
                            margin:"auto 0"
                        }}>
                            <h2 style={{fontWeight:"bold",fontSize:"22px"}}>Wanyan님이 호스팅하는 저택 전체</h2>
                            <div style={{display:"flex",height:"20px",marginTop:"10px"}}>
                                <span>최대 인원 4명</span>
                                <span style={{marginLeft:"5px"}}>&#183;</span>
                                <span style={{marginLeft:"5px"}}>침실 2개</span>
                                <span style={{marginLeft:"5px"}}>&#183;</span>
                                <span style={{marginLeft:"5px"}}>침대 2개</span>
                                <span style={{marginLeft:"5px"}}>&#183;</span>
                                <span style={{marginLeft:"5px"}}>욕실 2개</span>
                            </div>

                        </div>
                        <div style={{
                            width:"60px",
                            height:"56px",
                            margin:"auto 0"
                        }}>
                            <img src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240" alt="" style={{
                                width:"56px",
                                height:"56px",
                                borderRadius:"70%"
                            }} />
                        </div>
                    </div>
                    <div className="detail_main_content_item">
                        <div style={{width:"650px",height:"150px",margin:"auto 0",display:"flex",flexDirection:"column"}}>
                            <div style={{width:"650px",height:"44px",display:"flex",marginTop:"35px"}}>
                                <div style={{width:"24px",height:"24px"}}>
                                    <Designlogo ></Designlogo>
                                </div>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <div style={{fontWeight:"bold",fontSize:"16px",marginLeft:"10px"}}>디자이너 :</div>
                                    <span style={{fontSize:"14px", marginLeft:"10px",marginTop:"8px"}}>lbuku Bamboo Architecture and Design</span>
                                </div>
                            </div>
                            <div style={{width:"650px",height:"64px",marginTop:"25px",display:"flex"}}>
                                <div style={{width:"24px",height:"24px"}}>
                                    <Booklogo></Booklogo>
                                </div>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <div style={{fontWeight:"bold",fontSize:"16px",marginLeft:"10px"}}>언론 소개 :</div>
                                    <span style={{fontSize:"14px", marginLeft:"10px",marginTop:"8px"}}>Conde Nast Traveler, October 2019 <br></br> 
                                        Home Crux,August 2019
                                    </span>
                                </div>
                            </div>
                            <div style={{width:"650px",height:"32px",marginTop:"25px",display:"flex"}}>
                                <Calander></Calander>
                                <div style={{fontWeight:"bold",fontSize:"16px",marginLeft:"10px", marginTop:"3px"}} >3월 14일 전까지 취소 하실 수 있습니다.</div>
                            </div>
                        </div>
   
                    </div>

                    <div className="detail_main_content_item2">
                            <div className="detail_main_content_item2_wrap">
                                <div style={{height:"46px",width:"650px"}}>
                                    <img src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg" alt="에어커버" style={{width:"97px",height:"26px"}}/>
                                </div>
                                <div style={{width:"650px",height:"40px",fontSize:"16px"}}>
                                모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다
                                </div>
                                <div style={{height:"20px"}}>
                                    <button style={{height:"20px",border:"0",backgroundColor:"transparent",fontSize:"17px",color:"#222222",fontWeight:"bold"}}>더 알아보기</button>
                                </div>
                            </div>
                    </div>
                    <div className="detail_main_content_item3">
                            <Transperatelogo style={{paddingTop:"32px",width:"16px",height:"16px"}}></Transperatelogo>
                            <span style={{fontSize:"16px",paddingTop:"32px",marginLeft:"10px"}}>일부 정보는 자동 번역 되었습니다.</span>
                            <button style={{width:"67.41",height:"18px",fontSize:"16px",border:"0",backgroundColor:"transparent",paddingTop:"28px",fontWeight:"bold"}}>원문보기</button>
                    </div>

                    <div className="detail_main_content_item4">
                        <div className="detail_main_content_item4_wrap">
                            <span style={{fontSize:"16px"}}>
                                아우라 하우스는 일출을 감상하기 위해 동쪽으로 향하는 아융강 서쪽 둑에 지어진 아름답고 독특한 생태 대나무 집입니다. 아우라 하우스는 우붓에서 25분, 캉구에서 35분 거리에 있습니다.
                                <br></br>
                                <br></br>
                                <br></br>
                                예약이 완료된 경우, 에어비앤비 프로필 (프로필 사진 클릭) 을 확인하여 아름다운 대나무 집 10채를 더 찾아보세요. 모두 같은 지역에 있습니다.
                            </span>
                            <div style={{marginTop:"20px",display:"flex"}}>
                                <span style={{fontSize:"16px",fontWeight:"bold",borderBottom:"1px solid black"}}>더보기</span>
                                <RightArrowlogo style={{width:"12px",height:"12px",marginTop:"3px",marginLeft:"3px"}}></RightArrowlogo>
                            </div>
                        </div>
                    </div>

                    <div className="detail_main_content_item5">
                            <div className="detail_main_content_item5_wrap">
                                <div style={{fontSize:"22px",fontWeight:"bold",height:"26px"}}>숙박장소</div>
                                <div style={{width:"650px",height:"128px",display:"flex",marginTop:"20px"}}>
                                    <div style={{width:"210px",border:"1px solid #dcdcdc",display:"flex",flexDirection:"column",borderRadius:"10px"}}>
                                        <div style={{marginTop:"20px",marginLeft:"20px"}}>
                                            <Bedlogo></Bedlogo>
                                        </div>
                                        <div style={{marginTop:"20px",marginLeft:"20px",fontSize:"16px",fontWeight:"bold"}}>침실 1</div>
                                        <div style={{marginTop:"10px",marginLeft:"20px",fontSize:"14px"}}>더블 침대 1개</div>
                                    </div>
                                    <div style={{width:"210px",border:"1px solid #dcdcdc",marginLeft:"10px",borderRadius:"10px",display:"flex",flexDirection:"column"}}>
                                        <div style={{marginTop:"20px",marginLeft:"20px"}}>
                                            <Bedlogo></Bedlogo>
                                        </div>
                                        <div style={{marginTop:"20px",marginLeft:"20px",fontSize:"16px",fontWeight:"bold"}}>침실 2</div>
                                        <div style={{marginTop:"10px",marginLeft:"20px",fontSize:"14px"}}>더블 침대 1개</div>
                                    </div>
                                    <div style={{width:"210px",border:"1px solid #dcdcdc",marginLeft:"10px",borderRadius:"10px",display:"flex",flexDirection:"column"}}>
                                        <div style={{marginTop:"20px",marginLeft:"20px"}}>
                                            <Sopalogo></Sopalogo>
                                        </div>
                                        <div style={{marginTop:"20px",marginLeft:"20px",fontSize:"16px",fontWeight:"bold"}}>공용 공간</div>
                                        <div style={{marginTop:"10px",marginLeft:"20px",fontSize:"14px"}}>소파 1개</div>
                                    </div>
                                </div>
                            </div>

                            <div className="detail_main_content_item6">
                                <div className="detail_main_content_item6_wrap">
                                    <div style={{hegiht:"50px",fontSize:"22px",fontWeight:"bold",marginTop:"40px"}}>숙소 편의시설</div>
                                    <div style={{width:"650px",height:"220px",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                                        <div style={{width:"650px",height:"40px",display:"flex"}}>
                                            <div style={{width:"344px",height:"40px",display:"flex"}}>
                                                <Kitchenlogo></Kitchenlogo>
                                                <span style={{marginLeft:"15px",fontSize:"16px",marginTop:"5px",color:"#222222"}}>주방</span>
                                            </div>
                                            <div style={{width:"344px",height:"40px",display:"flex"}}>
                                                <WiFilogo></WiFilogo>
                                                <span style={{marginLeft:"15px",fontSize:"16px",marginTop:"5px",color:"#222222"}}>무선 인터넷</span>
                                            </div>
                                        </div>
                                        <div style={{width:"650px",height:"40px",display:"flex"}}>
                                            <div style={{width:"344px",height:"40px",display:"flex"}}>
                                                <WorkLogo></WorkLogo>
                                                <span style={{marginLeft:"15px",fontSize:"16px",marginTop:"5px",color:"#222222"}}>업무 전용 공간</span>
                                            </div>
                                            <div style={{width:"344px",height:"40px",display:"flex"}}>
                                                <CarLogo></CarLogo>
                                                <span style={{marginLeft:"15px",fontSize:"16px",marginTop:"5px",color:"#222222"}}>건물 내 무료 주차</span>
                                            </div>
                                        </div>
                                        <div style={{width:"650px",height:"40px",display:"flex"}}>
                                            <div style={{width:"344px",height:"40px",display:"flex"}}>
                                                <PoolLogo></PoolLogo>
                                                <span style={{marginLeft:"15px",fontSize:"16px",marginTop:"5px",color:"#222222"}}>전용 수영장</span>
                                            </div>
                                            <div style={{width:"344px",height:"40px",display:"flex"}}>
                                                <AircondionalLogo></AircondionalLogo>
                                                <span style={{marginLeft:"15px",fontSize:"16px",marginTop:"5px",color:"#222222"}}>에어컨</span>
                                            </div>
                                        </div>
                                        <div style={{width:"650px",height:"40px",display:"flex"}}>
                                            <div style={{width:"344px",height:"40px",display:"flex"}}>
                                                <BalconyLogo></BalconyLogo>
                                                <span style={{marginLeft:"15px",fontSize:"16px",marginTop:"5px",color:"#222222"}}>전용 파티오 또는 발코니</span>
                                            </div>
                                            <div style={{width:"344px",height:"40px",display:"flex"}}>
                                                <FlowerLogo></FlowerLogo>
                                                <span style={{marginLeft:"15px",fontSize:"16px",marginTop:"5px",color:"#222222"}}>뒷마당</span>
                                            </div>
                                        </div>
                                        <div style={{width:"650px",height:"40px",display:"flex"}}>
                                            <div style={{width:"344px",height:"40px",display:"flex"}}>
                                                <CoLogo></CoLogo>
                                                <span style={{marginLeft:"15px",fontSize:"16px",marginTop:"5px",color:"#222222"}}>일산화탄소 경보기</span>
                                            </div>
                                            <div style={{width:"344px",height:"40px",display:"flex"}}>
                                                <FireLogo></FireLogo>
                                                <span style={{marginLeft:"15px",fontSize:"16px",marginTop:"5px",color:"#222222"}}>화재경보기</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button  style={{width:"221px",height:"48px",border:"1px solid black",borderRadius:"10px",fontSize:"16px",color:"#222222",backgroundColor:"transparent",textalign:"center",fontWeight:"bold"}}>편의 시설 20개 모두 보기</button>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="detail_main_calender">
                        <div className="detail_main_calender_wrap">
                            달력 만들곳
                        </div>
                    </div>

                    
                </div>
                    <div className="detail_main_content2">
                        <div className={scrollPosition < 2300 ? "detail_main_fixed" :"detail_main_fixed_chainge"}>
                            <div className="detail_fixed_item1">
                                <div style={{display:"flex"}}>
                                    <span style={{fontSize:"22px",fontWeight:"bold"}}>&#8361;{price}</span>
                                    <span style={{fontSize:"16px",color:"#222222",marginTop:"5px",marginLeft:"3px"}}>/박</span>
                                    <div style={{marginLeft:"60px",width:"130px",hegiht:"18px",display:"flex"}}>
                                        <Starlogo ></Starlogo>
                                        <span style={{marginLeft:"5px"}}>{grade}</span>
                                        <span style={{marginLeft:"5px"}}>&#183;</span>
                                        <a style={{marginLeft:"3px",fontSize:"14px",textDecoration:"underline",marginTop:"2PX",color:"#717171"}}>후기 145개</a>
                                    </div>
                                </div>
                                <div style={{width:"320px",height:"112px",marginTop:"25px",border:"1px solid #dcdcdc",borderRadius:"10px",display:"flex",flexDirection:"column"}}>
                                    <div style={{width:"320px",height:"56px",display:"flex"}}>
                                        <div style={{width:"160px",borderBottom:"1px solid #dcdcdc",borderRight:"1px solid #dcdcdc",display:"flex",flexDirection:"column"}}>
                                            <span style={{fontSize:"14px",color:"#000000",marginLeft:"10PX",marginTop:"10px"}}>체크인</span>
                                            <span style={{fontSize:"14px",color:"#000000",marginLeft:"10px",marginTop:"5px"}}>2023. 4. 18</span>
                                        </div>
                                        <div style={{width:"160px",borderBottom:"1px solid #dcdcdc",display:"flex",flexDirection:"column"}}>
                                        <span style={{fontSize:"14px",color:"#000000",marginLeft:"10PX",marginTop:"10px"}}>체크아웃</span>
                                            <span style={{fontSize:"14px",color:"#000000",marginLeft:"10px",marginTop:"5px"}}>2023. 4. 23</span>
                                        </div>
                                    </div>
                                    <div style={{width:"320px",height:"56px",borderTop:"1px solid #dcdcdc",display:"flex"}}>
                                        <div style={{width:"274px",height:"36px",display:"flex",flexDirection:"column"}}>
                                            <span style={{fontSize:"14px",color:"#000000",marginLeft:"10px",marginTop:"10px"}}>인원</span>
                                            <span style={{fontSize:"14px",color:"#222222",marginLeft:"10px",marginTop:"5px"}}>게스트 1명</span>
                                        </div>
                                        <div style={{marginTop:"20px",marginLeft:"10px"}}>
                                        <BottomArrowLogo></BottomArrowLogo>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button style={{width:"320px",height:"48px",backgroundColor:"#e61e4e",border:"0",borderRadius:"10px",marginTop:"15px",color:"white",fontSize:"16px",fontWeight:"bold"}}>예약하기</button>
                                </div>
                            </div>
                            <div className="detail_fixed_item2">
                                <div className="detail_fixed_item2_st">예약 확정 전에는 요금이 청구되지 않습니다.</div>
                                <div className="detail_fixed_item2_ed">
                                    <div style={{width:"109px",height:"20px",fontSize:"16px",color:"#222222",marginTop:"25px"}}>&#8361;{price}x5박</div>
                                    <div style={{width:"87px",height:"20px",marginLeft:"120px",fontSize:"16px",color:"#222222",marginTop:"25px"}}>&#8361;2,365,560</div>
                                </div>
                                <div className="detail_fixed_item2_ed">
                                <div style={{width:"109px",height:"20px",fontSize:"16px",color:"#222222",marginTop:"30px"}}>서비스 수수료</div>
                                    <div style={{width:"87px",height:"20px",marginLeft:"120px",fontSize:"16px",color:"#222222",marginTop:"30px"}}>&#8361;0</div>
                                </div>
                                <div className="detial_fixed_item2_th">
                                    <div style={{width:"51px",height:"20px",fontSize:"16px",fontWeight:"bold",color:"#222222",marginTop:"20px"}}>총합계</div>
                                    <div style={{width:"88px",height:"20px",fontSize:"16px",fontWeight:"bold",color:"#222222",marginTop:"20px",marginLeft:"180px"}}>&#8361;2,365,560</div>
                                </div>
                            </div>
                        </div>
                        <div className={scrollPosition < 2400 ? "detail_main_fixed2" : "detail_main_fixed2_chainge"}>
                            <FlagLogo style={{color:"#717171",width:"14px",height:"14px"}}></FlagLogo>
                            <div style={{
                                color:"#717171",
                                fontSize:"14px",
                                marginLeft:"15px",
                                fontWeight:"bold"
                            }}>숙소 신고하기</div>
                        </div>
                    </div>
            </div>
        </div>
      
        </>
    )
}