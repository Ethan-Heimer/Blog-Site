import {useEffect, useState} from 'react';
import { TBlogData } from './Blog';
import Blog from './Blog';

type TBlogsDisplayProps = {
    FromUser?: string
}

export default function BlogsDisplay(props: TBlogsDisplayProps){
    var defaultData: any[] = []
    const [data, setData] = useState(defaultData); 
    
    useEffect(() => {
        fetch("http://localhost:3000/blog/getall")
        .then(result => result.json())
        .then(res => {
            if(res.status != 200)
            {
                console.log("blogs not found", res.message);
                return;
            }

            setData(res.data);
        })
    },[])
    
    return(
        <div className='center'>
            {data.map(x => {
                const blogData: TBlogData={
                    title: x.Header,
                    content: x.Content
                }

                return (
                    <Blog data={blogData}/>
                )
            })}
        </div>
    )
}