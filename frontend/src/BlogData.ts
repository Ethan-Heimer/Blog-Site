export type TBlogData = {
    Header: string;
    Content: Array<TBlogContent>;
   
    AddContentData: Function;
    RemoveContentData: Function;
   
    EditHeader: Function;
   }
   
   export type TBlogContent = {
       dataType: string,
       content: string
   }

   export type TBlog= {
    Header: string;
    content: Array<TBlogContent>;
   }
   
   const EditorData: TBlogData = {
     Header: "",  
     Content: [],
   
     AddContentData: () => {},
     RemoveContentData: () => {},
   
     EditHeader: () => {}
   }

export class Blog{
    blog: TBlog = {
        Header: "",
        content: [] as TBlogContent[]
    }

    AddContent(data: TBlogContent){
        this.blog.content.push(data);
    }

    RemoveContent(data: TBlogContent){
        let newContent: TBlogContent[] = [...this.blog.content];
        newContent = newContent.filter((item)=> item !== data);

        this.blog.content = newContent;
    }

    EditHeader(value: string){
        this.blog.Header = value;
    }

    GetBlog(){
        return this.blog;
    }
}