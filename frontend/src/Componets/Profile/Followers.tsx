import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type TFollowingProps = {
    UUID: string;

    increment?: boolean
}

export default function Followers(props: TFollowingProps){
    const Nav = useNavigate()

    const[count, setCount] = useState("0");

    useEffect(() => {
        fetch("http://localhost:3000/user/followers/count/"+props.UUID)
        .then(result => result.json())
        .then(result => {
            console.log(result.data);

            const count = result.data + (props.increment ? 1 : 0)
            setCount(count);
        })
    }, [props])

    return (
        <button onClick={() => {Nav("/users/followers/"+props.UUID)}}>
            <p className="font-med">Followers {count}</p>
        </button>
    )
}