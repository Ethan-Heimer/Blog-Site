import { useUserData } from "../App";
import BlogsDisplay from "../Componets/Blog/BlogsDisplay";
import Header from "../Componets/Header";
import ProfileDataDisplay from "../Componets/ProfileDataSection";

export default function ProfilePage(){
    const userData = useUserData();
    
    return(
        <div className="bgi-two min-h-100">
            <Header shadow={false}/>

            <ProfileDataDisplay/>

            <p className="font-xlarge center m-1 text-shadow">User Blogs</p>
            <BlogsDisplay FromUser={userData.UUID}/>
        </div>
    )
}