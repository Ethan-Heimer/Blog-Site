import Content from "../ContentPage";
import image from "../../assets/placeHolder.png";
import Button, {ButtopnType} from "../Button";
import { useNavigate } from "react-router-dom";

type TCardProps = {
    title: string;
    thumbnail: string
    id: string;

    editable?: boolean;
}

export default function BlogCard(props: TCardProps){
    const Nav = useNavigate();

    const edit = () => {
        Nav("/blog/edit/"+props.id);
    }

    const Delete = async () => {
        await fetch("http://localhost:3000/blog/delete/"+props.id, {method: "DELETE"});
        Nav("/home")
    }

    const Goto = () => {
        Nav("/blog/display/"+props.id);
    }

    return (
            <Content className="min-w-400 m-1 hover-pop shadow hover-underline m-down-5"
            header={
                <p className="font-med center">{props.title}</p>
            }
            content={
            <div className="center">
                <button onClick={Goto}>
                    <img className="thumbnail" src={props.thumbnail} title="Thumbnail" alt="image"></img>
                </button>
                
                {props.editable && 
                    <div className="m-1">
                        <Button onClick={edit} ButtonType={ButtopnType.Accent}>
                            <p className="font-med">Edit</p>
                        </Button>

                        <Button onClick={Delete} ButtonType={ButtopnType.Danger}>
                            <p className="font-med">Delete</p>
                        </Button>
                    </div>}
            </div>}
            />
    )
}