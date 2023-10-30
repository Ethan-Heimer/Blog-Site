import { TEditorContent } from "./BlogEditor";

export interface TEditorType{};

export class THeader implements TEditorType{};
export class TTextBox implements TEditorType{};

export default function GetContentObject<T extends TEditorType>() :TEditorContent{
    let content = {} as TEditorContent;
    content.dataType = {} as T;

    return content;
}

export function GetContentComponent(data: TEditorContent){
    if(data.dataType instanceof THeader){
        //create 
    }

}