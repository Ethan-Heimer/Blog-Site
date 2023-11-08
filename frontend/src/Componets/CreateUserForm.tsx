import React from 'react';
import Content from "./Profile/ContentPage";
import InputField from "./Utilities/FromInput";
import Button from "./Utilities/Button";
import {useState} from "react";
import ErrorMsg from "./Utilities/Error";

export default function CreateUserForm(){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState("")

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        await fetch("http://localHost:3000/user/signup", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Username: username, 
                                   Password: password,
                                   Email: email }),
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            console.log("Added");
            window.location.href = "/";
        })
        .catch(error => {
            setError(error);
        })
    }

    return (
        <>
        <Content
        className='w-50'
        header={(
            <h1 className="center">Create Account</h1>
        )}

        content={(
            <div className="center">
                <form className="center">
                    <InputField lable="Username" onValueChanged={(e: string) => setUserName(e)}/>
                    <InputField lable="Email" onValueChanged={(e: string) => setEmail(e)} type="email"/>
                    <InputField lable="Password" onValueChanged={(e: string) => setPassword(e)} type="password"/>
                    <InputField lable="Confirm Password" onValueChanged={(e: string) => setConfirmPassword(e)} type="password"/>
                </form>

                {
                    (username.length > 3 && password.length > 3 && password == confirmPassword) &&
                    <Button onClick={onSubmit}>
                        <p className="font-med">Submit</p>
                    </Button> 
                }
               
            </div>
        )}/>

        <ErrorMsg message={error}/>
        </>
    )
}