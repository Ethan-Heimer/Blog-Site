import { useUserData } from "../../App";
import Button, { ButtopnType } from "../Utilities/Button";
import {useState, useEffect} from "react";

type TFollowButtonProps = {
    profileUUID: string;

    onClick: (following: boolean) => void; 
}

export default function FollowButton(props: TFollowButtonProps){
    const[following, setFollowing] = useState(false)
    const userData = useUserData();

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
        await fetch("http://localhost:3000/user/following/add/"+userData.UUID, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                followingUUID: props.profileUUID
            }),
        }).then(resault => resault.json())
        .then(result => {
            if(result.status != 200){
                console.log(result.error);
            }
            else{
                console.log(result.message);
            }
        })
    }

    const remove = async () => {
        await fetch("http://localhost:3000/user/following/remove/"+userData.UUID, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               followingUUID: props.profileUUID
            }),
        }).then(resault => resault.json())
        .then(result => {
            if(result.status != 200){
                console.log(result.error);
            }
            else{
                console.log(result.message);
            }
        })
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