import React, { useState, useEffect } from "react";
import { parse } from "query-string";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import "./Chat.css";
import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

let socket: any;
const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    Array<{ user: string; text: string }>
  >([{ user: "", text: "" }]);
  const [users, setUsers] = useState("");
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = parse(location.search);
    socket = io(ENDPOINT);

    setName(String(name));
    setRoom(String(room));

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", ({ user, text }: { user: string; text: string }) => {
      setMessages([...messages, { user, text }]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  const sendMessage = (event: any) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
