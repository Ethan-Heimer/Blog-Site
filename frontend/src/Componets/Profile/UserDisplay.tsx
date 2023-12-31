import {useState, useEffect} from "react"
import UserCard from "./User";

type TUserDisplayProps = {
    input: string;
    displayType: DisplayType;
}

export enum DisplayType{
    BySearch,
    ByFollowing,
    ByFollowers
}

export default function UserDisplay(props: TUserDisplayProps){
    const[data, setData] = useState([] as string[]);

    useEffect(() => {
        let url = "";

        switch(props.displayType)
        {
            case DisplayType.BySearch:
                url = "https://web-io-p635.onrender.com/user/getbysearch/"+props.input
                break;
            case DisplayType.ByFollowing:
                url = "https://web-io-p635.onrender.com/user/following/get/"+props.input
                break;
            case DisplayType.ByFollowers:
                url = "https://web-io-p635.onrender.com/user/followers/get/"+props.input
                break;
        }

        console.log(url);
        
        fetch(url)
        .then(result => result.json())
        .then(result => {
            setData(result.data);
            console.log(result.data, "Users");
        })
        .catch(error => console.log(error))
    }, [props.input, props.displayType])

    return(
        <div>
           {data.map(x => {return (<UserCard UUID={x}/>)})}
        </div>
    )
}