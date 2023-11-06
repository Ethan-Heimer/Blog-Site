import { useParams } from "react-router-dom";
import Header from "../Componets/Header";
import UserDisplay, { DisplayType } from "../Componets/Profile/UserDisplay";

type TUserPage = {
    pageState: DisplayType;
}

export default function UserPage(Props: TUserPage){
    const params = useParams()
    const input = params.input || ""

    console.log(input);
    
    return(
        <div className="bgi-one min-h-100">
            <Header />
            <p className="bgc-one font-large center pad-1 text-shadow underline">Users</p>
            <UserDisplay displayType={Props.pageState} input={input}/>
        </div>
    )
}