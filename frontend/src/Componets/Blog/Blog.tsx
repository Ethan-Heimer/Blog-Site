import { useNavigate } from "react-router-dom";
import Button, { ButtopnType } from "../Button";
import Content from "../ContentPage";
import { TBlogContent } from "../Editor/BlogDataProvider";

import BlogComponent from "./BlogContentFactory";

type TBlogProps = {
    Header: string;
    Content: TBlogContent[];
    Id: string

    editable?: boolean;
}


export default function Blog(props: TBlogProps){
    const Nav = useNavigate();
    console.log(props);

    const edit = () => {
        Nav("/blog/edit/"+props.Id);
    }
    
    return (
        <Content className="pad-1" header={(
           <div className="center-row">
                
                <h1 className="center font-large">{props.Header}</h1>

                {props.editable && 
                <div>
                    <Button onClick={edit} ButtonType={ButtopnType.Accent}>
                        Edit
                    </Button>

                    <Button onClick={() => {}} ButtonType={ButtopnType.Danger}>
                        Delete
                    </Button>
                </div>}
           </div>
        )}

        content={(
            <>
                {props.Content.map(x => {
                    return <BlogComponent data={x}/>
                })}       

                
            </>
        )}
        
        /> 
    )
}
