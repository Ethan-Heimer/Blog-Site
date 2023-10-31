import {useEffect, useState} from 'react';
import Blog from './Blog';
import { TBlogData } from '../Editor/BlogEditor';

type TBlogsDisplayProps = {
    FromUser?: string
}

export default function BlogsDisplay(props: TBlogsDisplayProps){
    const defaultData: any[] = []
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
                const data: TBlogData = {
                    Header: x.Header,
                    Content: x.Content,

                    AddContentData: () => {},
                    RemoveContentData: () => {},

                    EditHeader: () => {}
                }

                return (
                    <Blog data={data}/>
                )
            })}
        </div>
    )
}