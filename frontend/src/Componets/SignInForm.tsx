import Content from "../Componets/ContentPage";
import InputField from "../Componets/FromInput";
import Button from "./Button";
import {useState} from "react";
import ErrorMsg from "./Error";

export default function SignInForm(){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch("http://localHost:3000/user/signin", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Username: username, 
                                   Password: password }),
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            
            if(response.statusCode == 403){
                setError(response.message);
                return;
            }
        
            localStorage.setItem("user", response.UUID);
            window.location.href = "/home";
        })
        .catch(error => {
           console.log(error);
        })
    }

    return (
        <>
            <Content
            header={(
                <h1 className="center">Sign In</h1>
            )}

            content={(
                <div className="center">
                    <form className="center" onSubmit={onSubmit}>
                        <InputField lable="Username" onValueChanged={(e: string) => setUserName(e)}/>
                        <InputField lable="Password" onValueChanged={(e: string) => setPassword(e)} type="password"/>

                        <Button onClick={() => {}}>
                            <p className="font-med">Submit</p>
                        </Button> 
                    </form>
                </div>
            )}/>

            <ErrorMsg message={error}/>
        </>
    )
}