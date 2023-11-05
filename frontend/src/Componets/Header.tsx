import { Link } from "react-router-dom";
import Button from "./Utilities/Button";
import { useUserData } from "../App";
import { useEffect } from "react";
import ProfilePicture from "./Profile/ProfilePicture";
import { useNavigate } from "react-router-dom";

type THeaderProps = {
    shadow?: boolean;
}

export default function Header(props: THeaderProps){
   
    const userData = useUserData();
    
    const Nav = useNavigate();

    return(
        <header className={"font-large pad-1 row spread g-1 h-10 background-blur sticky" + (props.shadow == true || props.shadow == undefined ? " shadow" : "")}>
            
            <button className="font-large hover-scale" onClick={() => Nav("/home")}>
                Web.IO
            </button>
            
            <div className="row center-row">
                
                {userData.UUID == "" ? (
                    <>
                        <Button onClick={() => {}}>
                            <Link to="/user/create" className="font-med text-block-shadow">Get Started</Link>
                        </Button>

                        <Button onClick={() => {}}>
                            <Link to="/" className="font-med text-block-shadow">Log In!</Link>
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => {}}>
                            <Link to="/blog/edit/" className="font-med text-block-shadow">Create Post!</Link>
                        </Button>

                        <button className="hover-scale hover-tilt" onClick={() => Nav("/Profile/"+userData.UUID)}>
                            <ProfilePicture url={userData.ProfilePicture} size={"3.5vmax"}/>
                        </button>
                    </>
                )}
            </div>
        </header>
    )
}