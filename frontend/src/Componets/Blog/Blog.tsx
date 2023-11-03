import { useNavigate } from "react-router-dom";

import Content from "../ContentPage";
import Markdown from "markdown-to-jsx";

type TBlogProps = {
    Header: string;
    Content: string;
}

export default function Blog(props: TBlogProps){
    const Nav = useNavigate();
    console.log(props);
    
    return (
        <Content className="w-90 pad-1 blog" header={(
           <div className="center-row">
                <h1 className="center font-large text-block-shadow">{props.Header}</h1>
           </div>
        )}

        content={(
            <div className="pad-1 m-1 m-inline-2">
                <Markdown>
                    {props.Content}
                </Markdown>
            </div>
        )}
        
        /> 
    )
}
