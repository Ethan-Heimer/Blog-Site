import { useEffect, useState } from "react";
import { useUserData } from "../../App";
import ProfilePicture from "./ProfilePicture";
import UploadFile from "../Utilities/UploadFile";
import { useNavigate } from "react-router-dom";
import FollowButton from "./Follow";
import Following from "./Following";
import Followers from "./Followers";

type TProfileDataProps = {
    UUID: string;
}

export default function ProfileDataDisplay(props: TProfileDataProps){
    const userData = useUserData();
    
    const[username, setUsername] = useState("");
    const[avatar, setAvatar] = useState("");
    
    useEffect(() => {
        console.log("use effect");
        
        fetch("https://web-io-p635.onrender.com/user/get/"+props.UUID)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            
            if(response.statusCode == 200){
                setUsername(response.data.Username)
                setAvatar(response.data.ProfilePicture);
            }
        })
        .catch(error => {
           console.log(error);
        })

    }, [userData.ProfilePicture, props.UUID])
    
    return(
        <div className="background-blur shadow-down pad-1">
            <div className = "row">
                <ProfilePicture url={avatar} size={"20vmax"}/>
                
                <div>
                    <p className='m-1 font-xlarge'>
                        {username}
                    </p>

                    <p className="m-1 font-med font-color-two">
                        #{props.UUID}
                    </p>

                    <Following UUID={props.UUID}/>
                    <Followers UUID={props.UUID}/>
                    {(userData.UUID == props.UUID) ? <UploadFile label="Upload Avatar" onUpload={userData.UpdateProfilePicture}/> : <FollowButton onClick={() => {}} profileUUID={props.UUID}/>}
                </div>
            </div>
            
           
        </div>
    )
}