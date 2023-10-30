import { TEditorContent } from "../BlogEditor"

type TTextBoxInput = {
    data: TEditorContent
}

export default function TextBox(props: TTextBoxInput){
    const updateData = (value: string) => {
        props.data.content = value;
    }
    
    return (
        <>
            <textarea className="w-100 bgc-three font-med" onChange={e => updateData(e.target.value)}>Test</textarea>
        </>
    )
}
