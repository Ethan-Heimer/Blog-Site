import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './Sign In Page/SignIn'
import CreateUser from './Sign In Page/CreateUser'
import HomePage from './Sign In Page/HomePage'
import React from 'react'
import {  useState, useContext } from 'react';
import CreatePost from './Sign In Page/CreatePost'

type TUserData = {
  UUID: string;
  SetUUID: React.Dispatch<React.SetStateAction<string>>;
}

const UserData: TUserData = {
  UUID: "",
  SetUUID: (() => undefined) as React.Dispatch<any>
}

const userContext = React.createContext(UserData);

type TContextProps = {
  children: any;
}

function UserIdProvider(props: TContextProps){
  const [uuid, SetUUID] = useState("");

  return (
    <userContext.Provider value={{UUID: uuid, SetUUID: SetUUID} as TUserData}>
      {props.children}
    </userContext.Provider>
  )
}


function App() {
 
  return (
    <UserIdProvider>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/user/create' element={<CreateUser/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/blog/create" element={<CreatePost />} />
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
