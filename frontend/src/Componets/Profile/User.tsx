import ProfileWidget from "./ProfileWidget";

type TUserProps = {
    UUID: string;
}

export default function UserCard(props: TUserProps){
    return(
        <div className="bgc-one pad-1 underline">
            <ProfileWidget className="font-large" UUID={props.UUID} pictureSize={"5vmax"} />
        </div>
    )
}