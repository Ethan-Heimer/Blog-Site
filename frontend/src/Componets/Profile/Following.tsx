import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocketIO } from "../SockeIOProvider";

type TFollowingProps = {
    UUID: string;
}

export default function Following(props: TFollowingProps){
    const Nav = useNavigate();
    const context = useSocketIO();

    const[count, setCount] = useState("0");

    useEffect(() => {
        fetch("http://localhost:3000/user/following/count/"+props.UUID)
        .then(result => result.json())
        .then(result => {
            console.log(result.data);
            setCount(result.data);
        })

        context.socket.on("following_updated_"+props.UUID, (data: any) => {
            console.log(data.Count);
            setCount(data.Count);
       })
    }, [props.UUID])

    return (
        <button onClick={() => {Nav("/users/following/"+props.UUID)}}>
            <p className="font-med m-inline-1">Following {count}</p>
        </button>
    )
}