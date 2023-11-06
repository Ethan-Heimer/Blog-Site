import { useEffect, useState } from "react";
import Tab from "./Tab";

export type TTabData = {
    label: string;
    element: JSX.Element
}

type TTabManagerProps = {
    tabs: TTabData[];

    tabClassName?: string 
    className?: string;
}

export default function TabManager(props: TTabManagerProps){
    const[currentView, setView] = useState(props.tabs[0].element);
    const[currentPressed, setPressed] = useState(props.tabs[0]);
    
    const onPressed = (data: TTabData) => {
        setView(data.element);
        setPressed(data);
    }

    useEffect(() => {
        onPressed(props.tabs[0]);
    }, [props.tabs])
    
    return(
        <>
            <div className={"w-100 row " + props.className}>
                {
                    props.tabs.map(x => {
                        return (<Tab className={props.tabClassName} label={x.label} pushed={currentPressed == x} onPressed={() => onPressed(x)} />)
                    })
                }
            </div>
            
            {currentView}
        </>
        )
}