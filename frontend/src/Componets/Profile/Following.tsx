import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type TFollowingProps = {
    UUID: string;
}

export default function Following(props: TFollowingProps){
    const Nav = useNavigate()

    const[count, setCount] = useState("0");

    useEffect(() => {
        fetch("http://localhost:3000/user/following/count/"+props.UUID)
        .then(result => result.json())
        .then(result => {
            console.log(result.data);
            setCount(result.data);
        })
    }, [props.UUID])

    return (
        <button onClick={() => {Nav("/users/following/"+props.UUID)}}>
            <p className="font-med m-inline-1">Following {count}</p>
        </button>
    )
}