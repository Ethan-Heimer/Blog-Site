import { Link } from "react-router-dom";
import Button from "./Utilities/Button";
import { useUserData } from "../App";
import ProfilePicture from "./Profile/ProfilePicture";
import { useNavigate } from "react-router-dom";
import SearchBox from "./Search/SearchBox";

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
                        <Button onClick={() => {}} className="m-inline-1">
                            <Link to="/user/create" className="font-med text-block-shadow">Get Started</Link>
                        </Button>

                        <Button onClick={() => {}} className="m-inline-1">
                            <Link to="/" className="font-med text-block-shadow">Log In!</Link>
                        </Button>
                    </>
                ) : (
                    <>
                        <SearchBox/>

                        <Button onClick={() => {}} className="m-inline-1 row">
                            <Link to="/blog/edit/" className="font-med text-block-shadow row no-wrap"><p>Create Post!</p></Link>
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