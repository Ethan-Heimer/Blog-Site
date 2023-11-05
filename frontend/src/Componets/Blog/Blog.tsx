import { useNavigate } from "react-router-dom";

import Content from "../Profile/ContentPage";
import Markdown from "markdown-to-jsx";
import ProfileWidget from "../Profile/ProfileWidget";
import Comment from "../Comments/Comment";
import Button from "../Utilities/Button";
import CommentWritter from "../Comments/CommentWriter";
import CommentDisplay from "../Comments/CommentDisplay";



type TBlogProps = {
    Header: string;
    Content: string;
    AuthorId: string;
    BlogId: string;
}

export default function Blog(props: TBlogProps){
    //const Nav = useNavigate();
    

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
                    <div>
                        <ProfileWidget UUID={props.AuthorId} pictureSize={"3vmax"}/>
                    </div>
                    
                    <div className="pad-1 m-1 m-inline-2 blog underline">
                        <Markdown>
                            {props.Content}
                        </Markdown>
                    </div>

                    <p className="font-xlarge m-1 center">Discussion</p>
                    <CommentWritter blogId={props.BlogId} />
                    <CommentDisplay BlogId={props.BlogId}/>
                </>
            )}
            
            /> 
        </>
    )
}
