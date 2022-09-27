import HostMain from "./component/hostmain";
import HostTop from "./component/hosttop";
import HostMain2 from "./component/hostmain2";
import HostFooter from "./component/hostfooter";

function Host(){
    return(
        <>
            <div className="host_top">
                <HostTop></HostTop>
            </div>
            <div className="host_main">
                <HostMain></HostMain>
            </div>   
            <div className="host_main2">
                <HostMain2></HostMain2>    
            </div>   
            <div className="host_footer">
                <HostFooter></HostFooter>
            </div>
        </>
    )
}
export default Host;