import { useEffect, useMemo, useState, useRef } from "react";
import { useSocketIO } from "../SockeIOProvider";
import Comment from "./Comment";
import { Socket } from "socket.io-client";

type TSDData = {
    BlogId: string;
}

export default function CommentDisplay(props: TSDData){
    const context = useSocketIO();
    const[comments, setComments] = useState(([] as any[]));

    useEffect(() => {
        const fetchData = async () => {
            console.log("Socket");
    
            await fetch("http://localhost:3000/blog/get/"+props.BlogId)
                .then(res => res.json())
                .then(res => { 
                    if(res.status == 200){
                       setComments(res.data.Comments);
                    }  
                    console.log("test");
                })
                .catch(error => {
                    console.warn('Error', error);
                })
        }    

        fetchData();
        
        context.socket.on("comment_posted_"+props.BlogId, async () => {
            await fetchData();
            console.log(comments);
        })  
    }, [context.socket])

    return (
        <>
            {comments.map(x => {
                return <Comment UUID={x.PosterId} Comment={x.Message}/>
            })}
        </>
    )
}