import { TBlogComponent } from "../BlogContentFactory";

export default function BlogHeader(props: TBlogComponent){
    return (
        <p className="font-large">{props.data.content}</p>
    )
}