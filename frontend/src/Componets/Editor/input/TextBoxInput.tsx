import { useState} from "react";
import {useBlogData } from "../BlogDataProvider";
import InputField from "../../FromInput";

type TTextBoxData = {
    defaultValue?: string
    
    onValueChanged: (param: string) => void;
}

export default function TextBox(props: TTextBoxData){
    const data = useBlogData();
    const startingValue = data.Content;
    
    return (
        <>
            <textarea placeholder="enter markup..." className="w-100 bgc-three font-med h-50" onChange={e => props.onValueChanged(e.target.value)} defaultValue={startingValue}/>
        </>
    )
}
