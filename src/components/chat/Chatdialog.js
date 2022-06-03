import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import ChatNav from '../chat/chatNav';
import Footer from '../Layout/footer';


const socket = io.connect("http://localhost:3001");

function Chatdialog() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
      <div>
   <ChatNav/>
    <div className="">
      {!showChat ? (
        <div className="joinChatContainer"><br/><br/><br/><br/><br/><br/>
      <h3>Join A Chat</h3>
   <div align="center">
     <input
        type="text"
          placeholder="Enter Name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          /><br/>
          <input
            type="text"
            placeholder="Enter Room ID "
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          /><br/>
          <button onClick={joinRoom}>Join A Room</button>
        </div></div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
    </div>
  );
}

export default Chatdialog;