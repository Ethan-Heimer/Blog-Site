import axios from "axios";

type TUploadFileProps = {
    onUpload: (url: string) => void;
}

export default function UploadFile(props: TUploadFileProps){
    const preset_key = "default";
    const cloud_name = 'dv3vwo8if';
    
    const onValueChanged = (event: any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset_key);

        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
        .then(res =>{
            console.log(res);
            props.onUpload(res.data.secure_url)
        })
        .then(err => console.log(err));
        
    }

    return(
        <>
            <label className="font-med m-inline-1">Thumbnail</label>
            <input type="file" name="image" onChange={onValueChanged}></input>
        </>
    )
}