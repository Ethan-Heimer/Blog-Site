import { useUserData } from "../../App";
import { useSocketIO } from "../SockeIOProvider";
import Button, { ButtopnType } from "../Utilities/Button";
import {useState, useEffect} from "react";

type TFollowButtonProps = {
    profileUUID: string;

    onClick: (following: boolean) => void; 
}

export default function FollowButton(props: TFollowButtonProps){
    const[following, setFollowing] = useState(false)
    const userData = useUserData();

    const context = useSocketIO();

    useEffect(() => {
        if(userData.UUID == '')
            return;
        
        fetch(`http://localhost:3000/user/following/${userData.UUID}/is/${props.profileUUID}`, {
         }).then(result => result.json())
         .then(result => {
             if(result.status == 200){
                 setFollowing(result.data);
             }
             else{
                 console.log("has failed");
             }
         })
         .catch(error => {
             console.log(error);
         })
         
     }, [])

     const toggle = () => {
        //add();
        if(!following)
            add();
        else
            remove();
        setFollowing(!following)
    }

    const add = async () => {
        context.socket.emit("add_follow", {UUID: userData.UUID, followingUUID: props.profileUUID})
    }

    const remove = async () => {
        context.socket.emit("remove_follow", {UUID: userData.UUID, followingUUID: props.profileUUID})
    }   
    
    return(
       <div>
            {
                (userData.UUID != "" && props.profileUUID != userData.UUID) &&
                (<Button className="m-1 font-med text-block-shadow" ButtonType={following ? ButtopnType.Primary : ButtopnType.Accent} onClick={() => {
                    toggle();
                    props.onClick(following);
                }}>  
                    <p className="font-one">{following? "Following" : "Follow"}</p>
                </Button>)
            }
            
       </div>  
    )
}