import {useEffect, useState} from 'react';
import { useUserData } from '../../App';
import BlogCard from './BlogCard';

type TBlogsDisplayProps = {
    UUID?: string
    Keywords?: string;

    Display: DisplayType

    Editable?: boolean;
}

export enum DisplayType{
    All,
    FromUser,
    UserFavorites,
    FromKeyWords
}

export default function BlogsDisplay(props: TBlogsDisplayProps){
    const defaultData: any[] = []
    const [data, setData] = useState(defaultData);
    const userData = useUserData();
    
    useEffect(() => {
        let url = ""

        switch(props.Display){
            case DisplayType.All:
                url = "https://web-io-p635.onrender.com/blog/getAll"
                break;
            case DisplayType.FromUser:
                url = "https://web-io-p635.onrender.com/blog/getAll"+props.UUID;
                break;
            case DisplayType.UserFavorites:
                url = "https://web-io-p635.onrender.com/user/favorite/get/"+props.UUID;
                break;
            case DisplayType.FromKeyWords:
                url = "https://web-io-p635.onrender.com/blog/getbytitle/"+props.Keywords;
                break;
        }

        console.log(props.UUID);
        
        fetch(url)
        .then(result => result.json())
        .then(res => {
            console.log(res);
            
            if(res.status != 200)
            {
                console.log("blogs not found", res.message);
                return;
            }

            setData(res.data);
            console.log(res.data);
        })
    },[props])
    
    return(
        <div className='center-row wrap'>
            {data.map(x => {
                
                return (
                    <BlogCard authorId={x.UserId} id={x._id} title={x.Header} thumbnail={x.ThumbnailURL} editable={x.UserId == userData.UUID && props.Editable as boolean}/>
                )
            })}
        </div>
    )
}