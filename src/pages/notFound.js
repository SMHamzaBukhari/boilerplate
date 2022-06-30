import { useNavigate } from "react-router-dom"
import HButton from './../config/components/button';

export default function NotFound(){
    const navigate = useNavigate()
    return(
        <>
        <h1 className="text-center">404 Not Found</h1>
        <HButton onClick={()=>navigate("/")} label="Go Back"/>
        </>

    )
}