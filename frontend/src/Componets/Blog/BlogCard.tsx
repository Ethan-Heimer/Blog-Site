import Content from "../Profile/ContentPage";
import Button, {ButtopnType} from "../Utilities/Button";
import { useNavigate } from "react-router-dom";
import ProfileWidget from "../Profile/ProfileWidget";

type TCardProps = {
    title: string;
    thumbnail: string
    id: string;

    authorId: string;

    editable?: boolean;
}

export default function BlogCard(props: TCardProps){
    const Nav = useNavigate();

    const edit = () => {
        Nav("/blog/edit/"+props.id);
    }

    const Delete = async () => {
        await fetch("https://web-io-p635.onrender.com/blog/delete/"+props.id, {method: "DELETE"});
        Nav("/home")
    }

    const Goto = () => {
        Nav("/blog/display/"+props.id);
    }

    return (
            <Content className="min-w-400 m-1 hover-pop shadow hover-underline m-down-5"
            header={
                <p className="font-med center text-block-shadow">{props.title}</p>
            }
            content={
            <div>
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
                </div>
                <ProfileWidget UUID={props.authorId} pictureSize={"1.8vmax"}/>
            </div>}
            />
    )
}