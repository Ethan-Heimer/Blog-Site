import BlogEditorDisplay from "./BlogEditorDisplay";
import BlogEditorOptions from "./BlogEditorOptions";
import SubmitBlog from "./input/SubmitBlog";

export default function BlogEditor(){
    return (
        <div className = "center">
            <form className="w-100 center m-1">
                <BlogEditorDisplay/>
                <BlogEditorOptions/>
                <SubmitBlog/>
            </form>
        </div>
    )
}