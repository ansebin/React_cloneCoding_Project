import { ReactComponent as Earthlogo } from '../svg/earth.svg';
import { ReactComponent as ArrowLogo } from '../svg/arrowlogo.svg';
import { ReactComponent as Maplogo } from '../svg/maplogo.svg';
export default function Footer(){
    return(
        <div className="footer">
            <div className="footer_content">
                <div className="footer_container">
                    <span className="footer_span1">&#169; 2022 Airbnb,lnc.</span>
                    <span className="footer_span2">&#183;</span>
                    <a href="" className="footer_a">개인정보 처리방침</a>
                    <span className="footer_span2">&#183;</span>
                    <a href="" className="footer_a">이용약관</a>
                    <span className="footer_span2">&#183;</span>
                    <a href="" className="footer_a">사이트맵</a>
                    <span className="footer_span2">&#183;</span>
                    <a href="" className="footer_a">한국의 변경된 환불 정책</a>
                    <span className="footer_span2">&#183;</span>
                    <a href="" className="footer_a">회사 세부정보</a>
                    <Earthlogo className='footer_logo'></Earthlogo>
                    <a href="" className='footer_a2'>한국어(KR)</a>
                    <span className='footer_span3'>&#8361;</span>
                    <span className='footer_span4'>KRW</span>
                    <span className='footer_span5'>지원 및 참고 자료</span>
                    <ArrowLogo className='footer_logo2'></ArrowLogo>
                </div>
            </div>
            <div className="footer_content2">
                <p>웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</p>
            </div>
            <div className="mark">
                <button className="footer_button">
                    <span >지도 표시하기</span>
                    <Maplogo className='maplogo'></Maplogo>
                </button>
            </div>
        </div>
    )
}