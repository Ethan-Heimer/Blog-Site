type TProfilePictureProps = {
    size: number | string;
    url?: string;
}

export default function ProfilePicture(props: TProfilePictureProps){
    return(
        <div className="round img-fit bgc-four" style={{width: props.size, height: props.size}}>
         {props.url != undefined && props.url != "" && <img className="round" style={{width: props.size, height: props.size}} src={props.url} />}
        </div>
     )
    
}