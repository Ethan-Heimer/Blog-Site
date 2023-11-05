import ProfileWidget from "../Profile/ProfileWidget";

type TCommentData = { 
    UUID: string;
    Comment: string;
}

export default function Comment(props: TCommentData){
    return (
        <div className="m-1 pad-1 w-100 underline">
            <ProfileWidget UUID={props.UUID} pictureSize={"2.5vmax"}/>
            <p className="font-med m-1">{props.Comment}</p>
        </div>
    )
}