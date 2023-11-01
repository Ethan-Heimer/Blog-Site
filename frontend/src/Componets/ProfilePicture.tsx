type TProfilePictureProps = {
    size: number;
}

export default function ProfilePicture(props: TProfilePictureProps){
    return(
       <div className="round bgc-four" style={{width: props.size, height: props.size}}>

       </div>
    )
}