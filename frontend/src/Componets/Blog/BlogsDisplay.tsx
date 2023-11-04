import {useEffect, useState} from 'react';
import Blog from './Blog';

import { useUserData } from '../../App';
import { TBlogData } from '../Editor/BlogDataProvider';
import BlogCard from './BlogCard';

type TBlogsDisplayProps = {
    FromUser?: string
}

export default function BlogsDisplay(props: TBlogsDisplayProps){
    const defaultData: any[] = []
    const [data, setData] = useState(defaultData);
    const userData = useUserData();
    
    useEffect(() => {
        console.log("http://localhost:3000/blog/getAll"+(props.FromUser ? props.FromUser : ""))

        fetch("http://localhost:3000/blog/getAll"+(props.FromUser ? props.FromUser : ""))
        .then(result => result.json())
        .then(res => {
            if(res.status != 200)
            {
                console.log("blogs not found", res.message);
                return;
            }

            setData(res.data);
            console.log(res.data);
        })
    },[])
    
    return(
        <div className='center-row wrap'>
            {data.map(x => {
                
                return (
                    <BlogCard authorId={x.UserId} id={x._id} title={x.Header} thumbnail={x.ThumbnailURL} editable={props.FromUser == userData.UUID}/>
                )
            })}
        </div>
    )
}