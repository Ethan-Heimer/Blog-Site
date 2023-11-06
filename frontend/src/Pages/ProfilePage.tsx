import { useParams } from "react-router-dom";
import BlogsDisplay, { DisplayType } from "../Componets/Blog/BlogsDisplay";
import Header from "../Componets/Header";
import ProfileDataDisplay from "../Componets/Profile/ProfileDataSection";
import TabManager, { TTabData } from "../Componets/Utilities/TabManager";
import {useMemo, useState, useEffect} from "react"



export default function ProfilePage(){
    const params = useParams();
    const[id, setId] = useState(params.id as string);

    useEffect(() => {
        setId(params.id as string);
    }, [params.id])

    const TabManagerData: TTabData[] = useMemo(() => {
        return [
            {
                label: "From User",
                element: (<BlogsDisplay Display={DisplayType.FromUser} UUID={id} Editable={true}/>)
            },
            {
                label: "User Favorites",
                element: (<div><BlogsDisplay Display={DisplayType.UserFavorites} UUID={id}/></div>)
            }
        ]
    }, [id]) 

    return(
        <div className="bgi-two min-h-100">
            <Header shadow={false}/>

            <ProfileDataDisplay UUID={id}/>

            <TabManager className="up-1" tabClassName="font-large span-given m-down-5" tabs={TabManagerData} />
        </div>
    )
}