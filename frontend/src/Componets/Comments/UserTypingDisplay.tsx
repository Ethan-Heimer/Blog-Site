import {useState, useEffect} from "react"
import { useSocketIO } from "../SockeIOProvider"
import { useUserData } from "../../App"

type TDisplayData = {
    blogId: string
}

export default function UserTypingDisplay(props: TDisplayData){
    const[display, setDisplay] = useState("")
    const userData = useUserData();
    const context = useSocketIO()

    useEffect(() => {
        
        
        context.socket.on("new_typer", (data: any) =>{
            const displayString: string = (data.username == userData.Username ? "you are" : data.username + " is")
            
            setDisplay(displayString);
            console.log("hello");
        })

        context.socket.on("remove_typer", () => {
            setDisplay("");
            console.log("hello hi");
        })
    }, [context.socket, props.blogId, userData.Username])

    return(
        <div className="pad-half underline font-small">
            {display != "" ? display+" typing..." : ""}
        </div>
    )
}