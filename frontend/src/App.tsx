import { BrowserRouter, Routes, Route, json} from 'react-router-dom'
import SignIn from './Pages/SignIn'
import CreateUser from './Pages/CreateUser'
import HomePage from './Pages/HomePage'
import React from 'react'
import {  useState, useContext } from 'react';
import CreatePost from './Pages/CreatePost'
import ProfilePage from './Pages/ProfilePage'
import BlogPage from './Pages/BlogPage'
import SocketIOProvider from './Componets/SockeIOProvider'


type TUserData = {
  UUID: string;
  SetUUID: React.Dispatch<React.SetStateAction<string>>;

  Username: string;
  SetUsername: React.Dispatch<React.SetStateAction<string>>;

  ProfilePicture: string;
  SetProfilePicture: (params: string) => void;
  UpdateProfilePicture: (params: string) => void;
}

const UserData: TUserData = {
  UUID: "",
  SetUUID: (() => undefined) as React.Dispatch<any>,

  Username: "",
  SetUsername: (() => undefined) as React.Dispatch<any>,

  ProfilePicture: "",
  SetProfilePicture: () => {},
  UpdateProfilePicture: () => {}
}

const userContext = React.createContext(UserData);

type TContextProps = {
  children: any;
}

function UserIdProvider(props: TContextProps){
  const [uuid, SetUUID] = useState("");
  const [username, SetUsername] = useState("");
  const [profilePicture, SetProfilePicture] = useState("");

  const setAvatar = async (url: string) => {
    console.log(url);  
    
    await fetch("http://localhost:3000/user/update/"+uuid, {
        method: "post",
        body: JSON.stringify({
          Username: username,
          ProfilePicture: url
        }),
        headers:{
          "Content-Type": "application/json"
      },
      })
      .then(res => res.json())
      .then(res => {
        if(res.status == 200){
          SetProfilePicture(url);
          console.log("profile set");
        }

        console.log(res);
      })
      .catch(error => console.log(error.message))
  }

  return (
    <userContext.Provider value={{UUID: uuid, SetUUID: SetUUID, Username: username, SetUsername: SetUsername, ProfilePicture: profilePicture, SetProfilePicture: SetProfilePicture, UpdateProfilePicture: setAvatar} as TUserData}>
      {props.children}
    </userContext.Provider>
  )
}


function App() {
  return (
    <UserIdProvider>
      <SocketIOProvider>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/user/create' element={<CreateUser/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/blog/edit/:id?" element={<CreatePost />} />
          <Route path="/profile/:id" element={<ProfilePage/>}/>
          <Route path="/blog/display/:id" element={<BlogPage/>} />
        </Routes>
      </BrowserRouter>
      </SocketIOProvider>
    </UserIdProvider>
  )
}

export default App

export function useUserData(){
  return useContext(userContext);
  //return [context.UUID, context.SetUUID];
}
