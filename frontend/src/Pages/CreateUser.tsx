import CreateUserForm from "../Componets/CreateUserForm";
import Header from "../Componets/Header";

export default function CreateUser(){
    return (
        <div className="bgi-one">
            <div className="h-100 w-100 split-row-2">
                <Header/>
                <div className="center">
                    
                   <CreateUserForm/>
                </div>
            </div>
        </div>
    )
}