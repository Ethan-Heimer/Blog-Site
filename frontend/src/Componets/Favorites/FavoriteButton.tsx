import {useState, useEffect} from "react"
import { useUserData } from "../../App";

type TFavoriteToggleProps = {
    blogId: string
    authorId: string;
}

export default function FavoriteToggle(props: TFavoriteToggleProps){
    const[favorite, setFavorite] = useState(false);
    const userData = useUserData();
    
    useEffect(() => {
       fetch(`http://localhost:3000/user/favorite/${userData.UUID}/has/${props.blogId}`, {
        }).then(result => result.json())
        .then(result => {
            if(result.status == 200){
                setFavorite(result.data);
            }
            else{
                console.log("has failed");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    

    const toggle = () => {
        //add();
        if(!favorite)
            add();
        else
            remove();
        setFavorite(!favorite)
    }

    const add = async () => {
        await fetch("http://localhost:3000/user/favorite/add/"+userData.UUID, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                blogId: props.blogId
            }),
        }).then(resault => resault.json())
        .then(result => {
            if(result.status != 200){
                console.log(result.error);
            }
            else{
                console.log(result.message);
            }
        })
    }

    const remove = async () => {
        await fetch("http://localhost:3000/user/favorite/remove/"+userData.UUID, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                blogId: props.blogId
            }),
        }).then(resault => resault.json())
        .then(result => {
            if(result.status != 200){
                console.log(result.error);
            }
            else{
                console.log(result.message);
            }
        })
    }   

    return(
        <>
        {
            (userData.UUID != "" && props.authorId != userData.UUID) &&
            (<div className="row">
                Favorite:
                <button className="hover-scale" onClick={toggle}>
                    <i className={"fa-solid fa-star font-med m-1 " + (favorite ? "font-color-three" : "")}></i>
                </button>
            </div>)
        }
        </>
    )
}