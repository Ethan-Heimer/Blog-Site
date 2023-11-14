import { useParams } from "react-router-dom";
import BlogsDisplay, { DisplayType } from "../Componets/Blog/BlogsDisplay";
import Header from "../Componets/Header";

export default function HomePage(){
    const params = useParams();
    const search = params.search || "";

    return (
        <div className="bgi-two min-h-100">
            
            <Header />
            <p className="center m-1 font-xlarge text-shadow">Blogs</p>
            <BlogsDisplay Display={DisplayType.FromKeyWords} Keywords={search}/>
        </div>
    )
}