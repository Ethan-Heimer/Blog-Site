import BlogDataProvider from "../Componets/Editor/BlogDataProvider";
import BlogEditor from "../Componets/Editor/BlogEditor";
import Header from "../Componets/Header";

export default function CreatePost(){
    return(
        <>
            <Header/>

            <BlogDataProvider>
                <BlogEditor/>
            </BlogDataProvider>
        </>
    )
}