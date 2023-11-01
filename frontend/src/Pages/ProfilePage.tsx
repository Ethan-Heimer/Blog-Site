import { useUserData } from "../App";
import BlogsDisplay from "../Componets/Blog/BlogsDisplay";
import Header from "../Componets/Header";
import ProfileDataDisplay from "../Componets/ProfileDataSection";

export default function ProfilePage(){
    const userData = useUserData();
    
    return(
        <>
            <Header/>

            <ProfileDataDisplay/>

            <p className="font-xlarge center m-1">User Blogs</p>
            <BlogsDisplay FromUser={userData.UUID}/>
        </>
    )
}