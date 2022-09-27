import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App";
import Maindetail from "./component/maindetail";
import Host from"./Host";

function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/maindetail/:title" element={<Maindetail/>}></Route>
                <Route path="/host" element={<Host/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers;