import { useParams } from "react-router-dom";
import Header from "../Componets/Header";
import {useEffect, useState} from "react"
import Blog from "../Componets/Blog/Blog";

export default function BlogPage(){
    const params = useParams();

    const[header, setHeader] = useState('');
    const[content, setContent] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/blog/get/"+params.id)
        .then(res => res.json())
        .then(res => { 
            if(res.status == 200){
                console.log(res.data, "data");
                
                setHeader(res.data.Header);
                setContent(res.data.Content);
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

                <Blog Header={header} Content={content}/>
            </div>
        </div>
    )
}