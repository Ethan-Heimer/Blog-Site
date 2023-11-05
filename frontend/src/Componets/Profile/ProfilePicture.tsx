type TProfilePictureProps = {
    size: number | string;
    url?: string;
}

export default function ProfilePicture(props: TProfilePictureProps){
    return(
        <div className="round img-fit bgc-three realitive" style={{width: props.size, height: props.size, backgroundImage: `url(${props.url})`}}>
         
        </div>
     )
    
}