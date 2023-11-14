
import {useBlogData } from "../Editor/BlogDataProvider";

type TTextBoxData = {
    defaultValue?: string
    
    onValueChanged: (param: string) => void;
    defaultHeight?: string | number;
    placeHolder?: string;
    
    className?: string;
}

export default function TextBox(props: TTextBoxData){
    const data = useBlogData();
    const startingValue = data.Content;
    
    return (
        <>
            <textarea style={{height: (props.defaultHeight != undefined ? props.defaultHeight : "5vh")}} placeholder={props.placeHolder != undefined ? props.placeHolder : ""} className={"w-100 bgc-three font-med h-50 " +props.className} onChange={e => props.onValueChanged(e.target.value)} defaultValue={startingValue}/>
        </>
    )
}
