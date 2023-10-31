//import Button from "../Button";
//import { useUserData } from "../../App";

import { useUserData } from "../../../App";
import Button from "../../Button";
import { useEditorData } from "../BlogEditor";

export default function SubmitBlog(){
    const context = useEditorData();
    const userData = useUserData();

    console.log(context);
    console.log(userData);

    const publishBlog = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        const body = {
            Header: context.Header,
            Content: context.Content,
            UserId: userData.UUID
        }

        console.log(body);
        
        await fetch("http://localHost:3000/blog/add", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })
    } 
    
    return(
        <Button className="m-1" onClick={(e) => publishBlog(e)}>
            <p className="font-large">Publish!</p>
        </Button>
    )
}