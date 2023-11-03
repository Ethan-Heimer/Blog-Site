//import Button from "../Button";
//import { useUserData } from "../../App";

import { useUserData } from "../../../App";
import Button from "../../Button";
import { useBlogData } from "../BlogDataProvider";
import { useNavigate } from "react-router-dom";
import {useMemo} from "react";

export default function SubmitBlog(){
   
    
    const context = useBlogData();
    const userData = useUserData();

    const Nav = useNavigate();
    console.log(context.BUID, "BUID");

    let display = useMemo(() => {
        console.log(context.Thumbnail)
        return context.Header != '' && context.Thumbnail != '';
    }, [context])
    
    const publishBlog = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        const body = {
            Header: context.Header,
            Content: context.Content,
            UserId: userData.UUID,
            ThumbnailURL: context.Thumbnail
        }  

        console.log(body);
        
        await fetch("http://localHost:3000/blog/append/"+context.BUID, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        }).then(response => {
            Nav("/home");
        }).catch((error) => {
            console.log(error);
        })
    } 
    
    return(
        <>
            {display && <Button className="m-1" onClick={(e) => publishBlog(e)}>
                <p className="font-large">Publish!</p>
            </Button>}
        </>
    )
}