import * as io from "socket.io-client";
import {  useState, useContext, createContext, useMemo } from 'react';

type SocketContext = {
    socket: any;
}

const socketContext: SocketContext={
    socket: (undefined as any)
}

const context = createContext(socketContext)

type TIOProviderProps = {
    children: any
}

export default function SocketIOProvider(props :TIOProviderProps){
    const socket = useMemo(() => {
        return io.connect("http://localhost:3000");
    },[]);
    
    return(
        <context.Provider value={{socket: socket}}>
            {props.children}
        </context.Provider>
    )
}

export function useSocketIO(){
    return useContext(context);
}