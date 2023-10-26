import Content from "../Componets/ContentPage";

type TBlogProps = {
    data: TBlogData
}

export type TBlogData = {
    title: String;
    content: String;
}

export default function Blog(props: TBlogProps){
    return (
        
        <Content className="pad-1" header={(
           <>
                <h1 className="center font-large">{props.data.title}</h1>
           </>
       )}

       content={(
            <>
                {props.data.content}
            </>
       )}
        
        />

        
    )
}