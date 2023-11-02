import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './Pages/SignIn'
import CreateUser from './Pages/CreateUser'
import HomePage from './Pages/HomePage'
import React from 'react'
import {  useState, useContext } from 'react';
import CreatePost from './Pages/CreatePost'
import ProfilePage from './Pages/ProfilePage'
import {Cloudinary} from "@cloudinary/url-gen";


type TUserData = {
  UUID: string;
  SetUUID: React.Dispatch<React.SetStateAction<string>>;

  Username: string;
  SetUsername: React.Dispatch<React.SetStateAction<string>>;
}

const UserData: TUserData = {
  UUID: "",
  SetUUID: (() => undefined) as React.Dispatch<any>,

  Username: "",
  SetUsername: (() => undefined) as React.Dispatch<any>
}

const userContext = React.createContext(UserData);

type TContextProps = {
  children: any;
}

function UserIdProvider(props: TContextProps){
  const [uuid, SetUUID] = useState("");
  const [username, SetUsername] = useState("");

  return (
    <userContext.Provider value={{UUID: uuid, SetUUID: SetUUID, Username: username, SetUsername: SetUsername} as TUserData}>
      {props.children}
    </userContext.Provider>
  )
}


function App() {
  const cld = new Cloudinary({cloud: {cloudName: 'dv3vwo8if'}});

  return (
    <UserIdProvider>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/user/create' element={<CreateUser/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/blog/edit/:id?" element={<CreatePost />} />
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </UserIdProvider>
  )
}

export default App

export function useUserData(){
  return useContext(userContext);
  //return [context.UUID, context.SetUUID];
}
