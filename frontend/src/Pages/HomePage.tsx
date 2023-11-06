import { useParams } from "react-router-dom";
import BlogsDisplay, { DisplayType } from "../Componets/Blog/BlogsDisplay";
import Header from "../Componets/Header";
import UserCard from "../Componets/Profile/User";
import { useUserData } from "../App";
import UserDisplay from "../Componets/Profile/UserDisplay";

export default function HomePage(){
    const params = useParams();
    const search = params.search || "";
    const userData = useUserData();

    return (
        <div className="bgi-two min-h-100">
            
            <Header />
            <p className="center m-1 font-xlarge text-shadow">Blogs</p>
            <BlogsDisplay Display={DisplayType.FromKeyWords} Keywords={search}/>
        </div>
    )
}