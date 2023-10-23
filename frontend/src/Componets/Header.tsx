import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header(){
    console.log(localStorage.getItem("user"))
    
    return(
        <header className="bgc-one font-xlarge pad-1 row spread g-1 h-10">
            Web.IO
            <div className="row center-row">
                
                {localStorage.getItem("user") != null ? (
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
                            <Link to="#" className="font-large">Create Post!</Link>
                        </Button>
                    </>
                )}
            </div>
        </header>
    )
}