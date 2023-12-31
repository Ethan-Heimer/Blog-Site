import Content from "./Profile/ContentPage";
import InputField from "./Utilities/FromInput";
import Button from "./Utilities/Button";
import {useState} from "react";
import ErrorMsg from "./Utilities/Error";
import { useUserData } from "../App";
import { useNavigate } from "react-router-dom";

export default function SignInForm(){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const Nav = useNavigate()
    const [error, setError] = useState("");

    const userContext = useUserData();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch("https://web-io-p635.onrender.com/user/signin", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Username: username, 
                                   Password: password }),
        })
        .then(res => res.json())
        .then(response => {
            if(response.statusCode == 403){
                setError(response.message);
                return;
            }

            console.log(response.data);

            userContext.SetUUID(response.data.UUID);
            userContext.SetUsername(response.data.Username);
            userContext.SetProfilePicture(response.data.ProfilePicture);

            console.log(response.data, "data");
            Nav("/home");
           
        })
        .catch(error => {
           console.log(error);
        })
    }

    return (
        <>
            <Content
            className="w-50"
            header={(
                <h1 className="center">Sign In</h1>
            )}

            content={(
                <div className="center">
                    <form className="center">
                        <InputField lable="Username" onValueChanged={(e: string) => setUserName(e)}/>
                        <InputField lable="Password" onValueChanged={(e: string) => setPassword(e)} type="password"/>

                    </form>
                    
                    <Button onClick={onSubmit}>
                        <p className="font-med">Submit</p>
                    </Button> 
                </div>
            )}/>

            <ErrorMsg message={error}/>
        </>
    )
}