import { useNavigate } from "react-router-dom";
import Button, { ButtopnType } from "../Button";
import Content from "../ContentPage";
import Markdown from "markdown-to-jsx";

type TBlogProps = {
    Header: string;
    Content: string;
    Id: string

    editable?: boolean;
}

export default function Blog(props: TBlogProps){
    const Nav = useNavigate();
    console.log(props);

    const edit = () => {
        Nav("/blog/edit/"+props.Id);
    }

    const Delete = async () => {
        await fetch("http://localhost:3000/blog/delete/"+props.Id, {method: "DELETE"});
        Nav("/home")
    }
    
    return (
        <Content width="w-90" className="pad-1 blog" header={(
           <div className="center-row">
                
                <h1 className="center font-large">{props.Header}</h1>

                {props.editable && 
                <div>
                    <Button onClick={edit} ButtonType={ButtopnType.Accent}>
                        Edit
                    </Button>

                    <Button onClick={Delete} ButtonType={ButtopnType.Danger}>
                        Delete
                    </Button>
                </div>}
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
