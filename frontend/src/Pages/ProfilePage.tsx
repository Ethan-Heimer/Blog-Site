import { useParams } from "react-router-dom";
import BlogsDisplay from "../Componets/Blog/BlogsDisplay";
import Header from "../Componets/Header";
import ProfileDataDisplay from "../Componets/Profile/ProfileDataSection";

export default function ProfilePage(){
    const params = useParams();
    
    return(
        <div className="bgi-two min-h-100">
            <Header shadow={false}/>

            <ProfileDataDisplay UUID={params.id as string}/>

            <p className="font-xlarge center m-1 text-shadow">User Blogs</p>
            <BlogsDisplay FromUser={params.id}/>
        </div>
    )
}