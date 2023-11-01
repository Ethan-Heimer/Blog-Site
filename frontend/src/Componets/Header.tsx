import { Link } from "react-router-dom";
import Button from "./Button";
import { useUserData } from "../App";
import { useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import { useNavigate } from "react-router-dom";

export default function Header(){
    console.log(localStorage.getItem("user"))
    const userData = useUserData();
    useEffect(()=>{
        console.log(userData );
    }, [userData]);

    const Nav = useNavigate();

    return(
        <header className="bgc-one font-xlarge pad-1 row spread g-1 h-10">
            Web.IO {userData.UUID} {userData.Username}
            <div className="row center-row">
                
                {userData.UUID == "" ? (
                    <>
                        <Button onClick={() => {}}>
                            <Link to="/user/create" className="font-large">Get Started</Link>
                        </Button>

                        <Button onClick={() => {}}>
                            <Link to="/" className="font-large">Log In!</Link>
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => {}}>
                            <Link to="/blog/edit/" className="font-large">Create Post!</Link>
                        </Button>

                        <button className="hover-scale" onClick={() => Nav("/Profile")}>
                            <ProfilePicture size={100}/>
                        </button>
                    </>
                )}
            </div>
        </header>
    )
}