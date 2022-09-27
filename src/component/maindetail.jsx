import { useLocation, useParams } from "react-router-dom"
import DetailHeader from "../component/detailheader";
import DetailFooter from "./detailfooter";
import DetailMain from "./detailmain";


export default function Maindetail(){
    const {title} = useParams();
    const {state} = useLocation();
    console.log(title)
    console.log(state)
    return(
        <>
            <DetailHeader></DetailHeader>
            <DetailMain 
                title={title}
                grade={state.grade}
                img_path={state.img_path}
                price={state.price}
            ></DetailMain>
            <DetailFooter
                grade={state.grade}
                title={state.title}
            ></DetailFooter>
        </>
    )
}