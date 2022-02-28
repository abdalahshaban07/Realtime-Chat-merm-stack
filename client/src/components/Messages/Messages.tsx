import React, { useRef, useEffect } from "react";
import Message from "./Message/Message";
import "./Messages.css";

const Messages = ({
  messages,
  name,
}: {
  messages: Array<{
    user: string;
    text: string;
  }>;
  name: string;
}) => {
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);
  return (
    <div className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
