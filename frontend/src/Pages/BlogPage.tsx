import { useParams } from "react-router-dom";
import Header from "../Componets/Header";
import {useEffect, useState} from "react"
import Blog from "../Componets/Blog/Blog";

export default function BlogPage(){
    const params = useParams();

    const[header, setHeader] = useState('');
    const[content, setContent] = useState('');
    const[author, setAuthor] = useState('');

    useEffect(() => {
        console.log("test");
        fetch("https://web-io-p635.onrender.com/blog/get/"+params.id)
        .then(res => res.json())
        .then(res => { 
            if(res.status == 200){
                
                setHeader(res.data.Header);
                setContent(res.data.Content);
                setAuthor(res.data.UserId);

               
            }  
        })
        .catch(error => {
            console.warn('Error', error);
        })
    }, [])

    return(
        <div className="bgi-three min-h-100">
            <Header />

            <div className="center">
                <Blog BlogId={params.id as string} AuthorId={author} Header={header} Content={content}/>
            </div>
        </div>
    )
}