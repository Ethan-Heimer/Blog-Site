import { useEffect, useState} from "react";
import { useSocketIO } from "../SockeIOProvider";
import Comment from "./Comment";

type TSDData = {
    BlogId: string;
}

export default function CommentDisplay(props: TSDData){
    const context = useSocketIO();
    const[comments, setComments] = useState(([] as any[]));

    useEffect(() => {
        const fetchData = async () => {
            console.log("Socket");
    
            await fetch("https://web-io-p635.onrender.com/blog/get/"+props.BlogId)
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
        
        context.socket.on("comment_posted", async () => {
            await fetchData();
            console.log(comments);
        })  
    }, [context.socket])

    return (
        <div className="center stack w-100">
            {comments.map(x => {
                return <Comment UUID={x.PosterId} Comment={x.Message}/>
            })}
        </div>
    )
}