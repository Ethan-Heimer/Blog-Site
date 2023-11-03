import BlogsDisplay from "../Componets/Blog/BlogsDisplay";
import Header from "../Componets/Header";

export default function HomePage(){
    return (
        <div className="bgi-two min-h-100">
            
            <Header />
            <p className="center m-1 font-xlarge text-shadow">Blogs</p>
            <BlogsDisplay />
        </div>
    )
}