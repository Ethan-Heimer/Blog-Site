import { useState } from "react";
import InputField from "../Utilities/FromInput";
import Button from "../Utilities/Button";
import { useNavigate } from "react-router-dom";

export default function SearchBox(){
    const[search, setSearch] = useState("");
    const Nav = useNavigate()

    return (
        <>
            <InputField placeholder="Search..." className="font-med pad-1" onValueChanged={setSearch}/>
            {search != "" && (
                <>
                    <Button className="m-inline-1" onClick={() => Nav("/home/"+search)}>
                        <p className="font-med text-block-shadow">Find Blog!</p>
                    </Button>

                    <Button className="m-inline-1" onClick={() => Nav("/users/search/"+search)}>
                        <p className="font-med text-block-shadow">Find Profile!</p>
                    </Button>
                </>
            )}
        </>
    )
}