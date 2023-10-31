import Content from "../ContentPage";
import {TBlogData } from "../Editor/BlogEditor";
import BlogComponent from "./BlogContentFactory";

type TBlogProps = {
    data: TBlogData
}


export default function Blog(props: TBlogProps){
    return (
        <Content className="pad-1" header={(
           <>
                <h1 className="center font-large">{props.data.Header}</h1>
           </>
        )}

        content={(
            <>
                {props.data.Content.map(x => {
                    return <BlogComponent data={x}/>
                })}
            </>
        )}
        
        /> 
    )
}
