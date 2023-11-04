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

    const post = () => {
        context.socket.emit("post_comment", { BlogId: props.blogId, UserId: userData.UUID, Comment: comment });
    }
    
    return(
        <div className="w-90 bgc-one pad-1">
            <ProfileWidget className="m-1" UUID={userData.UUID} pictureSize={"3vmax"}/>
            <TextBox defaultHeight={"3vh"} placeHolder="Comment..." onValueChanged={setComment}/>
            <Button className="m-1" onClick={post}>
                Post!
            </Button>
        </div>
    )
}