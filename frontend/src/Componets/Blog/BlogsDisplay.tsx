import {useEffect, useState} from 'react';
import Blog from './Blog';

import { useUserData } from '../../App';
import { TBlogData } from '../Editor/BlogDataProvider';

type TBlogsDisplayProps = {
    FromUser?: string
}

export default function BlogsDisplay(props: TBlogsDisplayProps){
    const defaultData: any[] = []
    const [data, setData] = useState(defaultData);
    const userData = useUserData();
    
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
                console.log(x._id);
                
                return (
                    <Blog Id={x._id} Header={x.Header} Content={x.Content} editable={props.FromUser == userData.UUID}/>
                )
            })}
        </div>
    )
}