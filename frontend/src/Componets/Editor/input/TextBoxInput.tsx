import { useState} from "react";
import {useBlogData } from "../BlogDataProvider";

type TTextBoxData = {
    defaultValue?: string
    
    onValueChanged: (param: string) => void;
}

export default function TextBox(props: TTextBoxData){
    const data = useBlogData();
    const startingValue = data.Content;
    
    return (
        <>
            <textarea className="w-100 bgc-three font-med" onChange={e => props.onValueChanged(e.target.value)} defaultValue={startingValue}/>
        </>
    )
}
