import CreateUserForm from "../Componets/CreateUserForm";
import Header from "../Componets/Header";
import SignInForm from "../Componets/SignInForm";

export default function CreateUser(){
    return (
        <>
            <div className="h-100 w-100 split-row-2">
                <Header/>
                <div className="center">
                    
                   <CreateUserForm/>
                </div>
            </div>
        </>
    )
}