import BlogCard from "../Componets/Blog/BlogCard";
import BlogsDisplay from "../Componets/Blog/BlogsDisplay";
import Header from "../Componets/Header";

export default function HomePage(){
    return (
        <>
            <Header />
            <BlogCard title="Test" id="akjfldfbsdlkjfbslkdb" thumbnail="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"/>
            <BlogsDisplay />
        </>
    )
}