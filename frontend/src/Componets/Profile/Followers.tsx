import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocketIO } from "../SockeIOProvider";

type TFollowingProps = {
    UUID: string;
}

export default function Followers(props: TFollowingProps){
    const context = useSocketIO();
    const Nav = useNavigate()

    const[count, setCount] = useState("0");

    useEffect(() => {
        fetch("https://web-io-p635.onrender.com/user/followers/count/"+props.UUID)
        .then(result => result.json())
        .then(result => {
            console.log(result.data);
            setCount(result.data);
        })
        
        context.socket.on("follower_updated_"+props.UUID, (data: any) => {
            console.log(data.Count);
            setCount(data.Count);
       })
    }, [props, context.socket])

    return (
        <button onClick={() => {Nav("/users/followers/"+props.UUID)}}>
            <p className="font-med">Followers {count}</p>
        </button>
    )
}