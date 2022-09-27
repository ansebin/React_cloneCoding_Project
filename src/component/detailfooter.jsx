import { ReactComponent as StarLogo } from "../svg/starlogo.svg"
import { ReactComponent as RightArrowLogo } from "../svg/rightarrowlogo.svg"
import { ReactComponent as ProtectLogo } from "../svg/ProtectLogo.svg"
import { ReactComponent as ShieldLogo } from "../svg/ShieldLogo.svg"
import { ReactComponent as ClockLogo } from "../svg/ClockLogo.svg"
import { ReactComponent as CigaretLogo } from "../svg/CigaretLogo.svg"
import { ReactComponent as DogLogo } from "../svg/DogLogo.svg"
import { ReactComponent as PartyLogo } from "../svg/PartyLogo.svg"
import { ReactComponent as SmallRightArrowLogo } from "../svg/SmallRightArrowLogo.svg"
import AirbnbStar from "../img/AirbnbStar.png"
import AirbnbLogo from "../img/airbnblogo.png"
import AirbnbQuetionLogo from "../img/AirbnbQuetion.png"
import { ReactComponent as Earthlogo } from '../svg/earth.svg'
import { ReactComponent as FacebookLogo } from '../svg/FacebookLogo.svg'
import { ReactComponent as TwiterLogo } from '../svg/TwiterLogo.svg'
import { ReactComponent as InstagramLogo } from '../svg/InstagramLogo.svg'
import { ReactComponent as LineLogo } from '../svg/LineLogo.svg'
import { ReactComponent as PencilLogo } from '../svg/PencilLogo.svg'






export default function DetailFooter({grade,title}){
    
    return(
      <>
        <div className="detail_footer">
            <div style={{
                width:"1120px",
                height:"26px",
                marginTop:"48px",
                display:"flex"
            }}>
                <StarLogo style={{width:"16px",height:"16px"}}></StarLogo>
                <span>
                    <div>{grade}</div>
                    <div style={{marginLeft:"5px"}}>&#183;</div>
                    <div>후기 147개</div>
                </span>
            </div>
            <div style={{width:"1120px",height:"730px",diplay:"flex",flexDirection:"column",marginTop:"34px"}}>
                <div style={{width:"1136px", height:"108px",display:"flex",flexDirection:"column"}}>
                    <div className="footer_flex_item">
                        <div className="footer_flex_item2">
                            <div className="footer_flex_item3">청결도</div>
                            <div className="footer_flex_item4">
                                <span>
                                    <div style={{width:"110px",height:"4px",backgroundColor:"black",borderRadius:"5px"}}></div>
                                </span>
                                <div style={{fontSize:"12px",color:"#222222",marginLeft:"5px"}}>4.8</div>
                            </div>
                        </div>
                        <div className="footer_flex_item2" style={{marginLeft:"100px"}}>
                        <div className="footer_flex_item3">정확성</div>
                            <div className="footer_flex_item4">
                                <span>
                                    <div style={{width:"113px",height:"4px",backgroundColor:"black",borderRadius:"5px"}}></div>
                                </span>
                                <div style={{fontSize:"12px",color:"#222222",marginLeft:"5px"}}>4.9</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_flex_item">
                        <div className="footer_flex_item2">
                            <div className="footer_flex_item3">의사소통</div>
                            <div className="footer_flex_item4">
                                <span>
                                    <div style={{width:"110px",height:"4px",backgroundColor:"black",borderRadius:"5px"}}></div>
                                </span>
                                <div style={{fontSize:"12px",color:"#222222",marginLeft:"5px"}}>4.8</div>
                            </div>
                        </div>
                        <div className="footer_flex_item2" style={{marginLeft:"100px"}}>
                        <div className="footer_flex_item3">위치</div>
                            <div className="footer_flex_item4">
                                <span>
                                    <div style={{width:"113px",height:"4px",backgroundColor:"black",borderRadius:"5px"}}></div>
                                </span>
                                <div style={{fontSize:"12px",color:"#222222",marginLeft:"5px"}}>4.9</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_flex_item">
                        <div className="footer_flex_item2">
                            <div className="footer_flex_item3">체크인</div>
                            <div className="footer_flex_item4">
                                <span>
                                    <div style={{width:"110px",height:"4px",backgroundColor:"black",borderRadius:"5px"}}></div>
                                </span>
                                <div style={{fontSize:"12px",color:"#222222",marginLeft:"5px"}}>4.8</div>
                            </div>
                        </div>
                        <div className="footer_flex_item2" style={{marginLeft:"100px"}}>
                        <div className="footer_flex_item3">가격 대비 만족도</div>
                            <div className="footer_flex_item4">
                                <span>
                                    <div style={{width:"113px",height:"4px",backgroundColor:"black",borderRadius:"5px"}}></div>
                                </span>
                                <div style={{fontSize:"12px",color:"#222222",marginLeft:"5px"}}>4.9</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:"1136px", height:"588px",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                    <div className="footer_flex_item5">
                        <div className="footer_flex_item6">
                            <div style={{width:"447px",height:"40px",display:"flex"}}>
                                <div>
                                    <img src="https://a0.muscache.com/im/pictures/user/7b7f0639-142a-4189-af4a-47b30d482e20.jpg?im_w=240" alt="" className="footer_flex_item6_img"/>
                                </div>
                                <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                                    <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold"}}>주은</div>
                                    <div style={{marginTop:"5px",color:"#717171",fontSize:"14px"}}>2022년 8월</div>
                                </div>
                            </div>
                            <div style={{width:"460px",height:"48px",marginTop:"20px"}}>                       
                                    열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다
                                    직원들의 친절한 응대가 좋았습니다                       
                            </div>
                        </div>
                        <div className="footer_flex_item6" style={{marginLeft:"100px"}}>
                            <div style={{width:"447px",height:"40px",display:"flex"}}>
                                <div>
                                    <img src="https://a0.muscache.com/im/pictures/user/92d53241-61f2-47ce-a18d-2a6efa58ae8a.jpg?im_w=240" alt="" className="footer_flex_item6_img"/>
                                </div>
                                <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                                    <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold"}}>Jay</div>
                                    <div style={{marginTop:"5px",color:"#717171",fontSize:"14px"}}>2020년 10월</div>
                                </div>
                            </div>
                            <div style={{width:"460px",height:"48px",marginTop:"20px"}}>                       
                                Aura House는 기대 이상의 공간이었습니다. 말그대로 정글속의 대나무집이었습니다. 호스트인 Wayan님을 비롯하여, Febri님 그리고 나머지 스텝분들, 막바지 예약임에도 불구하고 신속하고                     
                            </div>
                        </div>
                    </div>
                    <div className="footer_flex_item5">
                        <div className="footer_flex_item6">
                            <div style={{width:"447px",height:"40px",display:"flex"}}>
                                <div>
                                    <img src="https://a0.muscache.com/im/pictures/user/5769e47f-baa4-4090-b95e-2587df42caec.jpg?im_w=240" alt="" className="footer_flex_item6_img"/>
                                </div>
                                <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                                    <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold"}}>Paulina</div>
                                    <div style={{marginTop:"5px",color:"#717171",fontSize:"14px"}}>2022년 9월</div>
                                </div>
                            </div>
                            <div style={{width:"460px",height:"48px",marginTop:"20px"}}>                       
                                대나무 집에서 완전히 편안함을 느꼈으며, 매우 잘 휴식을 취하고 함께 시간을 즐길 수 있었습니다. 직원들은 여러분에게 중요한 모든 소원을 들어주려고 노력합니다. 숙소는 매우 깨끗하고
                            </div>
                        </div>
                        <div className="footer_flex_item6" style={{marginLeft:"100px"}}>
                            <div style={{width:"447px",height:"40px",display:"flex"}}>
                                <div>
                                    <img src="https://a0.muscache.com/im/pictures/user/7cb9b5e9-6f9c-4d93-aa9f-0bc0881b3301.jpg?im_w=240" alt="" className="footer_flex_item6_img"/>
                                </div>
                                <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                                    <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold"}}>Garrow</div>
                                    <div style={{marginTop:"5px",color:"#717171",fontSize:"14px"}}>2020년 9월</div>
                                </div>
                            </div>
                            <div style={{width:"460px",height:"48px",marginTop:"20px"}}>                       
                                놀라울 정도로 아름다운 환경과 집. 직원들은 친절하고 커뮤니케이션이 훌륭합니다.
                            </div>
                        </div>
                    </div>
                    <div className="footer_flex_item5">
                        <div className="footer_flex_item6">
                            <div style={{width:"447px",height:"40px",display:"flex"}}>
                                <div>
                                    <img src="https://a0.muscache.com/im/pictures/user/319d2c02-58b3-418b-8f10-e2966ae0d1f7.jpg?im_w=240" alt="" className="footer_flex_item6_img"/>
                                </div>
                                <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                                    <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold"}}>Samuel</div>
                                    <div style={{marginTop:"5px",color:"#717171",fontSize:"14px"}}>2022년 9월</div>
                                </div>
                            </div>
                            <div style={{width:"460px",height:"48px",marginTop:"20px"}}>                       
                                집은 놀라웠습니다. 사진보다 훨씬 좋아 보였습니다. 이곳은 즉시 지어진 곳이며 평화로움을 느낄 수 있습니다. 녹지 마을도 걸어다니기 매우 즐거웠습니다. 사람들은 매우 따뜻합니다. 적극                    
                            </div>
                        </div>
                        <div className="footer_flex_item6" style={{marginLeft:"100px"}}>
                            <div style={{width:"447px",height:"40px",display:"flex"}}>
                                <div>
                                    <img src="https://a0.muscache.com/im/pictures/user/a59a7111-6c2a-4066-9fc4-93240069775e.jpg?im_w=240" alt="" className="footer_flex_item6_img"/>
                                </div>
                                <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                                    <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold"}}>Sanna</div>
                                    <div style={{marginTop:"5px",color:"#717171",fontSize:"14px"}}>2020년 8월</div>
                                </div>
                            </div>
                            <div style={{width:"460px",height:"48px",marginTop:"20px"}}>                       
                            건축적 관점에서 이 집은 매우 인상적이었습니다. 아우라 하우스에 머무는 것은 좋은 경험이었습니다. 직원과의 커뮤니케이션이 원활했습니다. 이웃 집은 불과 10미터 거리에
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_flex_item7">
                    <button>후기 147개 모두 보기</button>
                </div>
            </div>
        </div>
        <div className="detail_footer2">
            <div className="detail_footer2_wrap">
                <div style={{
                    width:"1120px",
                    height:"26px",
                    color:"#222222",
                    fontSize:"22px",
                    fontWeight:"bold"
                }}>
                    호스팅 지역
                </div>
                <div style={{
                    width:"1120px",
                    height:"480px",
                    border:"1px solid black",
                    marginTop:"24px"
                }}>
                    구글 지도
                </div>
                <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold",marginTop:"30px"}}>{title}</div>
                <div style={{marginTop:"20px"}}>
                    근처에서 다음과 같은 관광지와 공공 시설을 즐길 수 있습니다.
                    <br></br>
                    <br></br>
                    - 그린 스쿨 - 차로 5분 거리
                </div>
                <div style={{display:"flex",marginTop:"20px"}}>
                    <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold",borderBottom:"1px solid black"}}>더보기</div>
                    <RightArrowLogo className="logo"></RightArrowLogo>
                </div>
            </div>
        </div>

        <div className="detail_footer3">
            <div className="detail_footer3_wrap">
                <div style={{width:"1120px",height:"64px",display:"flex"}}>
                    <img src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240" alt="" style={{width:"64px",height:"64px",borderRadius:"70%"}}/>
                    <div style={{width:"168px",height:"64px",display:"flex",flexDirection:"column",marginLeft:"18px",marginTop:"10px"}}>
                        <div style={{color:"#222222",fontWeight:"bold",fontSize:"22px"}}>호스트:Wayan님</div>
                        <div style={{fontSize:"14px",color:"#717171",marginTop:"10px"}}>회원 가입일:2019년 2월 </div>
                    </div>
                </div>
                <div style={{width:"448px",height:"32px",display:"flex",marginTop:"20px"}}>
                    <StarLogo style={{width:"16px",height:"16px"}}></StarLogo>
                    <span className="detail_footer3_span">후기 450개</span>
                    <ProtectLogo className="detail_footer_logo"></ProtectLogo>
                    <span className="detail_footer3_span">본인 인증 완료</span>
        
                    <img src={AirbnbLogo} style={{width:"22px",height:"22px",marginLeft:"26px"}}></img>
                    <span className="detail_footer3_span">슈퍼 호스트</span>
                </div>
                <div style={{width:"457px",height:"20px",fontWeight:"bold",fontSize:"16px",color:"#222222",marginTop:"20px"}}>Wayan님은 슈퍼 호스트입니다.</div>
                <div style={{width:"456px",height:"46px",fontSize:"16px",color:"#222222",marginTop:"10px"}}>
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
                </div>
                <div style={{width:"457px",height:"20px",fontSize:"16px",color:"#222222",marginTop:"20px"}}>응답률 : 99%</div>
                <div style={{width:"457px",height:"20px",fontSize:"16px",color:"#222222",marginTop:"18px"}}>응답시간: 1시간 이내</div>
                <div style={{width:"457px",height:"48px",marginTop:"32px"}}>
                    <button className="detail_footer3_btn">
                        호스트에게 연락하기
                    </button>
                </div>
                <div style={{width:"300px",height:"32px",display:"flex",marginTop:"20px"}}>
                    <div style={{width:"24px",height:"24px"}}>
                        <ShieldLogo></ShieldLogo>
                    </div>
                    <div style={{fontSize:"12px",color:"#222222",marginLeft:"10px"}}>안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.</div>
                </div>
            </div>
        </div>

        <div className="detail_footer4">
            <div className="detail_footer4_wrap">
                <div style={{fontSize:"22px",color:"#222222",fontWeight:"bold"}}>알아두어야 할 사항</div>
                <div className="detail_footer4_item">
                    <div className="detail_footer4_item2">
                        <div className="detail_footer4_item3" style={{fontWeight:"bold"}}>숙소 이용규칙</div>
                        <div className="detail_footer4_item3" style={{marginTop:"10px"}}>
                            <div style={{width:"16px",height:"16px"}}>
                                <ClockLogo></ClockLogo>
                            </div>
                            <span style={{marginLeft:"10px"}}>체크인 : 오후 2:00 이후</span>
                        </div>
                        <div className="detail_footer4_item3" style={{marginTop:"10px"}}>
                            <div style={{width:"16px",height:"16px"}}>
                                <ClockLogo></ClockLogo>
                            </div>
                            <span style={{marginLeft:"10px"}}>체크아웃 시간 : 오전 11:00</span>
                        </div>
                        <div className="detail_footer4_item3" style={{marginTop:"10px"}}>
                            <div style={{width:"16px",height:"16px"}}>
                                <CigaretLogo></CigaretLogo>
                            </div>
                            <span style={{marginLeft:"10px"}}>흡연 금지</span>
                        </div>
                        <div className="detail_footer4_item3" style={{marginTop:"10px"}}>
                            <div style={{width:"16px",height:"16px"}}>
                                <DogLogo></DogLogo>
                            </div>
                            <span style={{marginLeft:"10px"}}>반려동물 동반 불가</span>
                        </div>
                        <div className="detail_footer4_item3" style={{marginTop:"10px"}}>
                            <div style={{width:"16px",height:"16px"}}>
                                <PartyLogo></PartyLogo>
                            </div>
                            <span style={{marginLeft:"10px"}}>파티나 이벤트 금지</span> 
                        </div>
                        <div className="detail_footer4_item3" style={{marginTop:"20px"}}>
                            <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold",borderBottom:"1px solid black"}}>더보기</div>
                            <RightArrowLogo className="logo"></RightArrowLogo>
                        </div>
                    </div>
                    <div className="detail_footer4_item2">
                        <div className="detail_footer4_item3" style={{fontWeight:"bold"}}>
                            건강과 안전
                        </div>
                        <div  style={{width:"330px",hieght:"40px",display:"flex",marginTop:"8px"}}>
                            <div>
                                <img src={AirbnbStar} alt="" style={{width:"24px",height:"24px"}} />
                            </div>
                            <div style={{marginLeft:"10px"}}>
                                <span>에어비엔비 코로나 19 방역 수칙을<br></br>
                                    준수하셔야 됩니다.
                                </span>
                            </div>
                        </div>
                        <div style={{width:"335px",hieght:"40px",display:"flex",marginTop:"15px"}}>
                            <div>
                                <img src={AirbnbQuetionLogo} alt="" style={{width:"24px",height:"24px"}} />
                            </div>
                            <div style={{marginLeft:"10px",display:"flex",flexDirection:"column",fontSize:"16px"}}>
                                <span>
                                    일산화탄소 경보기 설치 정보 여부 없음 
                                </span>
                                <span style={{fontWeight:"bold",marginTop:"3px"}}>더 보기</span>
                            </div>
                        </div>
                        <div style={{width:"335px",height:"40px",display:"flex",marginTop:"15px"}}>
                            <div>
                                <img src={AirbnbQuetionLogo} alt="" style={{width:"24px",height:"24px"}} />
                            </div>
                            <div style={{marginLeft:"10px",fontSize:"16px",color:"#222222"}}>
                                <span>화재 경보기 설치 정보 여부 없음&nbsp;</span>
                                <span style={{fontWeight:"bold"}}>더 보기</span>
                            </div>
                        </div>
                        <div style={{width:"330px",height:"20px", display:"flex",marginTop:"10px"}}>
                            <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold",borderBottom:"1px solid black"}}>더보기</div>
                            <RightArrowLogo className="logo"></RightArrowLogo>
                        </div>
                    </div>
                    
                    <div className="detail_footer4_item2">
                        <div className="detail_footer4_item3" style={{fontWeight:"bold"}}>환불 정책</div>
                        <div className="detail_footer4_item3" style={{marginTop:"14px"}}>3월 14일 전까지 무료로 취소할 수 있습니다.</div>
                        <div style={{width:"330px",height:"20px",display:"flex",marginTop:"24px"}}>
                            <div style={{fontSize:"16px",color:"#222222",fontWeight:"bold",borderBottom:"1px solid black"}}>더보기</div>
                            <RightArrowLogo className="logo"></RightArrowLogo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="detail_footer5">
            <div className="detail_footer5_wrap">
                <div style={{width:"1120px",height:"20px",color:"#22222",fontSize:"22px",fontWeight:"bold"}}>Aibansemuel및 인근의 다른 옵션 살펴보기</div>
                <div className="detail_footer5_item">
                    <div className="detail_footer5_item2">
                        <div className="detail_footer5_item3" style={{marginTop:"40px"}}>Seminyak Beach</div>
                        <div className="detail_footer5_item3" style={{marginTop:"30px"}}>Penidia Island</div>
                        <div className="detail_footer5_item3" style={{marginTop:"30px"}}>Nusa Lembongan</div>
                    </div>
                    <div className="detail_footer5_item2">
                        <div className="detail_footer5_item3" style={{marginTop:"40px"}}>롬복</div>
                        <div className="detail_footer5_item3" style={{marginTop:"30px"}}>Bingin Beach</div>
                        <div className="detail_footer5_item3" style={{marginTop:"30px"}}>Kuta Beach</div>
                    </div>
                    <div className="detail_footer5_item2">
                        <div className="detail_footer5_item3" style={{marginTop:"40px"}}>Sanur</div>
                        <div className="detail_footer5_item3" style={{marginTop:"30px"}}>길리 뜨라왕안</div>
                        <div className="detail_footer5_item3" style={{marginTop:"30px"}}>Canggu Beach</div>
                    </div>
                    <div className="detail_footer5_item2">
                        <div className="detail_footer5_item3" style={{marginTop:"40px"}}>덴파사르</div>
                        <div className="detail_footer5_item3" style={{marginTop:"30px"}}>Nusa Dua Beach</div>
                        <div className="detail_footer5_item3" style={{marginTop:"30px"}}>우봇</div>
                    </div>
                </div>  
                <div style={{width:"1120px",height:"18px",display:"flex",color:"#484848",fontSize:"14px",marginTop:"80px"}}>
                    <span>에어비엔비</span>
                    <div style={{marginLeft:"8px",marginTop:"5px"}}>
                        <SmallRightArrowLogo></SmallRightArrowLogo>
                    </div>
                    <span style={{marginLeft:"5px"}}>인도네시아</span>
                    <div style={{marginLeft:"8px",marginTop:"5px"}}>
                        <SmallRightArrowLogo></SmallRightArrowLogo>
                    </div>
                    <span style={{marginLeft:"5px"}}>발리</span>
                    <div style={{marginLeft:"8px",marginTop:"5px"}}>
                        <SmallRightArrowLogo></SmallRightArrowLogo>
                    </div>
                    <span style={{marginLeft:"5px"}}>Badung Regency</span>
                    <div style={{marginLeft:"8px",marginTop:"5px"}}>
                        <SmallRightArrowLogo></SmallRightArrowLogo>
                    </div>
                    <span style={{marginLeft:"5px"}}>Aibansemuel</span>
                    
                </div> 
            </div>
               
        </div>

        <div className="detail_footer6">
            <div className="detail_footer6_wrap">
                <div className="detail_footer6_item">
                    <div className="detail_footer6_item2_f" >에어비엔비 지원</div>
                    <div className="detail_footer6_item2" >도움말 센터</div>
                    <div className="detail_footer6_item2">에어커버</div>
                    <div className="detail_footer6_item2">안전정보</div>
                    <div className="detail_footer6_item2">장애인 지원</div>
                    <div className="detail_footer6_item2">예약 취소 옵션</div>
                    <div className="detail_footer6_item2">에어비앤비의 코로나19 대응 방안</div>
                    <div className="detail_footer6_item2">이웃 민원 신고</div>
                </div>
                <div className="detail_footer6_item">
                    <div className="detail_footer6_item2_f">커뮤니티</div>
                    <div className="detail_footer6_item2">Airbnb.org : 재난 구호 숙소</div>
                    <div className="detail_footer6_item2">아프칸 난민 지원</div>
                    <div className="detail_footer6_item2">차별 철폐를 위한 노력</div>
                </div>
                <div className="detail_footer6_item">
                    <div className="detail_footer6_item2_f">호스팅</div>
                    <div className="detail_footer6_item2">호스팅 시작하기</div>
                    <div className="detail_footer6_item2">호스팅을 위한 에어커버</div>
                    <div className="detail_footer6_item2">호스팅 자료 둘러보기</div>
                    <div className="detail_footer6_item2">커뮤니티 포럼 방문하기</div>
                    <div className="detail_footer6_item2">책임감 있는 호스팅</div>
                </div>
                <div className="detail_footer6_item">
                    <div className="detail_footer6_item2_f">에어비앤비</div>
                    <div className="detail_footer6_item2">뉴스룸</div>
                    <div className="detail_footer6_item2">새로운 기능에 대해 알아보기</div>
                    <div className="detail_footer6_item2">에어비앤비 공동창업자의 메세지</div>
                    <div className="detail_footer6_item2">채용정보</div>
                    <div className="detail_footer6_item2">투자자 정보</div>
                    
                </div>
            </div>
            <div className="detail_footer6_wrap2">
                <div className="detail_footer_wrap2_wrap">
                    <div className="detail_footer6_wrap2_item">
                        <span >&#169; 2022 Airbnb,lnc.</span>
                        <span className="detail_footer6_wrap2_item3">&#183;</span>
                        <a href="" className="detail_footer6_wrap2_item3">개인정보 처리방침</a>
                        <span className="detail_footer6_wrap2_item3">&#183;</span>
                        <a href="" className="detail_footer6_wrap2_item3">이용약관</a>
                        <span className="detail_footer6_wrap2_item3">&#183;</span>
                        <a href="" className="detail_footer6_wrap2_item3">사이트맵</a>
                        <span className="detail_footer6_wrap2_item3">&#183;</span>
                        <a href="" className="detail_footer6_wrap2_item3">한국의 변경된 환불 정책</a>
                        <span className="detail_footer6_wrap2_item3">&#183;</span>
                        <a href="" className="detail_footer6_wrap2_item3">회사 세부정보</a>
                        <Earthlogo className="detail_footer6_wrap2_item3 detail_footer_logo" ></Earthlogo>
                        <a href="" className="detail_footer6_wrap2_item3" style={{fontWeight:"bold"}}>한국어(KR)</a>
                        <span className="detail_footer6_wrap2_item3 detail_footer_logo" style={{fontWeight:"bold"}}>&#8361;</span>
                        <span className="detail_footer6_wrap2_item3" style={{fontWeight:"bold"}}>KRW</span>
                        <div style={{width:"16px",height:"16px",marginLeft:"45px"}}>
                            <FacebookLogo></FacebookLogo>
                        </div>
                        <div className="detail_footer_logo1">
                            <TwiterLogo></TwiterLogo>
                        </div>
                        <div className="detail_footer_logo1">
                            <InstagramLogo></InstagramLogo>
                        </div>
                        <div className="detail_footer_logo1">
                            <LineLogo></LineLogo>
                        </div>
                        <div className="detail_footer_logo1">
                            <PencilLogo></PencilLogo>
                        </div>
                        
                        
                    </div>
                    <div className="detail_footer6_wrap2_item2">
                        웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}