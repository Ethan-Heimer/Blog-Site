import { TBlogContent } from "./BlogDataProvider";
import { TEditorType } from "./ContentFactory";

type TOptionsProps = {
    IconName: string;
    OptionName: string;
    
    Factory: <T extends TEditorType>() => TBlogContent;
    AddFunc: (params: TBlogContent) => void;
}

export default function EditorOptionButton(props: TOptionsProps){
    const AddData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        const data: TBlogContent = props.Factory();
        props.AddFunc(data); 
    }
    
    return(
       <button onClick={(e) => AddData(e)}>
            <div className = "bgc-three center pad-1 bind-parent hover-pop">
                <i className={`fa-solid ${props.IconName} font-xlarge parent-hover-tilt`}></i>
                <p>{props.OptionName}</p>
            </div>
       </button>
    )
}