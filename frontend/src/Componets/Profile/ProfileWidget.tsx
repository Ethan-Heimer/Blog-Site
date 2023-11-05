import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../App";

type TProfileProps = {
    UUID: string;
    pictureSize: string | number;

    className?: string;
}

export default function ProfileWidget(props: TProfileProps){
    const userData = useUserData();
    
    const[username, setUsername] = useState("");
    const[avatar, setAvatar] = useState("");

    const Nav = useNavigate()
    
    useEffect(() => {  
        fetch("http://localHost:3000/user/get/"+props.UUID)
        .then(res => res.json())
        .then(response => { 
            if(response.statusCode == 200){
                setUsername(response.data.Username)
                setAvatar(response.data.ProfilePicture);
            }
        })
        .catch(error => {
           console.log(error);
        })
    }, [userData.ProfilePicture, props.UUID])

    if(username ==  "" && avatar == ""){
        return (
            <div className={"row " + (props.className != undefined ? props.className : "")}>
                <ProfilePicture url={""} size={props.pictureSize}/>
                <div className="w-10 bgc-three m-inline-1" style={{height: 20}}/>
            </div>
        )
    }

    return(
        <div className={"row " + (props.className != undefined ? props.className : "")}>
            <button className="hover-scale hover-tilt" onClick={() => Nav("/Profile/"+props.UUID)}>
                <ProfilePicture url={avatar} size={props.pictureSize}/>
            </button>
            <p className="font-small m-inline-1">@{username}</p>
        </div>
    )
}