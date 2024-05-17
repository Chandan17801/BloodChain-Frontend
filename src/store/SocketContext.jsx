import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SERVER_URL);
    console.log("New socket created:", newSocket);
    setSocket(newSocket);
    return () => {
      console.log("Cleaning up socket connection...");
      newSocket.close();
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  console.log("Socket object:", socket);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
