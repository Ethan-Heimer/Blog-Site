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
    return (
        <Content width="w-20"
        header={
            <p className="font-large center">{props.title}</p>
        }
        content={
        <div className="center">
            <img className="w-90" src={props.thumbnail} title="Thumbnail" alt="image"></img>
            <Button className="m-1 font-med" onClick={() => {}}>
                Read
            </Button>
            {props.editable && 
                <div>
                    <Button onClick={edit} ButtonType={ButtopnType.Accent}>
                         Edit
                    </Button>

                    <Button onClick={Delete} ButtonType={ButtopnType.Danger}>
                        Delete
                    </Button>
                </div>}

        </div>}
        />
    )
}