import Header from "../Componets/Header";
import SignInForm from "../Componets/SignInForm";

export default function SignIn(){
    return (
        <>
            <div className="h-100 w-100 split-row-2">
                <Header/>
                <div className="center">
                    
                   <SignInForm/>
                </div>
            </div>
        </>
    )
}