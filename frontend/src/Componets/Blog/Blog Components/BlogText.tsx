import { TBlogComponent } from "../BlogContentFactory";

export default function BlogText(props: TBlogComponent){
    return (
        <p className="font-med">{props.data.content}</p>
    )
}