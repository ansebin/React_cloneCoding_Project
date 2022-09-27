

export default function HostMain(){
    
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY; 
    return(
        <>
            <div className="host_main_item1">
                <div>
                    <h2 style={{color:"#222222",display:"flex",fontSize:"50px",justifyContent:"center",marginTop:"120px",fontWeight:"bold"}}>호스팅으로 올릴 수 있는</h2>
                    <h2 style={{color:"#222222",display:"flex",fontSize:"50px",justifyContent:"center",fontWeight:"bold",marginTop:"5px"}}>수입을 확인하세요</h2>
                </div>
                <div className="host_main_item1_div">
                    <div className="host_main_flex">
                        <div style={{width:"276px",height:"36px",fontSize:"14px",marginTop:"20px",marginLeft:"30px",color:"#877a8a"}}>동일 지역 내 호스트의 평균 수입은 다음과 같습니다.*</div>
                        <div>
                            <span style={{fontSize:"40px",marginLeft:"30px",color:"#ff385c",fontWeight:"bold"}}>
                                &#8361;1,563,059
                            </span>
                            <span style={{marginLeft:"10px",fontSize:"20px",color:"#ff385c",fontWeight:"bold"}}>/월</span>
                        </div>
                    </div>
                    <div className="host_main_flex">
                        <div style={{width:"276px",height:"36px",fontSize:"14px",marginTop:"20px",marginLeft:"30px",color:"#877a8a"}}>호스팅 수입</div>
                        <div>
                        <span style={{fontSize:"40px",marginLeft:"30px",color:"#222222",fontWeight:"bold"}}>
                                &#8361;82,266
                            </span>
                            <span style={{marginLeft:"10px",fontSize:"20px",color:"#222222",fontWeight:"bold"}}>/월</span>
                        </div>
                    </div>
                    <div className="host_main_flex">
                        <div style={{width:"276px",height:"36px",fontSize:"14px",marginTop:"20px",marginLeft:"30px",color:"#877a8a"}}>예약 일수:</div>
                        <div>
                        <span style={{fontSize:"40px",marginLeft:"30px",color:"#222222",fontWeight:"bold"}}>
                                19
                            </span>
                            <span style={{marginLeft:"10px",fontSize:"20px",color:"#222222",fontWeight:"bold"}}>박/월</span>
                        </div>
                    </div>
                </div>
                <div style={{width:"100%",height:"26px",display:"flex",justifyContent:"center",marginTop:"70px"}}>
                    <h2 style={{color:"#222222",fontWeight:"bold",fontSize:"20px"}}>숙소를 소개해주세요</h2>
                </div>
                <div style={{width:"1592px",height:"450px",border:"1px solid blue",marginTop:"20px"}}>
                    {/* map부분 */}
                </div>
                <div className="main_bottom">
                    <button>* 에어비앤비가 예상 수입을 산정하는 방법</button>

                </div>
            </div>
        </>
    )
} 
