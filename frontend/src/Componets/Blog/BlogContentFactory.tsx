import { TBlogContent } from "../Editor/BlogEditor"
import BlogHeader from "./Blog Components/BlogHeading";
import BlogText from "./Blog Components/BlogText";

export type TBlogComponent = {
    data: TBlogContent;
}

export default function BlogComponent(props: TBlogComponent){
    if(props.data.dataType === "THeader")
    {
        return(<BlogHeader data={props.data}/>)
    }
    else if(props.data.dataType === "TTextBox"){
        return(<BlogText data={props.data}/>)
    }

    return (
        <p>null</p>
    )
}