import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../App";

type TProfileProps = {
    UUID: string;
    pictureSize: string | number;
}

export default function ProfileWidget(props: TProfileProps){
    const userData = useUserData();
    
    const[username, setUsername] = useState("");
    const[avatar, setAvatar] = useState("");

    const Nav = useNavigate()
    
    useEffect(() => {
        console.log("use effect");
        
        fetch("http://localHost:3000/user/get/"+props.UUID)
        .then(res => res.json())
        .then(response => {
            console.log(response, "response")
            
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
        <div className="row">
            <button className="hover-scale" onClick={() => Nav("/Profile/"+props.UUID)}>
                <ProfilePicture url={avatar} size={props.pictureSize}/>
            </button>
            <p className="font-small m-inline-1">@{username}</p>
        </div>
    )
}