import ProfileWidget from "../Profile/ProfileWidget";

type TCommentData = { 
    UUID: string;
    Comment: string;
}

export default function Comment(props: TCommentData){
    return (
        <div className="bgc-one pad-1 w-90">
            <ProfileWidget UUID={props.UUID} pictureSize={"2.5vmax"}/>
            <p className="font-med m-1">{props.Comment}</p>
        </div>
    )
}