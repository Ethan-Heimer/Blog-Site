import { useNavigate } from "react-router-dom";

import Content from "../Profile/ContentPage";
import Markdown from "markdown-to-jsx";
import ProfileWidget from "../Profile/ProfileWidget";

import CommentWritter from "../Comments/CommentWriter";
import CommentDisplay from "../Comments/CommentDisplay";
import FavoriteToggle from "../Favorites/FavoriteButton";
import UserTypingDisplay from "../Comments/UserTypingDisplay";
import { useEffect, useState } from "react";
import { useSocketIO } from "../SockeIOProvider";

type TBlogProps = {
    Header: string;
    Content: string;
    AuthorId: string;
    BlogId: string;
}

export default function Blog(props: TBlogProps){
    const context = useSocketIO();
    const[joined, setJoined] = useState(false);
    
    useEffect(() => {
        if(!joined)
        {
            context.socket.emit("join_blog", {blogId: props.BlogId})
            setJoined(true);
        }
    }, [context.socket, props.BlogId])

    return (
        <>
            <Content className="w-90 pad-1" header={(
            <div className="center">
                <div className="left">
               
                </div>
                    <h1 className="center font-large text-block-shadow">{props.Header}</h1>
            </div>
            )}

            content={(
                <>
                    <div className="underline pad-1 row spread">
                        <ProfileWidget UUID={props.AuthorId} pictureSize={"3vmax"}/>
                        <FavoriteToggle blogId={props.BlogId} authorId={props.AuthorId}/>
                    </div>
                    
                    <div className="pad-1 m-1 m-inline-2 blog underline">
                        <Markdown>
                            {props.Content}
                        </Markdown>
                    </div>

                    <p className="font-xlarge m-1 center">Discussion</p>
                    <CommentWritter blogId={props.BlogId} />
                    <UserTypingDisplay blogId={props.BlogId}/>
                    <CommentDisplay BlogId={props.BlogId}/>
                </>
            )}
            
            /> 
        </>
    )
}
