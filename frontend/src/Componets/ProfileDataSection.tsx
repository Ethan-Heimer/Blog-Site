import { useUserData } from "../App";
import ProfilePicture from "./ProfilePicture";

export default function ProfileDataDisplay(){
    const userData = useUserData();
    
    return(
        <div className = "row bgc-one pad-1">
            <ProfilePicture size={500}/>
            <div>
                <p className='m-1 font-xlarge'>
                    {userData.Username}
                </p>

                <p className="m-1 font-med font-color-two">
                    #{userData.UUID}
                </p>
            </div>
        </div>
    )
}