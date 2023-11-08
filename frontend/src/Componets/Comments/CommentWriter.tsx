import { useState } from "react";
import TextBox from "../Utilities/TextBoxInput";
import { useUserData } from "../../App";
import ProfileWidget from "../Profile/ProfileWidget";
import Button from "../Utilities/Button";
import { useSocketIO } from "../SockeIOProvider";

type TWritterData = {
    blogId: string
}

export default function CommentWritter(props: TWritterData){
    const userData = useUserData();
    const context = useSocketIO();
    
    const[comment, setComment] = useState('');

    const onChange = (value) => {
        setComment(value);

        //i dont want the type notif to emtit everytime someone types, so ill do it every 10 characters
        if(value.length % 10 != 0 && value.length != 1)
            return;

        if(value != ""){
            context.socket.emit("typing", {username: userData.Username, blogId: props.blogId})
        }
        else{
            context.socket.emit("remove_typing", {username: userData.Username, blogId: props.blogId})
        }
    }

    const post = () => {
        context.socket.emit("post_comment", { BlogId: props.blogId, UserId: userData.UUID, Comment: comment });
    }
    
    return(
        <>
        {
            userData.UUID != "" && 
            (<div className="w-100 pad-1 underline">
            <ProfileWidget className="m-1" UUID={userData.UUID} pictureSize={"3vmax"}/>
            <TextBox defaultHeight={"5vh"} placeHolder="Comment..." onValueChanged={onChange}/>
            <Button className="m-1 font-med" onClick={post}>
                Post!
            </Button>
            </div>)
        }
        </>
    )
}