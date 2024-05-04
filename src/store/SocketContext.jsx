import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";

// Create a context for the socket
const SocketContext = createContext();

// Custom hook to access the socket context
export const useSocketContext = () => {
  return useContext(SocketContext);
};

// SocketContextProvider component
export const SocketContextProvider = ({ children }) => {
  // State to hold the socket object
  const [socket, setSocket] = useState(null);

  // Effect hook to initialize the socket connection
  useEffect(() => {
    // Log that the effect is running
    console.log("Initializing socket connection...");

    // Initialize a new socket connection
    const newSocket = io("http://192.168.192.200:5100");

    // Log the newly created socket
    console.log("New socket created:", newSocket);

    // Set up event listeners or other configurations here if needed

    // Update the socket state with the newly created socket
    setSocket(newSocket);

    // Log that the effect is cleaning up
    return () => {
      console.log("Cleaning up socket connection...");
      // Close the socket connection when component unmounts
      newSocket.close();
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  // Log the socket object before returning the provider
  console.log("Socket object:", socket);

  // Return the SocketContextProvider with the socket object as value
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
